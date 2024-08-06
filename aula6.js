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