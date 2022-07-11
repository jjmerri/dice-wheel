const wheel = [
  [2, 2, 6],
  [1, 1, 1],
  [3, 6, 6],
  [4, 4, 4],
  [1, 1, 5],
  [2, 2, 2],
  [3, 5, 5],
  [6, 6, 6],
  [2, 3, 4],
  [3, 3, 3],
  [1, 4, 4],
  [5, 5, 5],
  [2, 3, 3],
  [1, 1, 1],
  [2, 5, 5],
  [4, 4, 4],
  [1, 1, 6],
  [2, 2, 2],
  [1, 2, 3],
  [6, 6, 6],
  [2, 2, 4],
  [3, 3, 3],
  [4, 6, 6],
  [5, 5, 5],
  [3, 3, 4],
  [1, 1, 1],
  [5, 5, 6],
  [4, 4, 4],
  [1, 2, 6],
  [2, 2, 2],
  [3, 4, 4],
  [6, 6, 6],
  [2, 2, 5],
  [3, 3, 3],
  [1, 1, 2],
  [5, 5, 5],
  [4, 6, 6],
  [1, 1, 1],
  [3, 4, 5],
  [4, 4, 4],
  [3, 3, 6],
  [2, 2, 2],
  [4, 5, 5],
  [6, 6, 6],
  [4, 4, 5],
  [3, 3, 3],
  [1, 2, 2],
  [5, 5, 5],
  [4, 5, 6],
  [1, 1, 1],
  [5, 6, 6],
  [4, 4, 4],
  [1, 1, 3],
  [2, 2, 2],
  [1, 3, 3],
  [6, 6, 6],
  [2, 4, 4],
  [3, 3, 3],
  [1, 5, 6],
  [5, 5, 5],
];

const waysToWin = {
  1: { 1: 0, 2: 0, 3: 0 },
  2: { 1: 0, 2: 0, 3: 0 },
  3: { 1: 0, 2: 0, 3: 0 },
  4: { 1: 0, 2: 0, 3: 0 },
  5: { 1: 0, 2: 0, 3: 0 },
  6: { 1: 0, 2: 0, 3: 0 },
};

wheel.forEach((combo) => {
  const occurences = {};
  combo.forEach((number) => {
    occurences[`${number}`] = (occurences[`${number}`] || 0) + 1;
  });

  Object.entries(occurences).forEach(([occurence, numOccurences]) => {
    waysToWin[`${occurence}`][`${numOccurences}`]++;
  });
});

console.log(waysToWin);

const probability = {};
Object.entries(waysToWin).forEach(([number, numWaysToWin]) => {
  const specificWaysToWin = waysToWin[number];
  probability[number] =
    1 -
    ((specificWaysToWin["1"] / 60) * 2 +
      (specificWaysToWin["2"] / 60) * 3 +
      (specificWaysToWin["3"] / 60) * 4);
});

console.log(probability);

const numGames = 10000000;
let win = numGames;

const simulate = (pick) => {
  win--;
  const winner = wheel[Math.floor(Math.random() * 60)];

  let numWins = winner.filter((num) => num == pick).length;
  if (numWins > 0) {
    numWins++;
  }
  win += numWins;
};

for (i = 0; i < numGames; i++) {
  simulate(4);
}

console.log("lost", numGames - win);
console.log("lostPercentage", (numGames - win) / numGames);
