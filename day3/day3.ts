export {};
const result = await Deno.readTextFile("./day3/input.txt");
const alphabet = "_abcdefghijklmnopqrstuvwxyz";
const upperCaseAlphabet = alphabet.toLocaleUpperCase();
console.log(upperCaseAlphabet.indexOf("A"));

let sum = 0;

result.split("\n").map((v) => {
  const compartment1 = v.substring(0, v.length / 2);
  const compartment2 = v.substring(v.length / 2, v.length);
  console.log(compartment1);
  console.log(compartment2);

  for (let i = 0; i < compartment1.length; i++) {
    const currentChar = compartment1.charAt(i);
    if (compartment2.indexOf(currentChar) > -1) {
      // error found
      let points = alphabet.indexOf(currentChar);
      if (points === -1) {
        points = 26 + upperCaseAlphabet.indexOf(currentChar);
      }

      sum += points;
      break;
    }
  }
});
console.log(sum);
