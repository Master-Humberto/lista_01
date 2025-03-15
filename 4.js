let numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map(x => x * 2).filter(x => x > 5).reduce((a, b) => a + b, 0);

console.log(resultado);
//Código original
//Letra d)
//Justificativa : Quando se coloca um .method em um array do javascript ele faz todas as alterações com base 
//na anterior e sequencialmente. No caso, o mmétodo .map(x => x * 2) mapeia o valor x da função e transforma
//ele no seu dobro. No caso [1,2,3,4,5] vira [2,4,6,8,10]. Depois tem o método .filter que só permite o x
//com aquela condição. No caso .filter(x => x > 5) torna o array [2,4,6,8,10] em [6,8,10]. Finalmente o método
// .reduce((a,b) => a + b, 0) pega esse array final e soma os seus elementos e coloca para eles somarem ao valor
//0 que é o segundo argumento, que podia ser zero mas, nesse caso, ele foi explicitamente citado. Então [6,8,10]
//fica 6+8+10 = 24, dando a alternativa.