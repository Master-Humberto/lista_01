function soma(a, b) {
    if (a || b === 0) {
        return "Erro: número inválido";
    }
    return a + b;
}
console.log(soma(2, 0));
// Código original
function soma(a, b) {
    if (a === 0 && b === 0) {
        return "Erro: número inválido";
    }
    return a + b;
}
console.log(soma(2, 0));
//Código alterado
// Letra b)
//Resposta correta :Ele compara se a é igual a zero e é do tipo inteiro, assim como em b e vê,
//Se ambos são verdadeiros, ou seja, ambos os números são estritamente inteiros e iguais a zero se essa soma. 
//É possível que o código pare de aprensetar erros ao se usar o operador booleano "ou" ao invés de "e" mas caso
//isso seja feito a função perderia a "lógica" pois, caso quaisquer os números fossem zero, ele daria número inválido
//Mesmo podendo se somar algo com zero (mesmo não alterando nada pois o zero não altera o número na adição).
