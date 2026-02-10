var nomes = [];
var nome = document.getElementById("nomeAluno")
var lista = document.getElementById("resultado")

function cadastrar() {
    if (nome.value === ""){
        alert("Por favor, insira o nome do aluno.");
    } else {
    if (nomes.indexOf(nome.value) === -1) {
         nomes.push(nome.value);
         alert("Aluno cadastrado com sucesso!");
    } else {
        alert("Aluno ja cadastrado!");
       }
    }
}

function listar() {
        for (var i = 0; i < nomes.length; i++) {
          lista.innerHTML += `Aluno - ${nomes[i]} <br>`;
        }
    
} 
function limpar() {
    nomes = [];
    lista.innerHTML = "";
}