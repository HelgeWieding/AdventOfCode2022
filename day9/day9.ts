export {};

const data = await Deno.readTextFile("./day9/input.txt");

const visited = new Map<string, boolean>();
const Head = [0, 4];
const Tail = [0, 4];

let counter = 0;
const step = (axis: number, direction: number) => {
  console.log(`stepping ${counter++}`);

  Head[axis] += direction;
  const counterAxis = axis === 1 ? 0 : 1;
  console.log(Head);

  // level drag
  if (Head[axis] !== Tail[axis] && Head[counterAxis] === Tail[counterAxis]) {
    // move when distance is greater than
    const distance = Math.abs(Head[axis] - Tail[axis]);
    console.log("never going here 1");
    if (distance > 1) {
      Tail[axis] += direction;
    }
  }
  // diagonal drag

  visited.set(`${Tail[0]}${Tail[1]}`, true);
};

// data.split("\n").forEach((line) => {
let steps = 4;
while (steps > 0) {
  step(1, -1);
  steps--;
}
// });

visited.set(`04`, true);

data.split("\n").forEach((line: stirng) => {
  console.log(line);
});

console.log(visited);
