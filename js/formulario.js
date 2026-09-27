import {
  salvarPreferenciaAjuda,
  recuperarPreferenciaAjuda
} from "./armazenamento.js";

// Visibilidade da mensagem de agradecimento ao final do formulário

function iniciarCadastro() {
const formulario = document.querySelector("#formulario-cadastro");
const mensagemCadastro = document.querySelector("#mensagem-cadastro");

if (formulario && mensagemCadastro) {

  const campoAjuda = formulario.querySelector("#ajuda");
const ajudaSalva = recuperarPreferenciaAjuda();

const opcaoExiste = Array.from(campoAjuda.options).some(function (opcao) {
  return opcao.value === ajudaSalva;
});

campoAjuda.value = opcaoExiste ? ajudaSalva : "";

campoAjuda.addEventListener("change", function () {
  salvarPreferenciaAjuda(campoAjuda.value);
});


  // Validar e-mail
  const campoEmail = formulario.querySelector("#email");
const erroEmail = formulario.querySelector("#erro-email");

function validarEmail() {
  if (campoEmail.validity.valueMissing) {
    erroEmail.textContent = "Preencha seu e-mail.";
  } else if (campoEmail.validity.typeMismatch) {
    erroEmail.textContent = "Digite um e-mail válido, como nome@exemplo.com.";
  } else {
    erroEmail.textContent = "";
  }

  campoEmail.setAttribute(
    "aria-invalid",
    String(!campoEmail.validity.valid)
  );
}

campoEmail.addEventListener("input", validarEmail);
campoEmail.addEventListener("blur", validarEmail);
campoEmail.addEventListener("invalid", validarEmail);

// Validar cpf
const campoCpf = formulario.querySelector("#cpf");
const erroCpf = formulario.querySelector("#erro-cpf");

function validarCpf() {
  if (campoCpf.validity.valueMissing) {
    erroCpf.textContent = "Preencha seu CPF.";
  } else if (campoCpf.validity.patternMismatch) {
    erroCpf.textContent = "Digite os 11 números do CPF.";
  } else {
    erroCpf.textContent = "";
  }

  campoCpf.setAttribute(
    "aria-invalid",
    String(!campoCpf.validity.valid)
  );
}

campoCpf.addEventListener("input", validarCpf);
campoCpf.addEventListener("blur", validarCpf);
campoCpf.addEventListener("invalid", validarCpf);

// Validar tel
const campoTelefone = formulario.querySelector("#telefone");
const erroTelefone = formulario.querySelector("#erro-telefone");

function validarTelefone() {
  if (campoTelefone.validity.valueMissing) {
    erroTelefone.textContent = "Preencha seu telefone.";
  } else if (!campoTelefone.validity.valid) {
    erroTelefone.textContent = "Digite o DDD e o telefone com 10 ou 11 números.";
  } else {
    erroTelefone.textContent = "";
  }

  campoTelefone.setAttribute(
    "aria-invalid",
    String(!campoTelefone.validity.valid)
  );
}

campoTelefone.addEventListener("input", validarTelefone);
campoTelefone.addEventListener("blur", validarTelefone);
campoTelefone.addEventListener("invalid", validarTelefone);

// Validar cep

const campoCep = formulario.querySelector("#cep");
const erroCep = formulario.querySelector("#erro-cep");

function validarCep() {
  if (campoCep.validity.valueMissing) {
    erroCep.textContent = "Preencha seu CEP.";
  } else if (!campoCep.validity.valid) {
    erroCep.textContent = "Digite os 8 números do CEP.";
  } else {
    erroCep.textContent = "";
  }

  campoCep.setAttribute(
    "aria-invalid",
    String(!campoCep.validity.valid)
  );
}

campoCep.addEventListener("input", validarCep);
campoCep.addEventListener("blur", validarCep);
campoCep.addEventListener("invalid", validarCep);

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    formulario.hidden = true;

    const container = formulario.closest(".formulario-container");

    container.querySelector("h2").hidden = true;
    container.querySelector(".formulario-descricao").hidden = true;

    mensagemCadastro.hidden = false;
    mensagemCadastro.setAttribute("tabindex", "-1");
    mensagemCadastro.focus();
      
    const toast = document.querySelector("#toast-cadastro");

toast.textContent = "Demonstração concluída. Nenhum dado foi enviado.";

setTimeout(function () {
  toast.textContent = "";
}, 10000);

  });
}}

export { iniciarCadastro };