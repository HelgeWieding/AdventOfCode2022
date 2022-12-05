export {};
const result = await Deno.readTextFile("./day1/input.txt");
const calories: number[][] = [];
let currentCalories: number[] = [];

result.split("\n").map((v) => {
  if (!v) {
    calories.push(currentCalories);
    currentCalories = [];
  } else {
    currentCalories.push(parseInt(v));
  }
});

const sort = (calories: number[][]) => {
  return calories
    .map((calory) => {
      const value = calory.reduce((acc, cur) => {
        return acc + cur;
      }, 0);
      return value;
    })
    .sort((a: number, b: number) => b - a);
};
const sorted = sort(calories);
console.log(sorted[0] + sorted[1] + sorted[2]);
