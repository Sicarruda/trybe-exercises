let a, b, c, d;
a = 50;
b = 80;
c = 40;
d = a + b + c;
if (d > 180 || (d < 180 && a > 0 && b > 0 && c > 0)) {
  return false;
} else if (a < 0 || b < 0 || c < 0) {
  console.log("Tem coisa errada ai os angulos são negativos");
} else {
  return true;
}
