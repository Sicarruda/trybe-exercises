let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log(`Bem-vinda, ${info.personagem}`);

info["recorrente"] = "Sim";

console.log(info);

for (let informacao in info) {
  console.log(informacao);
}

for (let informacao in info) {
  console.log(info[informacao]);
}

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

function exibePersonagens(a, b) {
  let recorrente;
  if (a.recorrente === b.recorrente) {
    recorrente = "Ambos recorrentes";
  }
  console.log(`${a.personagem} e ${b.personagem}`);
  console.log(`${a.origem} e ${b.origem}`);
  console.log(`${a.nota} e ${b.nota}`);
  console.log(recorrente);
}

exibePersonagens(info, info2);
