const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
      [
        "Neuer",
        "Pavard",
        "Martinez",
        "Alaba",
        "Davies",
        "Kimmich",
        "Goretzka",
        "Coman",
        "Muller",
        "Gnarby",
        "Lewandowski",
      ],
      [
        "Burki",
        "Schulz",
        "Hummels",
        "Akanji",
        "Hakimi",
        "Weigl",
        "Witsel",
        "Hazard",
        "Brandt",
        "Sancho",
        "Gotze",
      ],
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  
  players1 = game.players[0];
  players2 = game.players[1];
  gk = players1[0];
  fieldPlayers = players1.slice(1, players1.length);
  
  allPlayers = players1.concat(players2);
  
  players1Final = players1.concat(["Thiago", "Coutinho", "Perisic"]);
  
  team1 = game.odds.team1;
  draw = game.odds.x;
  team2 = game.odds.team2;
  
  function printGoals(players) {
    for (let i = 0; i < players.length; i++) {
      nbScore = 0;
      for (let j = 0; j < game.scored.length; j++)
        if (players[i] == game.scored[j]) nbScore++;
      console.log(players[i], ":", nbScore, " Goals");
    }
  }
  
  if (team1 > team2)
    console.log(game.team1, "a plus de chance pour gagner que ", team2);
  else console.log(game.team2, "a plus de chance pour gagner que ", team1);
  
  for (let i = 0; i < game.scored.length; i++) {
    console.log("But", i + 1, ":", game.scored[i]);
  }
  
  moyenne = 0;
  for (let prop in game.odds) moyenne = moyenne + game.odds[prop];
  moyenne = moyenne / 3;
  console.log(moyenne);
  
  console.log("Probabilité de victoire pour ", game.team1, ":", game.odds.team1);
  console.log("Probabilité d’égalité : ", game.odds.x);
  console.log("Probabilité de victoire pour", game.team2, ":", game.odds.team2);
  
  let scorers = {};
  nbScore = 0;
  for (let i = 0; i < game.scored.length; i++) scorers[game.scored[i]] = 0;
  for (let i = 0; i < game.scored.length; i++) scorers[game.scored[i]] += 1;
  console.log(scorers);
  
  // Exercice 3 --------------------------------------
  const gameEvents = [
    [17, "⚽ GOAL"],
    [36, "🔁 Substitution"],
    [47, "⚽ GOAL"],
    [61, "🔁 Substitution"],
    [64, "🟨 Yellow card"],
    [69, "🟥 Red card"],
    [70, "🔁 Substitution"],
    [72, "🔁 Substitution"],
    [76, "⚽ GOAL"],
    [80, "⚽ GOAL"],
    [92, "🟨 Yellow card"],
  ];
  
  events = [];
  for (let i = 0; i < gameEvents.length; i++) {
    found = 0;
    for (let j = 0; j < events.length; j++)
      if (gameEvents[i][1] == events[j]) {
        found = 1;
      }
    if (found == 0) events.push(gameEvents[i][1]);
  }
  console.log(events);
  
  gameEvents.splice(4, 1);
  console.log(gameEvents);
  
  // version bonus de la partie 3 ---------------------
  /*
  for(let i=0;i<events.length;i++){
    lastAppear=0;
    countAppear=0;
    sigmaDistances=0
    for(let j=0;j<gameEvents.length;j++){
      if (events[i]==gameEvents[j][1]){
        distance = gameEvents[j][0] - lastAppear
        lastAppear=gameEvents[j][0]
        sigmaDistances +=distance
        countAppear++
      }
    }
    console.log('un',events[i],'est apparu en moyenne toutes les',sigmaDistances/countAppear,'minutes')
    }
    */
  
  lastAppear = 0;
  countAppear = 0;
  sigmaDistances = 0;
  for (let i = 0; i < gameEvents.length; i++) {
    if (gameEvents[i][0] > 90) break; // est ce necessaire ??
    distance = gameEvents[i][0] - lastAppear;
    lastAppear = gameEvents[i][0];
    sigmaDistances += distance;
    countAppear++;
  }
  console.log(
    "un evenement est apparu en moyenne toutes les",
    sigmaDistances / countAppear,
    "minutes"
  );
  
  for (let i = 0; i < gameEvents.length; i++) {
    if (gameEvents[i][0] <= 45)
      console.log("[PREMIÈRE MOITIÉ]", gameEvents[i][0], ".", gameEvents[i][1]);
    else
      console.log("[DEUXIEME MOITIÉ]", gameEvents[i][0], ".", gameEvents[i][1]);
  }
  