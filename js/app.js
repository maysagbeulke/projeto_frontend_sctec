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

    if (window.location.pathname.endsWith("/index.html") ||
    window.location.pathname.endsWith("/")) {

    window.location.href = "./login/login.html";
}

export function logout() {
    sessionStorage.clear();

    window.location.href = "../login/login.html";
}
}