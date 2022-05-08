note = 40

pourboire = (note>50 && note<300) ? note*0.15: note*0.2

console.log("La note était de,",note,"le pourboire de",pourboire, "et la valeur totale était de",note+pourboire);

//if (total>50 && total<300) pourboire=note*0.15
//else pourboire=note*0.2