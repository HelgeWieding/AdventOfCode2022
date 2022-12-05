export {};
const result = await Deno.readTextFile("./day2/input.txt");
const opponentTable: {
  [key: string]: { beats: string; points: number; lose: string };
} = {
  // rock
  A: { beats: "C", points: 1, lose: "B" },
  // paper
  B: { beats: "A", points: 2, lose: "C" },
  // siscors
  C: { beats: "B", points: 3, lose: "A" },
};

const myTable: { [key: string]: { beats: string; points: number } } = {
  // lose
  X: { beats: "C", points: 1 },
  // draw
  Y: { beats: "A", points: 2 },
  // win
  Z: { beats: "B", points: 3 },
};

let score = 0;
result.split("\n").map((v) => {
  // part one
  // const [opponent, me] = v.split(" ");
  // // draw
  // if (opponentTable[opponent].points === myTable[me].points) {
  //   score += 3;
  // }
  // // win
  // if (myTable[me].beats === opponent) {
  //   score += 6;
  // }
  // score += myTable[me].points;
  // part2
  const [opponent, play] = v.split(" ");
  // need to lose
  if (play === "X") {
    const me = opponentTable[opponentTable[opponent].beats];
    score += me.points;
  }
  // need to draw
  if (play === "Y") {
    const me = opponentTable[opponent];
    score += me.points;
    score += 3;
  }
  // need to win
  if (play === "Z") {
    const me = opponentTable[opponentTable[opponent].lose];
    score += me.points;
    score += 6;
  }
});
console.log(score);
