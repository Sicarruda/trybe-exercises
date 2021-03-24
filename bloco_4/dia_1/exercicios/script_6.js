let pecasXadres = ["peão", "cavalo", "torre", "bispo", "rei", "rainha"];
let movimentoPecasXadres = [
  "1 para frente",
  "em L",
  "linha reta",
  "diagonal",
  "1 casa para qualquer direção",
  "qualquer direção",
];

let pecaEscolhida = "xablau";
let pecaLetrasMinusculas = pecaEscolhida.toLowerCase();
let verificacao = true;
for (var i = 0; i <= pecasXadres.length; i++) {
  if (pecaLetrasMinusculas === pecasXadres[i]) {
    console.log(`${pecasXadres[i]} tem o movimento ${movimentoPecasXadres[i]}`);
    verificacao = false;
  }
}
if (verificacao) {
  console.log("Não é uma peça de xadrex");
	verificacao = true;
}
