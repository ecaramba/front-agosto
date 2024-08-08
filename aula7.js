// 1 2 3 -> 3 maior e 1 menor
// 1 3 2
// 2 1 3
// 2 3 1
// 3 1 2
// 3 2 1

function ex24()
{
    var n1 = prompt("digite o num1"); // 2
    var n2 = prompt("digite o num2"); // 1
    var n3 = prompt("digite o num3"); // 3

    if (n1 > n2)
    {
        if (n1 > n3)
        {
            console.log("O maior numero é: " + n1);
        }
        else 
        {
            console.log("O maior numero é: " + n3);
        }
    } else 
    {
        if (n2 > n3)
        {
            console.log("O maior numero é: " + n2);
        } else 
        {
            console.log("O maior numero é: " + n3);
        }
    }
}

// função -> subpro -> subrotina
// E -> P -> S

function soma(n1, n2)
{
    var resultado = n1 + n2;
    return resultado;
}

// executa a função
soma(3, 5);

