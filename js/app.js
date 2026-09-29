//verifica usuario esta na pagina inicial
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