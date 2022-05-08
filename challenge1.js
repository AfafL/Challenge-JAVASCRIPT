let poidBernard = 78;
let tailleBernard = 1.69;

let poidMarcel = 92;
let tailleMarcel = 1.95;

let IMCBernard = poidBernard / (tailleBernard * tailleBernard);
let IMCMarcel = poidMarcel / (tailleMarcel * tailleMarcel);

let bernardHigherIMC = true;
if (IMCBernard < IMCMarcel) bernardHigherIMC = false;

console.log("Bernard IMC is higher then Marcel: ",bernardHigherIMC)
