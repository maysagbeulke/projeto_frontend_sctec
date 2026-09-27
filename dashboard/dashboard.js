import { listarCursos } from "../js/cursos.js";

// recupera usuario logado
const usuarioLogado = JSON.parse(
    sessionStorage.getItem("usuarioLogado")
);

// elemento do HTML
const nomeUsuario = document.getElementById("usuarioLogado");
const listaCursos = document.getElementById("listaCursos");
const btnSair = document.getElementById("btnSair");
const btnCadastroAluno = document.getElementById("btnCadastroAluno");

// verifica existe usuario logado
if (!usuarioLogado) {

    window.location.href = "../login/login.html";

} else {

    // mostra nome usuario
    nomeUsuario.textContent = usuarioLogado.nome;

    // busca curso usuario
    listarCursos(usuarioLogado)
        .then((cursos) => {

            // card para cada curso
            cursos.forEach((curso) => {

                const card = document.createElement("article");

                card.classList.add("card");

                card.innerHTML = `
                    <h3>${curso.nomeCurso}</h3>

                    <p>
                        <strong>Data de início:</strong>
                        ${curso.dataInicio}
                    </p>

                    <p>
                        <strong>Data de fim:</strong>
                        ${curso.dataFim}
                    </p>
                `;

                listaCursos.appendChild(card);
            });

        })
        .catch((erro) => {

            // erro tela
            listaCursos.innerHTML = `
                <p class="mensagem-erro">${erro}</p>
            `;

        });
}

// botao sair
btnSair.addEventListener("click", () => {

    sessionStorage.removeItem("usuarioLogado");

    window.location.href = "../login/login.html";

});

// abre cadastro aluno
btnCadastroAluno.addEventListener("click", () => {

    window.location.href = "../cadastro-aluno/cadastro-aluno.html";

});