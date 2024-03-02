// Criando variáveis e definindo tipos
let numero: number = 10;
let texto: string = "Olá, mundo!";
let booleano: boolean = true;
let arrayNumeros: number[] = [1, 2, 3, 4, 5];
let arrayStrings: string[] = ["a", "b", "c"];
let tupla: [number, string] = [1, "typescript"];
let qualquerCoisa: any = "Isso pode ser qualquer coisa";
let nulo: null = null;
let indefinido: undefined = undefined;
let objeto: object = { chave: "valor" };

// Definindo uma classe
class Pessoa {
  // Construtor da classe
  constructor(public nome: string, public idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  // Método da classe
  saudacao(): string {
    return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
  }
}

// Criando uma instância da classe Pessoa
let pessoa1: Pessoa = new Pessoa("João", 30);

// Chamando o método da classe Pessoa
console.log(pessoa1.saudacao());

//tsc nomedaclasse.ts
//node nomedaclasse.js
