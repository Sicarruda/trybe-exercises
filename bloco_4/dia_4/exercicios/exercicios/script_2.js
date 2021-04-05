var arrayTeste = [2, 3, 60, 7, 10, 1];

function encontraMaior(array) {
  var controle = 0;
  var maiorNumero = 0;
  for (var i = 0; i < array.length; i += 1) {
    if (maiorNumero <= array[i]) {
      maiorNumero = array[i];
      controle = i;
    }
  }
  console.log(controle, maiorNumero);
}

encontraMaior(arrayTeste);

