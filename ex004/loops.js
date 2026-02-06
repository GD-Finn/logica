//for - Use quando o numero de interações e conhecido//
for (c = 0; c <= 2; c++) 
    for (cont = 0; cont < 10; cont++)  { // cont = cont + 1 //
    console.log(`Contador do "FOR" : ${c}.${cont}`);
}
//while - Use quando o numero de interações não e conhecido//

var galinha = 0;
while (galinha <= 20) {
    console.log(`Contador do "WHILE" : ${galinha}`);
    galinha++; // galinha = galinha + 1//
}

//do while - Use quando o numero de interações não e conhecido e e necessário executar o bloco de código pelo menos uma vez//

var carrapato = 0;
do {
    console.log(`Contador do "DO WHILE" : ${carrapato}`);
    carrapato++; // carrapato = carrapato + 1 //
} while (carrapato <= 25)