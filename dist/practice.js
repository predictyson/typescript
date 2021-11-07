"use strict";
function sum(x, y) {
    return x + y;
}
sum(1, 2);
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
var total = sumArray([1, 2, 3, 4, 5]);
function returnNothing() {
    console.log('I am just saying hello world');
}
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var circle = new Circle(5);
var rectangle = new Rectangle(10, 5);
console.log(circle.radius);
//console.log(rectangle.width);
var shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
// interface Person {
//     name: string;
//     age?: number;
// }
// interface Developer {
//     name: string;
//     age?: number;
//     skills: string[];
// }
// interface Developer extends Person {
//     skills: string[];
// }
// const person: Person = {
//     name:'kim',
//     age: 24
// };
// const expert: Developer = {
//     name: 'senior',
//     skills: ['js', 'react']
// };
// const people: Person[] = [person, expert];
