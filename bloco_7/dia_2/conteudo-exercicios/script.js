// crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.
const jessica = {};

function criaObjeto(objeto, chave, valor) {
  let chaveObjeto = chave;
  objeto[chaveObjeto] = valor;
  console.table(objeto);
}



criaObjeto(jessica, "nome", "Jéssica de Arruda");
