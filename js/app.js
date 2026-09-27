// Mostrando conteúdo guardado dentro do template

const conteudoPrincipal = document.querySelector("#conteudo-principal");

const paginas = {
  inicio: document.querySelector("#pagina-inicio"),
  projetos: document.querySelector("#pagina-projetos"),
  cadastro: document.querySelector("#pagina-cadastro")
};

function mostrarPagina() {
  const partes = window.location.hash.slice(2).split("/");
  const nome = partes[0] || "inicio";
  const projetoEscolhido = partes[1];
  const modelo = paginas[nome] || paginas.inicio;

  const conteudo = modelo.content.cloneNode(true);
  conteudoPrincipal.replaceChildren(conteudo);
  const linksMenu = document.querySelectorAll("#menu-principal a");
  const paginaAtual = paginas[nome] ? nome : "inicio";

    linksMenu.forEach(function (link) {
    link.removeAttribute("aria-current");

    if (link.getAttribute("href") === `#/${paginaAtual}`) {
        link.setAttribute("aria-current", "page");
    }
    });

    if (nome === "cadastro") {
    iniciarCadastro();
    }
    
    if (nome === "projetos") {
        renderizarProjetos();
    const cartoes = conteudoPrincipal.querySelectorAll(".projeto");

    const existe = Array.from(cartoes).some(function (cartao) {
        return cartao.id === projetoEscolhido;
    });

    cartoes.forEach(function (cartao) {
        cartao.hidden = existe && cartao.id !== projetoEscolhido;
        cartao.classList.toggle("projeto-expandido", existe);
    });
}
}

    window.addEventListener("hashchange", mostrarPagina);

    mostrarPagina();