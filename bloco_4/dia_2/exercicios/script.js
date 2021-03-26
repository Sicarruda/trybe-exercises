let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (number of numbers) {
  //  console.log(number);
}

var result = 0;

for (var i = 0; i < numbers.length; i += 1) {
  var sun = result + numbers[i];
  var result = sun;
  // console.log(sun);
}

var media = result / numbers.length;
// console.log(media);

if (media <= 20) {
  // console.log("valor menor ou igual a 20");
} else {
  // console.log("valor maior que 20");
}

//var smallestNumber;
var bigestNumber;
for (var i = 0; i < numbers.length; i += 1) {
  if (bigestNumber > numbers[i]) {
  } else {
    //smallestNumber = numbers[i];
    bigestNumber = numbers[i];
  }
}
// console.log(bigestNumber);

var cont = 0;
for (var i = 0; i < numbers.length; i += 1) {
  var impar = numbers[i] % 2;
  if (impar != 0) {
    cont += 1;
  }
}
if (cont === 0) {
  // console.log("nenhum valor ímpar encontrado");
}
//console.log(cont);

for (var i = 1; i <= 25; i += 1) {
  console.log(i / 2);
}
