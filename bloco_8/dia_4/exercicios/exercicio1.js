// Dada uma matriz de matrizes, transforme em uma única matriz.

const assert = require("assert");

const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

function flatten() {
  return arrays.reduce((acumulador, elemento) => {
    elemento.forEach((subelemento) => acumulador.push(subelemento));
    return acumulador;
  }, []);
  // escreva seu código aqui
}

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
