/*Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). */

function conferencia(aposta, numero){
  if(aposta === numero){
    return true
  }
  return false
}

function numeroAleatorio(aposta) {
  let numeroAleatorio = Math.floor(Math.random() * 4 + 1);
  if(conferencia(aposta, numeroAleatorio)){
    console.log("Parabéns você ganhou")
  }else{
    console.log("Tente novamente")
  }
}

numeroAleatorio(3);