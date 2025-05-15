let herois = [
  { nome: "Arthas", xp: 4500 },
  { nome: "Zelda", xp: 1500 },
  { nome: "Kratos", xp: 9500 },
  { nome: "Lara", xp: 2500 }
];

for (let i = 0; i < herois.length; i++) {
  let nome = herois[i].nome;
  let xp = herois[i].xp;
  let nivel = "";

  if (xp <= 1000) {
    nivel = "Ferro";
  } else if (xp <= 2000) {
    nivel = "Bronze";
  } else if (xp <= 5000) {
    nivel = "Prata";
  } else if (xp <= 7000) {
    nivel = "Ouro";
  } else if (xp <= 8000) {
    nivel = "Platina";
  } else if (xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  console.log(`🛡️ O Herói ${nome} está no nível ${nivel}`);
}





