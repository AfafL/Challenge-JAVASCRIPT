function afficherTemp(arr) {
    str = "";
    for (let i = 0; i < arr.length; i++) {
      str = str + arr[i] + " dans " + (i + 1) + " jours, ";
    }
    console.log(str);
  }
  
  afficherTemp([17, 21, 23]);
  afficherTemp([12, 5, -5, 0, 4])