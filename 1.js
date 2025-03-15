console.log(x);
var x = 5;
console.log(y);
let y = 10;

// output : undefined undefined
//Letra c)
//Justificativa : como a variável x não foi inicializada, o console.log dará undefined pois
//O código em Javascript roda sequencialmente (linha por linha) num ambiente de execução
//Simples. Mesma coisa com a variável y, será undefined pois foi chamad o console.log
//Antes de declarar a variável.