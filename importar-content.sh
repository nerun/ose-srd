#!/bin/bash

########################################################################
# Baixa e extrai o repositório
ZIP="master.zip"
curl -L -o "$ZIP" "https://github.com/pedroleone/ose-srd/archive/refs/heads/master.zip"
unzip -q "$ZIP"
EXTRACTED=$(unzip -Z1 "$ZIP" | head -1 | cut -d/ -f1)
rm -rf content
mv "$EXTRACTED/content" .
rm -rf "$EXTRACTED" "$ZIP"


########################################################################
# Numeração de pastas na ordem que aparecem no Sumário
cd content
mv personagens 1-personagens
mv classes 2-classes
mv equipamentos 3-equipamentos
mv magias 4-magias
mv jogando-jogo 5-jogando-jogo
mv monstros 6-monstros
mv mestrando-aventuras 7-mestrando-aventuras
mv tesouros 8-tesouros

# Numeração de arquivos-mestre de capítulo
mv personagens.md 1-personagens.md
mv classes.md 2-classes.md
mv equipamentos.md 3-equipamentos.md
mv magias.md 4-magias.md
mv jogando-jogo.md 5-jogando-jogo.md
mv monstros.md 6-monstros.md
mv mestrando-aventuras.md 7-mestrando-aventuras.md
mv tesouros.md 8-tesouros.md
cd ..


########################################################################
# Converte YAML frontmatter em headings markdown
convert_file() {
    local file="$1"
    local tmpfile=$(mktemp)

    local title=$(grep '^title:' "$file" | sed 's/title: *"\(.*\)"/\1/')

    awk '
        BEGIN { in_front=0; done=0 }
        /^---$/ && !done {
            if (in_front) { in_front=0; done=1 }
            else { in_front=1 }
            next
        }
        done { print }
    ' "$file" | sed -E '
                            s/^#{6} /####### /
                            s/^#{5} /######  /
                            s/^#{4} /##### /
                            s/^#{3} /#### /
                            s/^#{2} /### /
                            s/^# /## /
                       ' | sed '/./,$!d' > "$tmpfile"

    { echo "# $title"; echo; cat "$tmpfile"; } > "$file"
    rm "$tmpfile"
}

export -f convert_file

find content -name "*.md" -exec bash -c 'convert_file "$0"' {} \;


########################################################################
# Converte <Link to="...">texto</Link> para [texto](...)
find content -name "*.md" -exec sed -i -E 's|<Link to="([^"]+)">([^<]+)</Link>|[\2](\1)|g' {} \;

# Deleta: 'import { Link } from "gatsby"'
find content -name "*.md" -exec sed -i '/import { *Link *} from "gatsby"/d' {} \;

# Corrige links
find content -name "*.md" -exec sed -i -E '
    s|\(/classes/1-anao\)|(/2-classes/1-anao.md)|g
    s|\(/classes/2-clerigo\)|(/2-classes/2-clerigo.md)|g
    s|\(/classes/3-elfo\)|(/2-classes/3-elfo.md)|g
    s|\(/classes/4-guerreiro\)|(/2-classes/4-guerreiro.md)|g
    s|\(/classes/5-halfling\)|(/2-classes/5-halfling.md)|g
    s|\(/classes/6-ladrao\)|(/2-classes/6-ladrao.md)|g
    s|\(/classes/7-mago\)|(/2-classes/7-mago.md)|g
    s|\(/equipamentos/07-seguidores.md\)|(/3-equipamentos/07-seguidores.md)|g
    s|\(/jogando-jogo/02-tempo-peso-movimento\)|(/5-jogando-jogo/02-tempo-peso-movimento.md)|g
    s|\(/jogando-jogo/07-aventuras-aquaticas\)|(/5-jogando-jogo/07-aventuras-aquaticas.md)|g
    s|\(/equipamentos/06-veiculos-arquaticos\)|(/3-equipamentos/06-veiculos-aquaticos.md)|g
    s|\(/equipamentos/09-especialistas\)|(/3-equipamentos/09-especialistas.md)|g
' {} \;


########################################################################
# Constrói Sumário
CONTENT="content"
SUMMARY="$CONTENT/SUMMARY.md"

get_title() {
    grep '^# ' "$1" | head -1 | sed 's/^# //'
}

cat > "$SUMMARY" << 'EOF'
# Summary

[Old School Essentials SRD](index.md)

---

EOF

# Seções principais (arquivos com prefixo numérico no raiz)
for rootfile in "$CONTENT"/[0-9]*.md; do
    [ -f "$rootfile" ] || continue
    base=$(basename "$rootfile" .md)        # ex: 1-personagens
    title=$(get_title "$rootfile")
    echo "- [$title]($base.md)" >> "$SUMMARY"

    # Subpasta correspondente
    dir="$CONTENT/$base"
    [ -d "$dir" ] || { echo >> "$SUMMARY"; continue; }

    for file in "$dir"/[0-9]*.md; do
        [ -f "$file" ] || continue
        fname=$(basename "$file" .md)
        ftitle=$(get_title "$file")

        # Verifica se existe subsubpasta
        subdir="$dir/$fname"
        if [ -d "$subdir" ]; then
            echo "  - [$ftitle]($base/$fname.md)" >> "$SUMMARY"
            for subfile in "$subdir"/[0-9]*.md; do
                [ -f "$subfile" ] || continue
                subtitle=$(get_title "$subfile")
                subname=$(basename "$subfile")
                echo "    - [$subtitle]($base/$fname/$subname)" >> "$SUMMARY"
            done
        else
            echo "  - [$ftitle]($base/$fname.md)" >> "$SUMMARY"
        fi
    done

    echo >> "$SUMMARY"
done

# Rodapé
cat >> "$SUMMARY" << EOF
---

- [$(get_title "$CONTENT/dicionariodetermos.md")](dicionariodetermos.md)
- [$(get_title "$CONTENT/open-game-license.md")](open-game-license.md)
EOF

# MdBook
echo
mdbook clean
mdbook build
