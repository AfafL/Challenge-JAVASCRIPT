function avg3(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
  }
  
  avgDauphins1 = avg3(96, 108, 89);
  avgDauphins2 = avg3(97, 112, 101);
  avgDauphins3 = avg3(97, 112, 101);
  avgDauphins = avg3(avgDauphins1, avgDauphins2, avgDauphins3);
  
  avgKoalas1 = avg3(88, 91, 110);
  avgKoalas2 = avg3(109, 95, 123);
  avgKoalas3 = avg3(109, 95, 106);
  avgKoalas = avg3(avgKoalas1, avgKoalas2, avgKoalas3);
  
  if (avgDauphins > avgKoalas && avgDauphins > 100)
    console.log("les Dauphins gagnent");
  if (avgDauphins < avgKoalas && avgKoalas > 100)
    console.log("les Dauphins gagnent");
  if (avgDauphins == avgKoalas) console.log("egalité");
  