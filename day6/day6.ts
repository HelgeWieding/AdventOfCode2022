export {};
const data = await Deno.readTextFile("./day6/input.txt");

class StringBuffer {
  private _buffer: string[];

  constructor(size: number) {
    this._buffer = new Array<string>(size).fill("_");
  }

  push(char: string) {
    console.log(`char ${char}`);
    const lastIndex = this._buffer.length - 1;
    for (let i = 1; i < this._buffer.length; i++) {
      const currentChar = this._buffer[i];
      this._buffer[i - 1] = currentChar;
    }
    this._buffer[lastIndex] = char;
  }
  get buffer() {
    return this._buffer;
  }
}

const containsEqual = (): boolean => {
  let found = false;
  const foundMap = new Map();
  buffer.buffer.forEach((item) => {
    if (foundMap.has(item)) {
      found = true;
    }
    foundMap.set(item, true);
  });
  return found;
};

const buffer = new StringBuffer(14);

let index = 0;
for (let i = 0; i < data.length; i++) {
  const char = data[i];
  if (i > 3) {
    if (!containsEqual()) {
      index = i;
      break;
    }
  }
  buffer.push(char);
}
console.log(buffer);

console.log(index);
