//Задание 1
let A = 20;
alert(A);

//Задание 2
let agePhone= 2007;
alert("Год выпуска первого iPhone ?");
alert(agePhone);

//Задание 3
let nameJS = "Брендан Эйх";
alert('Кто создал язык програмирования JS ?');
alert(nameJS);

//Задание 4
let d = 10;
let f = 2;
alert('Сумма 10 и 2 ?');
alert(d+f);
alert('разность 10 и 2 ?');
alert(d-f);
alert('Произведение 10 и 2 ?');
alert(d*f);
alert('Чостное 10 и 2 ?');
alert(d/f);

//Задание 5
let n = 2;
let m = 5;
let result = n**m;
alert('2 в 5 степени ?');
alert(result);

//Задание 6    
let a = 9;
const b = 2;
alert('Остаток от деления 9 и 2 ?')
alert(a%b); 

//Задание 7
let num = 1;
num = num + 5;
num = num - 3;
num = num * 7;
num = num / 3;
++num;
--num;
alert(num);

//Задание 8
let age = prompt('Сколько вам лет?');
alert(age); // Выведет значение, заданное пользователем

//Задание 9.0
let user = {
    name: "John",
    age: 33,
    isAdmin: true,
    //Задание 9.1
    cityofresidence: "Japan"
};
// задание 9.2
user.age = 27;
console.log(user); // {name: 'John', age: 27}
// Задание 9.3
delete user.cityofresidence;
//Задание 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[name]);
alert(user[age]);
alert(user[isAdmin]);

//Задание 10
let Uname =prompt('Как тебя зовут?');
alert('Привет, ' + Uname);