const dadosProjetos = [
 {
    id: "mesa-solidaria",
    categoria: "Alimentação",
    titulo: "Mesa Solidária",
    descricao: "Arrecadamos alimentos e organizamos cestas básicas para apoiar famílias em situação de vulnerabilidade.",
    contribuicao: "Contribua com alimentos não perecíveis e ajude a levar solidariedade à mesa de quem precisa.",
    imagem: "../imagens/alimentos.jpg",
    alt: "Entrega de alimentos em uma ação solidária"
 },

   {
    id: "aprendizagem",
    categoria: "Educação",
    titulo: "Laços de Aprendizagem",
    descricao: "Promovemos atividades de leitura e apoio escolar para crianças e adolescentes da comunidade.",
    contribuicao: "Você pode ajudar doando livros e materiais escolares ou participando como voluntário nas atividades.",
    imagem: "../imagens/leitura.jpg",
    alt: "Crianças reunidas em uma atividade de leitura"
  },

  {
    id: "doe-tempo",
    categoria: "Voluntariado",
    titulo: "Doe seu tempo",
    descricao: "Dedique algumas horas para fazer a diferença na vida de outras pessoas.",
    contribuicao: "Ajude a organizar doações, preparar atividades e realizar nossas ações comunitárias.",
    imagem: "../imagens/lacosdobem.png",
    alt: "Grupo de voluntários reunidos em um mutirão comunitário"
  }
]

function renderizarProjetos() {
  const lista = document.querySelector(".lista-projetos");
  const modelo = document.querySelector("#modelo-projeto");

  if (!lista || !modelo) {
    return;
  }

  lista.replaceChildren();

  dadosProjetos.forEach(function (dados) {
    const copia = modelo.content.cloneNode(true);
    const cartao = copia.querySelector(".projeto");

    cartao.id = dados.id;
    cartao.querySelector(".badge").textContent = dados.categoria;
    cartao.querySelector("h3").textContent = dados.titulo;
    cartao.querySelector(".projeto-descricao").textContent = dados.descricao;
    cartao.querySelector(".projeto-contribuicao").textContent = dados.contribuicao;

    const imagem = cartao.querySelector("img");
    imagem.src = dados.imagem;
    imagem.alt = dados.alt;

    lista.appendChild(copia);
  });
}