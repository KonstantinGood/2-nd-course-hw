//Задание 1
function min(a, b) {
   return (a < b) ? a : b;
}
alert(min(8, 4));
alert(min(6, 6));

//Задание 2
function even(x) {
    if (x % 2 == 0) {
       return (`Число чётное`);
    } else {
        return (`Число нечётное`);
    }
}

x = prompt(`Введите чило`);
console.log(even(x));

//Задание 3.1
function number(num) {
    return num * num
}

console.log(number(10)) // => 100

//Задание 3.2
function number(num) {
    return (num * num)
}

console.log(number(10)) // => 100

//Задание 4
"use strict";
let age = prompt("Сколько Вам лет?");

let printMessage;

// в зависимости от условия объявляем функцию
if (age < 0) {

   printMessage = function () {
        console.log("Вы ввели неправильное значение");
    }


} else if (age > 12) {

    printMessage = function () {
        console.log("Добро пожаловать!");
    }

} else {

    printMessage = function () {
        console.log("Привет, друг!");
   }

}

printMessage();

//Задание 5
function num(a, b) {
    if (isNaN(a) || isNaN(b)) {

        return 'Одно или оба значения не являются числом';

    } else {

        return a * b
    }
}

console.log(num(4, 5));

//Задание 6
let numb = prompt(`Введите число`);

if (isNaN(numb)) {
    function answer(params) {
       console.log(`Переданный параметр не является числом`);
    }

} else {
    function answer(params) {
        console.log(`${numb} в кубе равняется ${numb ** 3}`);
    }

}
answer();

//Задание 7


function getArea() {
    return 3.14 * this.radius ** 2;
}

function getPerimeter() {
    return 2 * 3.14 * this.radius;
}

const circleOne = {
    radius: 10,
    getAreaRheuf: getArea,
    getPerimeterRheuf: getPerimeter,
};

const circleTwo = {
    radius: 10,
    getAreaRheuf: getArea,
    getPerimeterRheuf: getPerimeter,
};

console.log(circleOne.getAreaRheuf());
console.log(circleOne.getPerimeterRheuf());
console.log(circleTwo.getAreaRheuf());
console.log(circleTwo.getPerimeterRheuf());

//Задание 8
function season() {
    let answer = prompt('Введите номер месяца (от 1 до 12)');

    if (answer == 12 || answer == 1 || answer == 2) {
        alert(`Зима`);
    }
    else if (answer == 3 || answer == 4 || answer == 5) {
        alert(`Весна`);
    }
    else if (answer == 6 || answer == 7 || answer == 8) {
        alert(`Лето`);
    }
    else if (answer == 9 || answer == 10 || answer == 11) {
        alert(`Осень`);;
    }
    else {
        alert(`Вы ввели не подходящее значение`);
    }
}





