#!/usr/bin/python3
# -*- coding: utf-8 -*-
import re
import sys
from pathlib import Path
from docutils.core import publish_parts


def is_table_line(line):
    return (
        re.match(r'^\+[-=+]+\+', line) or
        re.match(r'^\|', line)
    )


def extract_table(lines, start):
    block = []
    i = start

    while i < len(lines) and is_table_line(lines[i]):
        block.append(lines[i])
        i += 1

    return block, i


def rst_table_to_html(table_lines):
    rst = '\n'.join(table_lines) + '\n'

    try:
        parts = publish_parts(
            source=rst,
            writer_name='html5'
        )
        html = parts['html_body']
        return html.strip()
    except Exception as e:
        print(f'Erro ao converter tabela: {e}', file=sys.stderr)
        return None


def convert_file(path):
    text = path.read_text(encoding='utf-8')
    lines = text.splitlines()

    output = []
    i = 0

    while i < len(lines):
        if re.match(r'^\+[-=+]+\+', lines[i]):
            table_lines, new_i = extract_table(lines, i)

            html = rst_table_to_html(table_lines)

            if html:
                output.append(html)
            else:
                output.extend(table_lines)

            i = new_i
        else:
            output.append(lines[i])
            i += 1

    new_text = '\n'.join(output) + '\n'

    if new_text != text:
        path.write_text(new_text, encoding='utf-8')
        print(f'Convertido: {path}')


def main():
    content_dir = Path('content')

    if not content_dir.exists():
        print('Diretório "content" não encontrado.', file=sys.stderr)
        sys.exit(1)

    for md_file in sorted(content_dir.rglob('*.md')):
        convert_file(md_file)


if __name__ == '__main__':
    main()
