
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

type Person = {
    name: string;
    age?:number;
};

type Developer = Person & {
    skills: string[];
}

const person: Person = {
    name: 'kim'
}

const expert: Developer = {
    name: 'devleop',
    skills: ['js', 'react']
};

type People = Person[];
const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';
const colors: Color[] = ['red', 'orange'];