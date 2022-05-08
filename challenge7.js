function calcTip(note) {
    pourboire = note > 50 && note < 300 ? note * 0.15 : note * 0.2;
    return pourboire;
  }
  
  bills = [125, 555, 44];
  tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
  totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
  
  for (let i = 0; i < bills.length; i++)
    console.log(bills[i], tips[i], totals[i]);
  