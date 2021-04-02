'use strict';

function testeVar() {
  var a = 1;
  var b = 2;
  var soma = a + b;
  var nome = "Filipe";
  console.log("Olá %s, o resultado da soma é: %d", nome, soma);
  console.log("Olá %s, o resultado da soma é: %d", nome, soma, "que", "legal");

  // Tipos não definidos (undefined)
  var nome1;
  console.log("Olá %s.", nome1);

  if (nome1 == undefined) {
    console.log("Teste 1) O nome não foi inicializado.");
  }
  if (typeof (nome1) == "undefined") {
    console.log("Teste 2) O nome não foi inicializado.");
  }

  console.log("O tipo do nome é %s e o tipo da soma é %s", typeof (nome1), typeof (soma));
  console.log("Olá %s, o resultado da soma é: %d", nome, soma, "que", "legal");
}

function hello() {
  console.log("Hello");
}

function soma(a, b) {
  return a + b;
}

function testeArray() {
  var numeros = [1, 2, 3];
  numeros.push(4); // Adiciona o número 4
  numeros.push(5); // Adiciona o número 5
  for (let i = 0; numeros.length > i; i++) {
    console.log(numeros[i]); // Imprime cada item do array
  }

  for (let i in numeros) {
    console.log(numeros[i]);
  }

  numeros.map(n => console.log(n));
}

function testeMap() {
  var map = [];
  map["nome"] = "Filipe";
  map["sobrenome"] = "dos Santos Nascimento";
  console.log(map);
  console.log("Nome completo: ", map["nome"], map["sobrenome"]);
}

function objetos1() {
  var pessoa = Object();
  pessoa.nome = "Filipe";
  pessoa.hello = function() {
    return "Hello Pessoa!";
  };
  console.log(pessoa);
  console.log(pessoa.nome);
  console.log(pessoa.hello());
}

function objetos2() {
  var pessoa = {
    nome: 'Filipe',
    hello: function() {
      return "Hello Pessoa!";
    }
  };
  console.log(pessoa);
  console.log(pessoa.nome);
  console.log(pessoa.hello());
}

function Pessoa() {
  this.nome = "Filipe";
  this.hello = function() {
    return "Hello Pessoa!";
  }
}

function objetos3() {
  var pessoa = new Pessoa();
  console.log(pessoa);
  console.log(pessoa.nome);
  console.log(pessoa.hello());
}

class Pessoa4 {
  constructor() {
    this.nome = 'Filipe';
  }

  hello() {
    return 'Hello Pessoa!';
  }

  static hello2() {
    return 'Hello2 Pessoa!';
  }
}

function objetos4() {
  var pessoa = new Pessoa4();
  console.log(pessoa);
  console.log(pessoa.nome);
  console.log(pessoa.hello());
}

testeVar();
hello();

var soma = soma(1, 2);
console.log(soma);

testeArray();
testeMap();

objetos1();
objetos3();

objetos4();
console.log(Pessoa4.hello2());
