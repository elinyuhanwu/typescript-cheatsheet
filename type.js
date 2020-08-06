var isCool = true;
var age = 30;
var eyeColoe = 'brown';
var pets = ['dog', 'cat', 'kitten'];
var pets2 = ['lion', 'tiger', 'dragon'];
var wizard = {
    a: 'John'
};
var meh = undefined;
var noo = null;
// Tuple
var basket;
basket = ['baseball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[1];
// void(no return function)
var sing = function () {
    console.log('lalalala');
};
// never (1. The function never return. 2. Doesn't has endpoint.)
var error = function () {
    throw Error('oops');
};
// type doesn't create a new name
// type RobotArmy = {
//   count: number,
//   type: string,
//   magic: string
// }
var fightRobotArmy = function (robots) {
    console.log('FIGHT');
};
var fightRobotArmy2 = function (robots) {
    console.log('FIGHT');
};
;
var dog = {};
dog.count;
// Function
var fightRobotArmy3 = function (robots) {
    console.log('FIGHT');
};
var fightRobotArmy4 = function (robots) {
    console.log('FIGHT');
    return 5;
};
// Class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'alalala'; // private in contrary
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello" + this.sing;
    };
    return Animal;
}());
var lion = new Animal('RAWWWR');
lion.greet();
// Union Type
var confused = 'hello';
