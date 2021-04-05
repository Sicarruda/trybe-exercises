var arrayNome = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];

function maiorNome(array) {
  var controle = " ";
  for (var i = 0; i < array.length; i += 1) {
    if (controle.length < array[i].length) {
      controle = array[i];
    }
  }
  console.log(controle);
}
maiorNome(arrayNome);

