function calcularPreco(tipo) {
    let preco;

    switch(tipo) {
        case "eletrônico":
            preco = 1000;
        case "vestuário":
            preco = 200;
            break;
        case "alimento":
            preco = 50;
            break;
        default:
            preco = 0;
    }

    return preco;
}

console.log(calcularPreco("eletrônico"));

//Código orignal
//Letra b)
//Justificativa : O código imprime 200 pois, apesar de estar dentro de um switch e entrar no caso eletrônico
//não há o break abaixo para que ele saia do escopo do switch, faznedo com que continue a execução e 
//entre no vestiário que coloca o preço para 200 e, como tem o break, ele sai do escopo imprimindo 200