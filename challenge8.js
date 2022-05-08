function calcTip(note) {
    pourboire = note > 50 && note < 300 ? note * 0.15 : note * 0.2;
    return pourboire;
  }

notes=[22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
tips=Array(notes.length)
totals=Array(notes.length)

for (let i = 0; i < notes.length; i++) {
  tips[i] = calcTip(notes[i]);
  totals[i] = notes[i] + tips[i];
}

for (let i = 0; i < notes.length; i++)
  console.log(notes[i], tips[i], totals[i]);