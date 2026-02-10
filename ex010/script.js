var nomes = [];
var nome = document.getElementById("nomeAluno")
var lista = document.getElementById("resultado")

function cadastrar() {
    if (nomes.indexOf(nome.value) === -1) {
         nomes.push(nome.value);
         alert("Aluno cadastrado com sucesso!");
    } else {
        alert("Aluno ja cadastrado!")
    }
}

function listar() {
        for0 (var i = 0; i < nomes.length; i++) {
            
        }
    
} 
function limpar() {
    nomes = [];
    lista.innerHTML = "";
}