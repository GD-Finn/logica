alert("Ola mundo!")
confirm("Deseja continuar?")
var nome = prompt("qual e o seu nome?")
console.log("isso e um log no console")

var saudacao = document.getElementById("saudacao");

saudacao.innerHTML = `Seja bem-vindo, ${nome}!`
saudacao.style.color = "blue"
console.log(saudacao)