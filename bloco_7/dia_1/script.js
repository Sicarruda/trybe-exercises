// function testingScope(escopo) {
//   if (escopo === true) {
//     let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
//     ifScope = `${ifScope}, ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
//     console.log(elseScope);
//   }
// }

// testingScope(true);

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// oddsAndEvens.sort((a, b) => a - b);

// console.log(oddsAndEvens);

// Crie uma função que receba um número e retorne seu fatorial.
function fatorial(n) {
  let fatorialDeN = 1;
  if (n === 0 || n === 1) {
    return console.log(fatorialDeN);
  }
  for (let i = 1; i <= n; i += 1) {
    let conta = fatorialDeN * i;
    fatorialDeN = conta;
  }
  console.log(fatorialDeN);
}

fatorial();
