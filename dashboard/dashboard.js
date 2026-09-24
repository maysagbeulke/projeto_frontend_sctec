import { listarCursos } from "../js/cursos.js";

const usuarioLogado = JSON.parse(
    sessionStorage.getItem("usuarioLogado")
);

if (!usuarioLogado) {
    window.location.href = "../login/login.html";
}

const nomeUsuario = document.getElementById("usuarioLogado");

nomeUsuario.textContent = usuarioLogado.nome;

const btnSair = document.getElementById("btnSair");

btnSair.addEventListener("click", () => {

    sessionStorage.removeItem("usuarioLogado");

    window.location.href = "../login/login.html";

});


const listaCursos = document.getElementById("listaCursos");

listarCursos(usuarioLogado)
    .then((cursos) => {

        cursos.forEach((curso) => {

            const card = document.createElement("div");

            card.innerHTML = `
                <h3>${curso.nomeCurso}</h3>
                <p>Início: ${curso.dataInicio}</p>
                <p>Fim: ${curso.dataFim}</p>
            `;

            listaCursos.appendChild(card);

        });

    })
    .catch((erro) => {

        listaCursos.textContent = erro;

    });