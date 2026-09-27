//window.location.href = "../login/login.html";

/*import { login } from "./auth.js";

login("ana.silva@edutech.com", "123456")
    .then((usuario) => {
        console.log("Login realizado:", usuario);
    })
    .catch((erro) => {
        console.error(erro);
    });*/
    /*export function logout() {
    sessionStorage.clear();

    window.location.href = "../login/login.html";*/


//verfica usuario esta na pagina inicial
   if (window.location.pathname.endsWith("/index.html") ||
    window.location.pathname.endsWith("/")) {
//redireciona pagina de login
    window.location.href = "./login/login.html";
}
//funcao sair da conta
export function logout() {
//remove dados da sessao usuario
    sessionStorage.clear();
//redireciona pagina login
    window.location.href = "../login/login.html";
}