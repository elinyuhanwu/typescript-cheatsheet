let isCool: boolean = true;
let age: number = 30;
let eyeColoe: string = 'brown';
let pets: string[] = ['dog', 'cat', 'kitten'];
let pets2: Array<string> = ['lion', 'tiger', 'dragon'];
let wizard: object = {
  a: 'John'
}

let meh: undefined = undefined;
let noo: null = null;

// Tuple
let basket: [string, number];
basket = ['baseball', 5];
 
// Enum
enum Size { Small = 1, Medium = 2, Large = 3 }
let sizeName: string = Size[1];

// void(no return function)
let sing = (): void => {
  console.log('lalalala');
}

// never (1. The function never return. 2. Doesn't has endpoint.)
let error = (): never => {
  throw Error('oops');
}

// interface
interface RobotArmy {
  count: number,
  type: string,
  magic: string
}
let fightRobotArmy = (robots: RobotArmy): void => {
  console.log('FIGHT');
}
let fightRobotArmy2 = (robots: { count: number, type: string, magic: string }): void => {
  console.log('FIGHT');
}
