# 🤝 ONG - Laços do Bem

Projeto desenvolvido em **HTML, CSS e JavaScript** para apresentar projetos sociais e incentivar a participação de voluntários.

Inclui apresentação dos projetos e formulário para quem deseja fazer parte da iniciativa.

## 🚀 Tecnologias

- HTML
- CSS
- JavaScript
- Armazenamento de preferências no navegador

## ⚙️ Funcionalidades

- Navegação dinâmica no formato **SPA** (Single Page Application)
- Menu interativo e submenu de projetos
- Cartões de projetos gerados com JavaScript
- Formulário **Faça parte** com validação dos campos
- Mensagem de agradecimento e aviso temporário após o envio
- Salvamento da preferência de participação no navegador

## ▶️ Como rodar

1. Baixe ou clone o repositório.
2. Abra a pasta do projeto no **Visual Studio Code**.
3. Com a extensão **Live Server** instalada, clique com o botão direito no arquivo `html/index.html`.
4. Selecione **Open with Live Server** para abrir o site no navegador.

## 📂 Organização dos arquivos

```text
projeto-ong-lacos-do-bem/
├── html/
│   ├── index.html          # Página inicial
│   ├── projetos.html       # Projetos sociais
│   └── cadastro.html       # Formulário de participação
├── css/
│   └── style.css           # Estilos do site
├── js/
│   ├── armazenamento.js    # Salva as preferências
│   ├── menu.js             # Controla os menus
│   ├── projetos.js         # Gera os cartões de projetos
│   ├── formulario.js       # Valida o formulário
│   └── app.js              # Controla a navegação
├── imagens/                # Imagens do site
└── README.md               # Documentação do projeto
```

## ℹ️ Sobre o cadastro

Este é um projeto acadêmico. O formulário verifica os campos e
simula a conclusão do cadastro, sem enviar informações para um servidor.

Apenas a forma de participação escolhida é salva no localStorage
do navegador. Nome, CPF, telefone, e-mail e endereço não são salvos
pela aplicação.

## 🧭 Navegação

A entrada da aplicação é `html/index.html`, que reúne os templates
de Início, Projetos e Cadastro.

O JavaScript troca o conteúdo principal sem recarregar a página
inteira, usando endereços como `#/inicio`, `#/projetos` e `#/cadastro`.

Os arquivos `projetos.html` e `cadastro.html` foram mantidos da
versão anterior. Para usar a SPA, inicie pelo `html/index.html`.

## 📚 Aprendizados

- Manipulação de elementos da página com JavaScript
- Uso de eventos e validação de formulários
- Reutilização de modelos de cartões
- Organização do código em arquivos separados
- Armazenamento de preferências no navegador

---

👨‍💻 Desenvolvido por [Gabriel Augusto Rocha Lima.](https://www.linkedin.com/in/gabr1elrochadev/)

