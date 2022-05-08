let poidBernard = 95;
let tailleBernard = 1.88;

let poidMarcel = 85;
let tailleMarcel = 1.76;

let IMCBernard = poidBernard / (tailleBernard * tailleBernard);
let IMCMarcel = poidMarcel / (tailleMarcel * tailleMarcel);

function IMCSTATUS(imc) {
  if (imc < 23) return "Insuffisance pondérale ";
  else if (imc <= 28) return "Poids normal";
  else if (imc <= 33) return "Surpoids";
  else if (imc <= 43) return "Obésité";
  else return "Obésité importante";
}

console.log("Bernard :", IMCSTATUS(IMCBernard));
console.log("Marcel :", IMCSTATUS(IMCMarcel));
