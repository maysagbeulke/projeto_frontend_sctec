# AVA-EDUCA+

## Sobre o projeto

O *AVA-EDUCA+* é uma plataforma acadêmica desenvolvida para auxiliar a equipe pedagógica no gerenciamento de informações relacionadas a cursos e alunos. O projeto permite realizar o login de usuários, visualizar os cursos relacionados ao usuário logado e cadastrar novos alunos.
Desenvolvida com Front-End.

## Problema que o projeto resolve

O projeto busca facilitar a organização e o acesso às informações acadêmicas, permitindo que a equipe pedagógica tenha uma interface para visualizar seus cursos e realizar o cadastro de alunos de forma organizada.

## Tecnologias e técnicas utilizadas

* HTML
* CSS
* JavaScript

* Manipulação do DOM
* Módulos JavaScript
* Arrays e objetos
* Classes e POO
* Promises e funções assíncronas
* sessionStorage
* API ViaCEP
* Moment.js
* Flexbox, Grid e Media Queries
* Git e GitHub
* Trello para organização do projeto

## Estrutura do projeto

```text
ava-educa/
│
├── login/
│   ├── login.html
│   ├── login.js
│   └── login.css
│
├── dashboard/
│   ├── dashboard.html
│   ├── dashboard.js
│   └── dashboard.css
│
├── cadastro-aluno/
│   ├── cadastro-aluno.html
│   ├── cadastro-aluno.js
│   └── cadastro-aluno.css
│
├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   ├── auth.js
│   ├── cursos.js
│   ├── Aluno.js
│   └── alunos.js
│
├── dados/
│   ├── listagem-usuarios.js
│   ├── listagem-cursos.js
│   └── listagem-alunos.js
│
├── assets/
│   ├── images/
│   └── icons/
│
├── index.html
└── README.md
```

## Como executar o projeto

* Crie uma pasta do projeto;
* Abra a pasta com VSCode;
* No VSCode, abra um terminal;
* Para baixar o projeto, execute o comando: git clone https://github.com/maysagbeulke/projeto_frontend_sctec.git .
* Execute o comando: npx serve . 
* Em um navegador, acesse a url: http://localhost:3000
* Irá aprarecer a tela de login;
* Exemplo de um usuário disponível para teste: E-mail: ana.silva@edutech.com , Senha: 123456
* Depois do login, o sistema direcionará para o Dashboard.
* Ali irá aparecer os cursos disponíveis para o usuário, caso não tenha nenhum, aparecerá na tela "Não há cursos cadastrados para esse usuário".
* Tem a opção cadastro de aluno, ao qual irá aparecer o formulário de cadastro

## Melhorias futuras

Melhorias que podem ser aplicadas futuramente:

* Implementar um banco de dados para armazenar os dados de forma permanente;
* Criar uma página específica para listagem dos alunos;
* Melhorar a interface visual do sistema;
