// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="index.html">Old School Essentials SRD</a></span></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-personagens.html"><strong aria-hidden="true">1.</strong> Personagens</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-personagens/1-estatisticas.html"><strong aria-hidden="true">1.1.</strong> Estatísticas de Jogo ✔️</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-personagens/2-criando-personagem.html"><strong aria-hidden="true">1.2.</strong> Criando um Personagem</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-personagens/3-atributos.html"><strong aria-hidden="true">1.3.</strong> Atributos</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-personagens/4-alinhamento.html"><strong aria-hidden="true">1.4.</strong> Alinhamento</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-personagens/5-idiomas.html"><strong aria-hidden="true">1.5.</strong> Idiomas</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-personagens/6-progressao.html"><strong aria-hidden="true">1.6.</strong> Progressão</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-personagens/7-riquezas.html"><strong aria-hidden="true">1.7.</strong> Riquezas</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1-personagens/8-empregados.html"><strong aria-hidden="true">1.8.</strong> Empregados</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-classes.html"><strong aria-hidden="true">2.</strong> Classes</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-classes/1-anao.html"><strong aria-hidden="true">2.1.</strong> Anão</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-classes/2-clerigo.html"><strong aria-hidden="true">2.2.</strong> Clérigo</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-classes/3-elfo.html"><strong aria-hidden="true">2.3.</strong> Elfo</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-classes/4-guerreiro.html"><strong aria-hidden="true">2.4.</strong> Guerreiro</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-classes/5-halfling.html"><strong aria-hidden="true">2.5.</strong> Halfling</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-classes/6-ladrao.html"><strong aria-hidden="true">2.6.</strong> Ladrão</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2-classes/7-mago.html"><strong aria-hidden="true">2.7.</strong> Mago</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-equipamentos.html"><strong aria-hidden="true">3.</strong> Equipamentos</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-equipamentos/01-equipamento-aventureiros.html"><strong aria-hidden="true">3.1.</strong> Equipamentos de Aventureiro</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-equipamentos/02-armas-armaduras.html"><strong aria-hidden="true">3.2.</strong> Armas e Armaduras</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-equipamentos/03-montarias.html"><strong aria-hidden="true">3.3.</strong> Montarias</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-equipamentos/04-regras-veiculos.html"><strong aria-hidden="true">3.4.</strong> Regras de Veículos</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-equipamentos/05-veiculos-terrestres.html"><strong aria-hidden="true">3.5.</strong> Veículos Terrestres</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-equipamentos/06-veiculos-aquaticos.html"><strong aria-hidden="true">3.6.</strong> Veículos Aquáticos</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-equipamentos/07-seguidores.html"><strong aria-hidden="true">3.7.</strong> Seguidores</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-equipamentos/08-mercenarios.html"><strong aria-hidden="true">3.8.</strong> Mercenários</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-equipamentos/09-especialistas.html"><strong aria-hidden="true">3.9.</strong> Especialistas</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3-equipamentos/10-fortalezas.html"><strong aria-hidden="true">3.10.</strong> Fortalezas</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4-magias.html"><strong aria-hidden="true">4.</strong> Magias</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4-magias/1-regras.html"><strong aria-hidden="true">4.1.</strong> Regras</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4-magias/2-grimorio.html"><strong aria-hidden="true">4.2.</strong> Grimório</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4-magias/3-pesquisas-magicas.html"><strong aria-hidden="true">4.3.</strong> Pesquisas Mágicas</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4-magias/4-lista-clerigo.html"><strong aria-hidden="true">4.4.</strong> Lista Clérigo</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4-magias/4-lista-clerigo/1-nivel.html"><strong aria-hidden="true">4.4.1.</strong> 1º Nível</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4-magias/4-lista-clerigo/2-nivel.html"><strong aria-hidden="true">4.4.2.</strong> 2º Nível</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4-magias/4-lista-clerigo/3-nivel.html"><strong aria-hidden="true">4.4.3.</strong> 3º Nível</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4-magias/4-lista-clerigo/4-nivel.html"><strong aria-hidden="true">4.4.4.</strong> 4º Nível</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4-magias/4-lista-clerigo/5-nivel.html"><strong aria-hidden="true">4.4.5.</strong> 5º Nível</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4-magias/5-lista-mago.html"><strong aria-hidden="true">4.5.</strong> Lista Mago</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4-magias/5-lista-mago/1-nivel.html"><strong aria-hidden="true">4.5.1.</strong> 1º Nível</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4-magias/5-lista-mago/2-nivel.html"><strong aria-hidden="true">4.5.2.</strong> 2º Nível</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4-magias/5-lista-mago/3-nivel.html"><strong aria-hidden="true">4.5.3.</strong> 3º Nível</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4-magias/5-lista-mago/4-nivel.html"><strong aria-hidden="true">4.5.4.</strong> 4º Nível</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4-magias/5-lista-mago/5-nivel.html"><strong aria-hidden="true">4.5.5.</strong> 5º Nível</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4-magias/5-lista-mago/6-nivel.html"><strong aria-hidden="true">4.5.6.</strong> 6º Nível</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5-jogando-jogo.html"><strong aria-hidden="true">5.</strong> Jogando o Jogo</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5-jogando-jogo/01-organizacao-grupo.html"><strong aria-hidden="true">5.1.</strong> Organização do Grupo</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5-jogando-jogo/02-tempo-peso-movimento.html"><strong aria-hidden="true">5.2.</strong> Tempo, Peso e Movimento</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5-jogando-jogo/03-testes-dano-resistencia.html"><strong aria-hidden="true">5.3.</strong> Testes, Dano e Resistência</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5-jogando-jogo/04-perigos-desafios.html"><strong aria-hidden="true">5.4.</strong> Perigos e Desafios</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5-jogando-jogo/05-aventuras-masmorras.html"><strong aria-hidden="true">5.5.</strong> Aventuras em Masmorras</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5-jogando-jogo/06-aventuras-ermos.html"><strong aria-hidden="true">5.6.</strong> Aventuras nos Ermos</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5-jogando-jogo/07-aventuras-aquaticas.html"><strong aria-hidden="true">5.7.</strong> Aventuras Aquáticas</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5-jogando-jogo/08-encontros.html"><strong aria-hidden="true">5.8.</strong> Encontros</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5-jogando-jogo/09-evasao-perseguicao.html"><strong aria-hidden="true">5.9.</strong> Evasão e Perseguição</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5-jogando-jogo/10-combate.html"><strong aria-hidden="true">5.10.</strong> Combate</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5-jogando-jogo/11-outras-regras-combate.html"><strong aria-hidden="true">5.11.</strong> Outras Regras de Combate</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5-jogando-jogo/12-moral.html"><strong aria-hidden="true">5.12.</strong> Moral</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5-jogando-jogo/13-tabelas-combate.html"><strong aria-hidden="true">5.13.</strong> Tabelas de Combate</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6-monstros.html"><strong aria-hidden="true">6.</strong> Monstros</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6-monstros/1-basico.html"><strong aria-hidden="true">6.1.</strong> Básico</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6-monstros/2-descricao-monstros.html"><strong aria-hidden="true">6.2.</strong> Descrição dos Monstros</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6-monstros/2-descricao-monstros/01-lista-A-C.html"><strong aria-hidden="true">6.2.1.</strong> Lista Monstros A-C</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6-monstros/2-descricao-monstros/02-lista-D-F.html"><strong aria-hidden="true">6.2.2.</strong> Lista Monstros D-F</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6-monstros/2-descricao-monstros/03-lista-G-K.html"><strong aria-hidden="true">6.2.3.</strong> Lista Monstros G-K</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6-monstros/2-descricao-monstros/04-lista-L-N.html"><strong aria-hidden="true">6.2.4.</strong> Lista Monstros L-N</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6-monstros/2-descricao-monstros/05-lista-O-S.html"><strong aria-hidden="true">6.2.5.</strong> Lista Monstros O-S</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6-monstros/2-descricao-monstros/06-lista-T-Z.html"><strong aria-hidden="true">6.2.6.</strong> Lista Monstros T-Z</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6-monstros/3-encontros-masmorras.html"><strong aria-hidden="true">6.3.</strong> Encontros em Masmorras</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6-monstros/4-encontros-ermos.html"><strong aria-hidden="true">6.4.</strong> Encontros nos Ermos</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6-monstros/5-grupos-aventureiros.html"><strong aria-hidden="true">6.5.</strong> Grupos de Aventureiros</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6-monstros/6-encontros-fortalezas.html"><strong aria-hidden="true">6.6.</strong> Encontros em Fortalezas</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7-mestrando-aventuras.html"><strong aria-hidden="true">7.</strong> Mestrando Aventuras</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7-mestrando-aventuras/1-papel-mestre.html"><strong aria-hidden="true">7.1.</strong> Papel do Árbitro</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7-mestrando-aventuras/2-lidando-pjs.html"><strong aria-hidden="true">7.2.</strong> Lidando com PJs</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7-mestrando-aventuras/3-mestrando-jogo.html"><strong aria-hidden="true">7.3.</strong> Conduzindo o Jogo</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7-mestrando-aventuras/4-cenarios-de-aventuras.html"><strong aria-hidden="true">7.4.</strong> Cenários de Aventuras</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7-mestrando-aventuras/5-planejando-masmorras.html"><strong aria-hidden="true">7.5.</strong> Planejando Masmorras</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7-mestrando-aventuras/6-planejando-ermo.html"><strong aria-hidden="true">7.6.</strong> Planejando Ermos</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7-mestrando-aventuras/7-planejando-cidade.html"><strong aria-hidden="true">7.7.</strong> Planejando Cidade Base</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7-mestrando-aventuras/8-concedendo-xp.html"><strong aria-hidden="true">7.8.</strong> Concedendo XP</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8-tesouros.html"><strong aria-hidden="true">8.</strong> Tesouros</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8-tesouros/01-colocando-tesouros.html"><strong aria-hidden="true">8.1.</strong> Colocando Tesouros</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8-tesouros/02-tipos-tesouros.html"><strong aria-hidden="true">8.2.</strong> Tipos de Tesouros</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8-tesouros/03-gemas-joias.html"><strong aria-hidden="true">8.3.</strong> Gemas e Joias</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8-tesouros/04-itens-magicos.html"><strong aria-hidden="true">8.4.</strong> Itens Mágicos</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8-tesouros/05-armaduras-escudos.html"><strong aria-hidden="true">8.5.</strong> Armaduras e Escudos</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8-tesouros/06-itens-diversos.html"><strong aria-hidden="true">8.6.</strong> Itens Diversos</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8-tesouros/07-pocoes.html"><strong aria-hidden="true">8.7.</strong> Poções</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8-tesouros/08-aneis.html"><strong aria-hidden="true">8.8.</strong> Anéis</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8-tesouros/09-bastoes-cajados-varinhas.html"><strong aria-hidden="true">8.9.</strong> Bastões, Cajados e Varinhas</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8-tesouros/10-pergaminhos-mapas.html"><strong aria-hidden="true">8.10.</strong> Pergaminhos e Mapas</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8-tesouros/11-armas.html"><strong aria-hidden="true">8.11.</strong> Armas</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8-tesouros/12-espadas.html"><strong aria-hidden="true">8.12.</strong> Espadas</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8-tesouros/13-espadas-sencientes.html"><strong aria-hidden="true">8.13.</strong> Espadas Sencientes</a></span></li></ol><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="dicionariodetermos.html"><strong aria-hidden="true">9.</strong> Dicionário de Termos ❌</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="open-game-license.html"><strong aria-hidden="true">10.</strong> Open Game License</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

