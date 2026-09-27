import { cursos } from "../dados/listagem-cursos.js";
// busca curso usuario logado
export function listarCursos(usuario) {
//promise retornar resultado
    return new Promise((resolve, reject) => {
//filtra curso pelo email professor
        const cursosUsuario = cursos.filter(
            curso => curso.emailProfessor === usuario.email
        );
//verifica se encontrou curso
        if (cursosUsuario.length > 0) {
//retorna curso
            resolve(cursosUsuario);
        } else {
//retorna mensagem erro
            reject("Não há cursos cadastrados para esse usuário");
        }

    });
}