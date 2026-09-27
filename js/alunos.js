import { alunos } from "../dados/listagem-alunos.js";

// cadastra um novo aluno
export function cadastrarAluno(aluno) {

//promise para retornar o resultado
    return new Promise((resolve, reject) => {

        //novo ID
        const novoId = alunos.length + 1;

        // adiciona o ID ao aluno
        aluno.id = novoId;

        // adiciona o aluno na lista
        alunos.push(aluno);

        // retorna mensagem de sucesso
        resolve("Aluno cadastrado com sucesso!");

    });
}