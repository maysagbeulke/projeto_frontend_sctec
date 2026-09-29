import { login } from "../js/auth.js";
//seleciona elementos formulario
const formulario = document.querySelector("#loginForm");
const mensagem = document.querySelector("#mensagem");
const esqueciSenha = document.querySelector("#esqueciSenha");
//detecta envio do formulsario
formulario.addEventListener("submit", (evento) => {
//impede o carregamento pagina
    evento.preventDefault();
//pega email e senha digitados
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;
//faz validacao do ligin
    login(email, senha)
        .then((usuario) => {
//salva usuario na sessao
            sessionStorage.setItem("usuarioLogado", JSON.stringify(usuario));
//redireciona para dashboard
            window.location.href = "../dashboard/dashboard.html";
        })
        .catch((erro) => {
            //mensagem.textContent = erro;
            alert(erro);
        });
});
//detecta clique esqueci senha
esqueciSenha.addEventListener("click", () => {
//mostra mensagem para usuario
    alert("Entre em contato com o suporte para recuperar sua senha.");
});