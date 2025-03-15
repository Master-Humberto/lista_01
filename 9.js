function somaArray(numeros) {

    for (i = 0; i < numeros.size; i++) {
        soma = 2*numeros[i];
    }
    return soma;
}
console.log(somaArray([1, 2, 3, 4]));
// Código Original

// Define a função somaArray que recebe uma lista de números
function somaArray(numeros) {
    // Define a varíavel soma e inicializa ela como zero.
    let soma = 0;
    // Começa o laço de repetição somando o dobro de cada elemento e adicionado à variável soma
    // também troquei o size para lenght, que devolve o tamanho do array
    for (i = 0; i < numeros.length; i++) {
        // aqui havia um =, agora tem um +=
        soma += 2*numeros[i];
    }
    // retonra a soma
    return soma;
}
//Imprime a soma desse Array
console.log(somaArray([1, 2, 3, 4]));