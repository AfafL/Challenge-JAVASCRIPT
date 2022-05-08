function calcAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
  }
  
  function checkWinner(avgDauphins, avgKoalas) {
    if (avgKoalas > avgDauphins )
      console.log("L’équipe Koala gagne (", avgKoalas, "vs", avgDauphins,")");
    else console.log("L’équipe Dauphins gagne (", avgDauphins, "vs", avgKoalas,")");
  }
  
  avgDauphins1 = calcAverage(44, 23, 71);
  avgDauphins2 = calcAverage(85, 54, 41);
  
  avgDauphins = (avgDauphins1 + avgDauphins2) / 2;
  
  avgKoalas1 = calcAverage(65, 54, 49);
  avgKoalas2 = calcAverage(23, 34, 27);
  
  avgKoalas = (avgKoalas1 + avgKoalas2) / 2;
  
  checkWinner(avgDauphins, avgKoalas)