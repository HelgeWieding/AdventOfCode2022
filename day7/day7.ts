export {};
const data = await Deno.readTextFile("./day7/input.txt");

type Leaf = {
  name: string;
  parent: Leaf | null;
  children: Leaf[];
  size: number;
};

const Tree: { start: Leaf } = {
  start: {
    name: "/",
    parent: null,
    children: [],
    size: 0,
  },
};

let currentLeaf = Tree.start;
data.split("\n").map((v, index) => {
  if (index !== 0) {
    const line = v.split(" ");
    if (line[0] === "$") {
      // command
      if (line[1] === "cd") {
        // console.log(`changing directory ${line[2]}`);
        if (line[2] === "..") {
          if (currentLeaf.parent) {
            currentLeaf = currentLeaf.parent;
          }
        } else {
          const newLeaf = currentLeaf.children.find(
            (child: Leaf) => child.name === line[2]
          );
          if (newLeaf) {
            currentLeaf = newLeaf;
          }
        }
      }
    } else {
      const isDir = line[0] === "dir";

      const newLeaf = {
        name: line[1],
        parent: currentLeaf,
        children: [],
        size: isDir ? 0 : parseInt(line[0]),
      };
      currentLeaf.children.push(newLeaf);
    }
  }
});

const sizes = [];
const checkSize = (leaf: Leaf, totalSize: number): number => {
  console.log(leaf.children);

  totalSize += leaf.children.reduce((acc, leaf) => {
    return acc + leaf.size;
  }, 0);

  for (let i = 0; i < leaf.children.length; i++) {
    const childLeaf = leaf.children[i];
    const size = checkSize(childLeaf, 0);
    sizes.push(size);
    totalSize += size;
  }
  return totalSize;
};
const totalSize = checkSize(Tree.start, 0);
sizes.push(totalSize);

const freeSpace = 70000000 - totalSize;
const spaceNeeded = 30000000 - freeSpace;

console.log(
  sizes
    .filter((size) => size > spaceNeeded)
    .sort((a, b) => b - a)
    .pop()
);
