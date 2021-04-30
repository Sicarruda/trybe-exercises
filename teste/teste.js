function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return "Array com tamanho incorreto.";
  }
  for (let index = 0; index < array.length; index += 1) {
    let count = 0;
    for (let indexJ = 0; indexJ < array.length; indexJ += 1) {
      let avaliator = array[index];
      if (avaliator === array[indexJ]) {
        count += 1;
      }
      if (count > 2 || array[indexJ] < 0 || array[indexJ] > 9) {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
  }
  let ddd;
  ddd.concat(array[0], array[1]);

  return `(${ddd}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
}
var a = [1, 2, 3, 3, 2, 0, 5, 6, 8, 9, 7];
console.log(generatePhoneNumber(a));
