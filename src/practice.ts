function sum(x: number, y: number): number {
    return x+y;
}
sum(1,2);

function sumArray(numbers: number[]):number {
    return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1,2,3,4,5]);

function returnNothing(): void {
    console.log('I am just saying hello world');
}

interface Shape {
    getArea(): number;
}

class Circle implements Shape{
    constructor(public radius: number){
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width*this.height;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10,5);

console.log(circle.radius);
//console.log(rectangle.width);

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
    console.log(shape.getArea());
})



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