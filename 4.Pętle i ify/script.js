//Zadanie 1
const numOne = 2;
const numTwo = 5;
//numOne > numTwo ? console.log(numOne) : console.log(numTwo);
if (numOne > numTwo) {
	console.log(numOne);
} else {
	console.log(numTwo);
}

//Zadanie 2
const nOne = 2;
const nTwo = 5;
const nThree = 10;

if (nOne > nTwo && nOne > nThree) {
	console.log(nOne);
} else if (nTwo > nOne && nTwo > nThree) {
	console.log(nTwo);
} else {
	console.log(nThree);
}

//Zadanie 3
for (let i = 0; i < 10; i++) {
	console.log(i, 'Javascrtip');
}

//Zadanie 4
let result = 0;
for (let i = 1; i < 11; i++) {
	result += i;
}
console.log(result);

//Zadanie 5
let n = 5;
for (let i = 0; i < n; i++) {
	if (i % 2 === 0) {
		console.log(i, 'parzysta');
	} else {
		console.log(i, 'nieparzysta');
	}
}

//Zdanie 6
for (let i = 0; i < 5; i++) {
	for (let j = 0; j < 5; j++) {
		console.log('i=', i, 'j=', j);
	}
}

//Zadanie 7
for (let i = 0; i <= 100; i++) {
	if (i % 3 === 0) {
		console.log(i, 'Fizz');
	} else if (i % 5 === 0) {
		console.log(i, 'Buzz');
	} else if (i % 3 === 0 && i % 5 === 0) {
		console.log(i, 'FizzBuzz');
	} else {
		console.log(i);
	}
}

//Zadanie 8
//a

for (var i = 1; i <= 5; i++) {
	console.log('*'.repeat(i));
}

// //lub

// let star = 5;
// let result = '';

// for(let i = 1; i <= star; i++){
//     for(let j = 0; j < i; j++){
//          result += "*";
//     }
//     console.log(result);
//     result = ""
// }

//b)
let count = 4;
for (let i = 1; i <= 5; i++) {
	console.log(' '.repeat(count) + '* '.repeat(i));
	count--;
}

//c)
let count1 = 4;
for (let i = 1; i <= 10; i++) {
	if (i % 2 !== 0) {
		console.log(' '.repeat(count1) + '*'.repeat(i) + ' '.repeat(count1));
		count1--;
	}
}

//d
let str = '*1234';
for (j = 0; j <= 11; j++) {
	if (j === 6) {
		console.log('------');
	} else if (j < 6) {
		console.log('*'.repeat(j) + str.slice(j));
	} else {
		console.log('*'.repeat(12 - j) + str.slice(12 - j));
	}
}

//e
let count2 = 4;
for (let i = 1; i <= 6; i++) {
	if (i <= 5) {
		console.log(' '.repeat(count2) + '* '.repeat(i));
		count2--;
	} else {
		console.log('    *');
	}
}
