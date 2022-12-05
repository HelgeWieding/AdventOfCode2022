export {};
const result = await Deno.readTextFile("./day4/input.txt");
let count = 0;

result.split("\n").map((v) => {
  const [assignmentA, assignmentB] = v.split(",");
  const [fromA, toA] = assignmentA.split("-");
  const [fromB, toB] = assignmentB.split("-");

  const aContains: { [key: number]: boolean } = {};
  for (let i = parseInt(fromA); i <= parseInt(toA); i++) {
    aContains[i] = true;
  }

  const bContains: { [key: number]: boolean } = {};
  for (let i = parseInt(fromB); i <= parseInt(toB); i++) {
    bContains[i] = true;
  }

  if (Object.keys(aContains).find((val: string) => bContains[parseInt(val)])) {
    count++;
  }
});
console.log(count);
