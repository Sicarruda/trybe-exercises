var arrayTeste = [2, 3, 2, 5, 8, 3, 3];

function compararArray(array) {
  var contA = 0;
  var contB = 0;
  var maisRepetido = 0;
  for (var i = 0; i < array.length; i += 1) {
    for (var j = 0; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        contB += 1;
      }
    }
    if (contB > contA) {
      contA = contB;
      contB = 0;
      maisRepetido = array[i];
    } else {
      contB = 0;
    }
  }
  console.log(maisRepetido);
}

compararArray(arrayTeste);
