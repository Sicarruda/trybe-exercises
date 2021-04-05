let names = {
  person1: "João",
  person2: "Maria",
  person3: "Jorge",
};

for (let nome in names) {
  console.log(`Olá ${names[nome]}`);
}

let carro = {
  model: "A3 Sedan",
  manufacturer: "Audi",
  year: 2020,
};

for (let car in carro) {
  console.log(`${car}: ${carro[car]}`);
}
