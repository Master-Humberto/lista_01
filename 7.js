class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    apresentar() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
  }
  
  class Funcionario extends Pessoa {
    constructor(nome, idade, salario) {
      super(nome, idade);
      this.salario = salario;
    }
  
    apresentar() {
      super.apresentar();
      console.log(`Meu salário é R$ ${this.salario}.`);
    }
  }
// resposta : letra a)
// justificativa : funcionario herda os métodos de pessoa pois foi inicializada com o extends Pessoa (I correta)
// ele sobrepõe o método apresentar de pessoa no funcionário pois tem o mesmo nome mas, ao ser executada, chama
// o método apresentar de pessoa. Daí depois faz o console.log do salário. (II correta)
//O javascript suporta herança de classes (III incorreta)