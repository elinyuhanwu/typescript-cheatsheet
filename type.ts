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
  magic?: string //"?" means magic is optional
}
// type doesn't create a new name
// type RobotArmy = {
//   count: number,
//   type: string,
//   magic: string
// }
let fightRobotArmy = (robots: RobotArmy): void => {
  console.log('FIGHT');
}
let fightRobotArmy2 = (robots: { count: number, type: string, magic: string }): void => {
  console.log('FIGHT');
}

// Type assertion
interface CatArmy {
  count: number,
  type: string,
  magic: string
};

let dog = {} as CatArmy;
dog.count

// Function
let fightRobotArmy3 = (robots: RobotArmy): void => {
  console.log('FIGHT');
}
let fightRobotArmy4 = (robots: { count: number, type: string, magic: string }): number => {
  console.log('FIGHT');
  return 5;
}

// Class
class Animal {
  public sing: string = 'alalala' // private in contrary
  constructor(sound: string) {
    this.sing = sound;
  }
  greet() {
    return `Hello${this.sing}`
  }
}
let lion = new Animal('RAWWWR')
lion.greet();

// Union Type
let confused: string | number = 'hello';

