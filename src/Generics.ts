function merge<A,B>(a: A, b: B):A&B {
    return{
        ...a,
        ...b
    };
}

const merged=merge({foo: 1},{bar:1});

function wrap<T>(param: T){
    return{
        param
    }
}
const wrapped = wrap(10);

type Items<T> = {
    list:T[];
};

const itmes: Items<string> ={
    list:['a','b','c']
};

class Queue<T> {
    list: T[] = [];
    get length() {
        return this.list.length;
    }
    enqueue(item: T) {
        this.list.push(item);
    }
    dequeue(){
        return this.list.shift();
    }
} 

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());