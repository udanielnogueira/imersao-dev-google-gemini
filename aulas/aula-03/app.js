console.log(dados);
console.log(dados[0]);
console.log("==========");

for (d of dados) {
  console.log(d);
  console.log(d.titulo);
}
console.log("==========");

for (let atleta in dados) {
  console.log(atleta);
  console.log(dados[atleta]);
  console.log(dados[atleta].titulo);
}
console.log("==========");
