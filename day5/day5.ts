export {};
const result = await Deno.readTextFile("./day5/input.txt");

class Stack {
  private items: string[];

  constructor(items: string[]) {
    this.items = items;
  }

  remove() {
    const val = this.items.pop();
    return val?.[0];
  }
  add(item: string) {
    this.items.push(item);
  }
}

let stackParsing = true;
const currentStackItems: string[][] = [[]];
const stacks: Stack[] = [];

const step = (amount: number, from: number, to: number) => {
  console.log(`stepping ${amount} from ${from} to ${to}`);
  if (isNaN(amount)) {
    return;
  }
  while (amount > 0) {
    const item = stacks[from].remove();
    if (item) {
      stacks[to].add(item);
    }
    amount--;
  }
};

result.split("\n").map((line) => {
  if (!line) {
    // stack parsing ends lets build the stacks
    currentStackItems.forEach((stackItems) => {
      const stack = new Stack(stackItems.reverse());
      stacks.push(stack);
    });
    stackParsing = false;
  }
  if (stackParsing) {
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === "[") {
        let currentStackCounter = i / 4;
        const next = line[i + 1];
        if (currentStackItems[currentStackCounter]) {
          currentStackItems[currentStackCounter].push(next);
        } else {
          currentStackItems[currentStackCounter] = [next];
        }
        currentStackCounter += 1;
      }
    }
  } else if (stackParsing === false) {
    // instruction parsing
    const instructions = line.split(" ");

    const amount = parseInt(instructions[1]);
    const from = parseInt(instructions[3]) - 1;
    const to = parseInt(instructions[5]) - 1;

    step(amount, from, to);
  }
});
const res = stacks.map((stack) => stack.remove()).join("");
console.log(res);
