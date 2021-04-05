var arrayTeste = [2, 4, 6, -7, 10, 0, -3];

function encontraMenor(array) {
  var controle = 0;
  var menorNumero = 0;
  for (var i = 0; i < array.length; i += 1) {
    if (menorNumero >= array[i]) {
      menorNumero = array[i];
      controle = i;
    }
  }
  console.log(controle, menorNumero);
}

encontraMenor(arrayTeste);
