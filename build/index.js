"use strict";
var ArrayOfNumbers = /** @class */ (function () {
    function ArrayOfNumbers(collection) {
        this.collection = collection;
    }
    ArrayOfNumbers.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfNumbers;
}());
var ArrayOfStrings = /** @class */ (function () {
    function ArrayOfStrings(collection) {
        this.collection = collection;
    }
    ArrayOfStrings.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfStrings;
}());
var ArrayOfAnthing = /** @class */ (function () {
    function ArrayOfAnthing(collection) {
        this.collection = collection;
    }
    ArrayOfAnthing.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfAnthing;
}());
var array = new ArrayOfAnthing(['a', 'b', 'c']);
var arrayNumber = new ArrayOfAnthing([1, 2, 3]);
var printNumbers = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};
var printStrings = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};
function printAnything(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printAnything(['a', 'b', 'c']);
// printAnything<string[]>(array);
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.print = function () {
        console.log("I am a Car");
    };
    return Car;
}());
var House = /** @class */ (function () {
    function House() {
    }
    House.prototype.print = function () {
        console.log("I am a House");
    };
    return House;
}());
function printHousesOrCars(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}
var carRed = new Car();
var carBlau = new Car();
var myHouse = new House();
printHousesOrCars([carRed, carBlau, myHouse]);
printHousesOrCars([carRed, carBlau, myHouse]);
