const commands = ["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"];
const values = [[], [1], [2], [1], [3], [2], [2], [2], [2]];

class MyHashSet {
  constructor() {

  }

  add(key: number): void {
    this[key] = true;

    return null;
  }

  remove(key: number): void {
    delete this[key];

    return null;
  }

  contains(key: number): boolean {
    return Boolean(this[key]);
  }
}

function hashRunner(commands: string[], values: number[][]) {
  const length = commands.length;
  let instance;

  for (let i = 0; i < length; i++) {
    if (!instance) {
      instance = new MyHashSet();

      console.log(null);

      continue;
    }

    console.log(instance[commands[i]](values[i][0]));
  }
}

hashRunner(commands, values);
