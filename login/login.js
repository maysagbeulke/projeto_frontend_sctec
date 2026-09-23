//console.log("Página de login carregada!");

import { login } from "../js/auth.js";

const formulario = document.querySelector("#loginForm");
const mensagem = document.querySelector("#mensagem");
const esqueciSenha = document.querySelector("#esqueciSenha");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;

    login(email, senha)
        .then((usuario) => {
            console.log("Login realizado:", usuario);

            window.location.href = "../dashboard/dashboard.html";
        })
        .catch((erro) => {
            mensagem.textContent = erro;
        });
});

esqueciSenha.addEventListener("click", () => {
    alert("Entre em contato com o suporte para recuperar sua senha.");
});

