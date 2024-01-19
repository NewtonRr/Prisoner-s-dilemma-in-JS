var properties = {
  loop: 1000,
  rand: 0,
  diference: 0,
};

var Player1 = {
  answer: 0,
  points: 0,
  execute: function () { // Player 1 script
    properties.rand = parseInt(Math.random() * 8);
    if (properties.rand == 7) {
      Player1.answer = 0;
    } else {
      Player1.answer = 1;
    }
    return Player1.answer;
  },
};

var Player2 = {
  answer: 0,
  points: 0,
  execute: function () { // Player 1 script
    properties.rand = parseInt(Math.random() * 8);
    if (properties.rand == 7) {
      Player2.answer = 0;
    } else {
      Player2.answer = 1;
    }
    return Player2.answer;
  },
};

while (properties.loop > 0) {
  // game loop
  properties.loop -= 1;
  Player1.execute();
  Player2.execute();

  var result = 0;

  if (Player1.answer == 1 && Player2.answer == 1) {
    result = 1;
  }
  if (Player1.answer == 1 && Player2.answer == 0) {
    result = 2;
  }
  if (Player1.answer == 0 && Player2.answer == 1) {
    result = 3;
  }
  if (Player1.answer == 0 && Player2.answer == 0) {
    result = 4;
  }

  switch (result) {
    case 1:
      Player1.points += 3;
      Player2.points += 3;
      break;
    case 2:
      Player1.points += 0;
      Player2.points += 6;
      break;
    case 3:
      Player1.points += 6;
      Player2.points += 0;
      break;
    case 4:
      Player1.points += 1;
      Player2.points += 1;
      break;
  }
}

console.log("player one points: " + Player1.points);
console.log("player two points: " + Player2.points);

console.log("\n\n\n\n");

if (Player1.points > Player2.points) {
  properties.diference = 1;
} else if (Player1.points < Player2.points) {
  properties.diference = 2;
} else {
  properties.diference = 3;
}

switch (
  properties.diference // cool info about the results
) {
  case 1:
    console.log(
      Player1.points - Player2.points + " -\n",
      Player1.points + Player2.points + " +\n",
      Player1.points / Player2.points + " /\n",
      Player1.points * Player2.points + " *\n",
      (Player1.points % Player2.points) + " %",
    );
    break;
  case 2:
    console.log(
      Player2.points - Player1.points + " -\n",
      Player1.points + Player2.points + " +\n",
      Player2.points / Player1.points + " /\n",
      Player1.points * Player2.points + " *\n",
      (Player2.points % Player1.points) + " %",
    );
    break;
  case 3:
    console.log(
      Player1.points - Player2.points + " -\n",
      Player1.points + Player2.points + " +\n",
      Player1.points / Player2.points + " /\n",
      Player1.points * Player2.points + " *\n",
      (Player1.points % Player2.points) + " %",
    );
    break;
}
