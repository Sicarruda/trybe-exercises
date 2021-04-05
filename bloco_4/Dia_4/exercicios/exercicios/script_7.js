var word = "trybe";
var ending = "be";

function comparaFinal(palavra, final) {
  var cont = 0;
  for (var i = 0; i < final.length; i += 1) {
    if (palavra[palavra.length - (final.length - i)] === final[i]) {
      cont += 1;
    }
  }
  if (cont === final.length) {
    return true;
  } else {
    return false;
  }
}

console.log(comparaFinal(word, ending));

// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
