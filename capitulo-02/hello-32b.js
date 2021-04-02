'use strict';

// Esta função recebe outra função como parâmetro
function executar(funcao, a, b) {
  return funcao(a, b);
}

let resultado = executar(function (a, b) {
  return a + b;
}, 1, 2);

// Vai imprimir 3
console.log(resultado);

var funcao = function (a, b) { return a * b; }
resultado = executar(funcao, 1, 3);

// Vai imprimir 3
console.log(resultado);
