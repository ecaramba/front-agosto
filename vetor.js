var cidade = "curitiba";
var cidade2 = "colombo";

// estrutura de dados
// vetor -> array

var lista = ["curitiba", "colombo", "Araucaria"];

console.log(lista[1]);

// adiciona elementos
lista.push("Pinhais");
lista.unshift("Apucarana");

// remove elementos
lista.pop();
lista.shift();

// loops -> laços de repetição
var lista = ["curitiba", "colombo", "Araucaria"];
var ini = 0;
var fim = lista.length - 1;

while (ini <= fim)
{
    console.log( lista[ini] );
    ini = ini + 1;
} 

// reversa
var ini = lista.length - 1;
var fim = 0;

while (ini >= fim)
{
    console.log( lista[ini] );
    ini = ini - 1;
}
