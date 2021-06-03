class ArrayOfNumbers {
    constructor(public collection: number[]) {

    }
    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) { }

    get(index: number): string {
        return this.collection[index];
    }
}

class ArrayOfAnthing<T>{
    constructor(public collection: T[]) { }

    get(index: number): T {
        return this.collection[index];
    }
}
const array = new ArrayOfAnthing<string>(['a', 'b', 'c']);
const arrayNumber = new ArrayOfAnthing([1, 2, 3]);

const printNumbers = (arr: number[]): void => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
const printStrings = (arr: string[]): void => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function printAnything<T>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printAnything(['a', 'b', 'c']);
// printAnything<string[]>(array);

class Car {
    print() {
        console.log("I am a Car");
    }
}

class House {
    print() {
        console.log("I am a House");
    }
}
interface Printable {
    print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}
const carRed = new Car();
const carBlau = new Car();
const myHouse = new House();

printHousesOrCars([carRed, carBlau, myHouse])
printHousesOrCars<House>([carRed, carBlau, myHouse]);