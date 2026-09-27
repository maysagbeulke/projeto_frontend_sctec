import { usuarios } from "../dados/listagem-usuarios.js";
// funcao verifica o e-mail e a senha do usuário
export function login(usuario, senha) {
//promise resultado login
    return new Promise((resolve, reject) => {
//procura usuario email e senha
        const usuarioEncontrado = usuarios.find(
            (item) => item.email === usuario && item.senha === senha
        );
//verifica encontrou usuario
        if (usuarioEncontrado) {
//dados usuario encontrado
            resolve(usuarioEncontrado);
        } else {
//mensagem de erro dados incorretos
            reject("Dados incorretos. Favor verificar e tentar novamente");
        }
    });
}