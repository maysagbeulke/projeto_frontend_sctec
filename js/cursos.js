import { cursos } from "../dados/listagem-cursos.js";

export function listarCursos(usuario) {
    return new Promise((resolve, reject) => {

        const cursosUsuario = cursos.filter(
            curso => curso.emailProfessor === usuario.email
        );

        if (cursosUsuario.length > 0) {
            resolve(cursosUsuario);
        } else {
            reject("Não há cursos cadastrados para esse usuário");
        }

    });
}