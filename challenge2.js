let poidBernard = 95;
let tailleBernard = 1.88;

let poidMarcel = 85;
let tailleMarcel = 1.76;

let IMCBernard = poidBernard / (tailleBernard * tailleBernard);
let IMCMarcel = poidMarcel / (tailleMarcel * tailleMarcel);

let bernardHigherIMC = true;
if (IMCBernard < IMCMarcel) bernardHigherIMC = false;

if (IMCBernard > IMCMarcel)
  console.log(
    "Bernard a un IMC (",
    IMCBernard.toFixed(1),
    ") plus élevé que Marcel (",
    IMCMarcel.toFixed(1),
    ")"
  );
else
  console.log(
    "Marcel a un IMC (",
    IMCMarcel.toFixed(1),
    ") plus élevé que Bernard (",
    IMCBernard.toFixed(1),
    ")"
  );
