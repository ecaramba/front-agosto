// aula 6

function oi()
{
    var entrada = valor.value;
    
    saida.value = entrada;
    
}

// exercicios
// 1 - devolva o valor digitado e forma inverva
// ex. Edir -> ridE bola -> alob

// ex2 - Coloque o nome todo em maiuculas
// Edir -> EDIR bola -> BOLA

// ex3 - Coloque a primeira em maiucula
// Edir -> Edir bola -> Bola mESa -> Mesa

function ex1()
{

}

function ex2()
{
    var entrada = valor.value;
    saida.value = entrada.toUpperCase();
}

function ex3()
{
    var entrada = valor.value;
    var letra = entrada.charAt(0);
    var resto = entrada.substr(1);

    saida.value = letra.toUpperCase() + resto.toLowerCase();
}

// soma os num1 + num2
function ex4() 
{
    var n1 = num1.value;
    var n2 = num2.value;

    saida.value = parseInt(n1) + parseInt(n2);
}

// calculo imc
// pedir peso e altura
// IMC = peso/(altura x altura)
// + soma
// - subtração
// / divisão
// * multiplicação
function ex5() 
{
    var n1 = num1.value;
    var n2 = num2.value;

    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    var res = n1 / (n2 * n2);

    saida.value = res;
}

// ex6
// pegue 2 numeros e diga qual deles é o maior
function ex6() 
{
    var n1 = num1.value;
    var n2 = num2.value;

    n1 = parseInt(n1);
    n2 = parseInt(n2);

    if (n1 > n2)
    {
        saida.value = n1;
    } else
    {
        saida.value = n2;
    }
}

// ex7
// pegue a idade e diga se é criança, adulto ou idoso
// adulto > 18 anos, idoso > 65
function ex7() 
{
    var idade = valor.value;

    if (idade >= 65) 
    {
        saida.value = "Idoso";
    } else if (idade >= 18)
    {
        saida.value = "Adulto";   
    } else 
    {
        saida.value = "Criança"; 
    }

}