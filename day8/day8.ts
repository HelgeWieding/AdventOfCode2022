export {};
const data = await Deno.readTextFile("./day8/input.txt");

const trees: number[][] = [];

const treeScores: number[] = [];

data.split("\n").map((v, index) => {
  const currentLine = [];
  for (let i = 0; i < v.length; i++) {
    const height = parseInt(v[i]);
    currentLine.push(height);
  }
  trees.push(currentLine);
});
const width = trees[0].length;
const height = trees.length;

const checkTree = (pos: [number, number]) => {
  const [posX, posY] = pos;
  const currentTree = trees[posY][posX];

  // visible.push(currentTree);
  // get left elements
  const leftTreeCheck = trees[posY].filter((el, idx) => idx < posX).reverse();

  const rightTreeCheck = trees[posY].filter((el, idx) => idx > posX);

  const column = trees
    .map((row) => row.filter((el, idx) => idx === posX))
    .flat();

  const upTreeCheck = column.filter((el, idx) => idx < posY).reverse();

  const downTreeCheck = column.filter((el, idx) => idx > posY);

  const scores: number[] = [];

  [downTreeCheck, upTreeCheck, rightTreeCheck, leftTreeCheck].forEach(
    (_set) => {
      let score = 0;
      for (let i = 0; i < _set.length; i++) {
        score++;
        if (_set[i] >= currentTree) {
          break;
        }
      }
      scores.push(score);
    }
  );
  const totalScore = scores.reduce((acc, curr) => acc * curr, 1);
  treeScores.push(totalScore);
};

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    checkTree([x, y]);
  }
}

console.log(treeScores.sort((a, b) => b - a)[0]);
