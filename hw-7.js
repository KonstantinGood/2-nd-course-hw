// Задание 1
let str = 'js';

console.log(str.toUpperCase());

// Задание 2
const products = ['яблоко', 'груша', 'гриб', 'огурец'];
const search = 'помидор';

products.forEach((product) => {
	
	if (product.toLowerCase().includes(search.toLowerCase())) {
		console.log(product);
	}
});

// Задание 3
const num = '32.58884'

Math.floor(num);
console.log(num);

Math.ceil(num);
console.log(num);

Math.round(num);
console.log(num);

// Задание 4
const numbs = (52, 53, 49, 77, 21, 32);

Math.min(numbs);
console.log(numbs);

Math.max(numbs);
console.log(numbs);

//Задание 5

function getRandomInt(minValue,maxValue) {

    return Math.round(Math.random()*maxValue);
}

console.log(getRandomInt(0, 10));

//Задание 6
const u = (max) => {
    let arr = new Array();
    while (arr.length < Math.floor(max/2)) {
        arr.push(Math.round (Math.random()* (max - 1)) + 1);
    }
    console.log(arr);
}
u(8);

//Задание 7
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  console.log(getRandomArbitrary(3, 9));
  
  
  console.log(getRandomArbitrary(1, 7));
  
  
  console.log(Math.random());

  //Задание 8

  let date1 = new Date();
  console.log(date1);

   //Задание 9
   let date = new Date(2016, 1, 28);
   date.setDate(date.getDate() + 74);

   alert( date ); 

   //Задание 10

   const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
   const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

   const ten = (currentDate) => {
    let date = currentDate.getDate();
    if (date < 10) {
        date = '0' + date;
    };
    let munth = munth[currentDate.getMonth() - 1];

    let day = days[currentDate.getday()];

    let hours = currentDate.getHourse();
    if (hourse < 10) {
        hourse = '0' + hours;
    };

    let min = currentDate.getMinutes();
    if (min < 10) {
        min = '0' + min;
    };

    let sec = currentDate.getSeconds();
    if (sec < 10) {
        sec = '0' + sec;
    };

    console.log (`дата: ${date}.${month}.${currentDate.getFullYear()} - это ${day}.`);
    console.log (`Время: ${hourse}:${min}:${sec}`);
   };

   ten(currentDate = new Date);


