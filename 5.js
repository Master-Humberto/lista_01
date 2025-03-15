let lista = ["banana", "maçã", "uva", "laranja"];
lista.splice(1, 2, "abacaxi", "manga");
console.log(lista);
//Código original
//Letra c)
//Jusitificativa : o método splice do javascript faz a operação na lista original que funciona com dois parâmetros
//obrigatórios e quantos parâmetros opicionais você quiser depois. O primerio parâemtro é o index no qual você
//começara a transformar o seu array. No caso será o index 1, ou seja, a maçã da lista original. O segundo parâmetro
//é quantos elementos você irá remover a partir dali, no caso, 2, ou seja, maçã e uva. Depois disso os próximos
//dois argumentos são uma lista de coisas que são passadas no método que inserem os elementos abacaxi e manga
//á lista original. [banana,maça,uva,laranja] -> [banana,laranja] -> [banana, ([]), laranja] -> [banana, abacaxi, manga, laranja]