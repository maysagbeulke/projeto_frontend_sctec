// importa a classe Aluno
import { Aluno } from "../js/Aluno.js";

// importa a funçao de cadastro
import { cadastrarAluno } from "../js/alunos.js";

// seleciona formulario de cadastro
const formulario = document.querySelector("#formCadastroAluno");

// detecta envio formulario
formulario.addEventListener("submit", (evento) => {

    // impedeo recarregamento da pagina
    evento.preventDefault();

    // pega os valores preenchidos pelo usuario
    const nome = document.querySelector("#nome").value.trim();
    const genero = document.querySelector("#genero").value;
    const dataNascimento = document.querySelector("#dataNascimento").value.trim();
    const cpf = document.querySelector("#cpf").value.trim();
    const telefone = document.querySelector("#telefone").value.trim();
    const email = document.querySelector("#email").value.trim();

    // pega os valores do endereco
    const cep = document.querySelector("#cep").value.trim();
    const cidade = document.querySelector("#cidade").value.trim();
    const estado = document.querySelector("#estado").value.trim();
    const logradouro = document.querySelector("#logradouro").value.trim();
    const numero = document.querySelector("#numero").value.trim();
    const complemento = document.querySelector("#complemento").value.trim();
    const bairro = document.querySelector("#bairro").value.trim();

    // verifica o nome
    if (nome.length < 4 || nome.length > 80) {
        alert("O nome deve ter entre 4 e 80 caracteres.");
        return;
    }

    // verifica o genero
    if (!genero) {
        alert("Selecione o gênero.");
        return;
    }

    // verifica a data de nascimento usando Moment.js
    const dataValida = moment(
        dataNascimento,
        "DD/MM/YYYY",
        true
    );

    if (
        !dataValida.isValid() ||
        dataValida.isSameOrBefore(moment("01/01/1900", "DD/MM/YYYY"), "day") ||
        dataValida.isSameOrAfter(moment(), "day")
    ) {
        alert("Informe uma data de nascimento válida.");
        return;
    }

    // verifica se o CPF contem apenas numeros
    if (isNaN(cpf)) {
        alert("O CPF deve conter apenas números.");
        return;
    }

    // verifica se o telefone contem apenas numeros
    if (isNaN(telefone)) {
        alert("O telefone deve conter apenas números.");
        return;
    }

    // verifica o email
    if (!email) {
        alert("Informe o e-mail.");
        return;
    }

    // cria um novo aluno
    const aluno = new Aluno(
        null,
        nome,
        genero,
        dataNascimento,
        cpf,
        telefone,
        email,
        cep,
        cidade,
        estado,
        logradouro,
        numero,
        complemento,
        bairro
    );

    // cadastra o aluno
    cadastrarAluno(aluno)
        .then((mensagem) => {

            // mostra mensagem de sucesso
            alert(mensagem);

            // limpa o formulario
            formulario.reset();

        })
        .catch((erro) => {

            // mostra mensagem de erro
            alert(erro);

        });

});