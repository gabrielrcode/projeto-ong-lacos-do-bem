// Botão Menu
const botaoMenu = document.querySelector(".menu-toggle");
const menuPrincipal = document.querySelector("#menu-principal");

botaoMenu.addEventListener("click", function () {
  const aberto = menuPrincipal.classList.toggle("aberto");
  botaoMenu.setAttribute("aria-expanded", aberto);
});

// Botão Projetos
const botaoProjetos = document.querySelector(".submenu-toggle");
const submenuProjetos = document.querySelector("#submenu-projetos");

botaoProjetos.addEventListener("click", function () {
  submenuProjetos.hidden = !submenuProjetos.hidden;

  botaoProjetos.setAttribute(
    "aria-expanded",
    !submenuProjetos.hidden
  );
});