let palavra = "arara";
let palavra2 = "bistro";

function palindromo(palavra) {
  let palavraInvertida = " ";
  for (var i = palavra.length - 1; i >= 0; i -= 1) {
    palavraInvertida = palavraInvertida + palavra[i];
  }
  let final = palavraInvertida.replace(" ", "");
  if (palavra === final) {
    return true;
  } else {
    return false;
  }
}
console.log(palindromo(palavra), palindromo(palavra2));

