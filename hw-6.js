//Задание 1
const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
	if (numbs[i] == 0) break;
	console.log(numbs[i]);
}

//Задание 2
const num = [1, 5, 4, 10, 0, 3];

console.log(num.indexOf(4));

//Задание 3
const number = [1, 3, 5, 10, 20];

console.log(number.join(' '));

//Задание 4
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = []; // создаем подмассив
	
	for (let j = 0; j < 3; j++) {
		arr[i].push(j); // заполняем подмассив числами
	}
}

console.log(arr);

//Задание 5
const numbers = [1, 1, 1];

numbers.push(2);
numbers.push(2);
numbers.push(2);

console.log(numbers);

//Задание 6
let k = [9, 8, 7, 'a', 6, 5];

k.sort();
k.pop();

console.log( k );

//Задание 7

const seven = [9, 8, 7, 6, 5];

let userAnswer = Number (prompt('Введите дюбое число'));

if (seven.includes(userAnswer)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

//Задание 8
let l = 'abcdef'

let lL = l.split('');

lL.reverse();

let LL = lL.join('')

console.log(LL);

//Задание 9

let mass = [[1, 2, 3,],[4, 5, 6]]

mass.flat();

console.log(mass);

//задание 10
let arr10 = [9, 8, 1, 7, 2, 6, 5, 4, 3, 10];

const sum10_2 = (a, b) =>{
    let result = a + b;
    return result;
};

const lengthArr10 = arr10.length;
for (let im = 0; im < lengthArr10 - 1; im++) {
    console.log(sum10_2(...arr10));
    arr10.shift();
}

//Задание 11

function sumArray(arr) {
    let newArr = [];
    let sum = 0;
  
    arr.forEach((item) => {
      sum = item * item;
      newArr.push(sum);
    })
    return newArr;
  }

//Задание 12
let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

let vegetableLength = vegetables.map(function(piece) {
  return piece.length;
  });

  console.log( vegetableLength ); // 7,4,7,8

  //Задание 13
  function filterPositive(array) {

    let z = array.filter(function(number) {
        return number < 0;
      });
    
  }

  filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
  filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]