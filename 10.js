// cria a classe Produto
class Produto {
    // inicializa o construtor
    constructor(nome, preco){
        // coloca o this.nome para receber o nome
        // coloca o this.preco para receber o preco
        this.nome = nome;
        this.preco = preco;
    }
    // escreve o método calcular desconto que devolve o this.preco * 0.9, ou seja, desconto de 10%
    calcularDesconto(){
        return this.preco * 0.9;
    }
}
// cria a classe produto extendendo a classe Produto
class Livro extends Produto{
    // Inicializa o construtor que recebe o nome e preco como parâmetros
    constructor(nome, preco){
        // Invoca o super para usar os atributos da classe pai
        super(nome, preco);
    }
    // Sobrescreve o método calcular desconto agora com um desconto de 20% ao invés de 10%
    calcularDesconto(){
        return this.preco *0.8;
    }
}

// A herança funcionaria nesse caso para pegar o noem e preço do livro e sobrescrevia o método calcularDesconto
// da classe pai com um da classe filho pois ambas tem o mesmo nome.