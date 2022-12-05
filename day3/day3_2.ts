export {};
const result = await Deno.readTextFile("./day3/input.txt");
const alphabet = "_abcdefghijklmnopqrstuvwxyz";
const upperCaseAlphabet = alphabet.toLocaleUpperCase();

let sum = 0;
const lines = result.split("\n").map((v) => v);

for (let i = 0; i < lines.length; i += 3) {
  const rucksack1 = lines[i];
  const rucksack2 = lines[i + 1];
  const rucksack3 = lines[i + 2];
  for (let j = 0; j < rucksack1.length; j++) {
    const currentChar = rucksack1.charAt(j);
    if (
      rucksack2.indexOf(currentChar) > -1 &&
      rucksack3.indexOf(currentChar) > -1
    ) {
      let points = alphabet.indexOf(currentChar);
      if (points === -1) {
        points = 26 + upperCaseAlphabet.indexOf(currentChar);
      }
      sum += points;
      break;
    }
  }
}
console.log(sum);
