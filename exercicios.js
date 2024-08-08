// fatorial
// 5! = 5 * 4 * 3 * 2 * 1
function ex61()
{
    var num = prompt("digite o numero");
    num = parseInt(num);
    var resultado = 1;

    while(num > 1)
    {
        //resultado = resultado * num;
        resultado *= num;
        //num = num - 1;
        // num -= 1;
        num--;
    }

    
    for (var num = 5; num > 1; num -= 1)
    {
        resultado *= num;
    }

    console.log("O fatorial é: " + resultado);
}

// fibonacci
// 0 1 1 2 3 5 8 13
function ex60()
{
    var num = prompt("digite o valor");
    num = parseInt(num);
    var n1 = 0;
    var n2 = 1;
    var resultado = 0;

    var resposta = 1;

    while (num > 1)
    {
        resultado = n1 + n2;
        n1 = n2;
        n2 = resultado;

        resposta += " " + resultado;

        num -= 1;
    }
    
    console.log("0 " + resposta);
}