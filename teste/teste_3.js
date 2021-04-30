function acorda() {
  return console.log("acordando!");
}
function tomaCafe() {
  return console.log("Bora tomar café!!");
}
function dormir() {
  return console.log("Partiu dormir");
}
function doingThings(funcao) {
  return funcao;
}

doingThings(acorda());
doingThings(tomaCafe());
doingThings(dormir());
