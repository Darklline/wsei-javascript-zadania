//Zadanie 1
const logicOne = false;
const logicTwo = true;
console.log(logicOne === logicTwo); // false

//Zadanie 2
const numOne = 10;
const numTwo = 3;

let moduloResult = 0;
moduloResult = numOne % numTwo;
console.log(moduloResult);

//Zadanie 3
const stringOne = 'Str';
const stringTwo = 'ing';
let stringResult = '';
stringResult = stringOne + stringTwo;
console.log(stringResult);

//Zadanie 4
var someNumber = 425;
var someString = '425';

console.log(someNumber == someString); //true poniewaz jest przeprowadzona konwersja typów przez javascrtip
console.log(someNumber === someString); //false ponieważ zmienne są innego typu

//Zadanie 5
let counter = 30;
console.log(counter);
counter++;
console.log(counter); //31
counter--;
console.log(counter); //30

//Zadanie 6
const numbOne = 2;
const numbTwo = 10;
let result = null;
result = numbOne > numTwo;
console.log(result);
