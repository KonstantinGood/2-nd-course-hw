// Задание 1

const peoples = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
  peoples.sort(function (a, b) {
    if (a.age > b.age) {
      return 1;
    }
    if (a.age < b.age) {
      return -1;
    }
    // a должно быть равным b
    return 0;
  });
 console.log(peoples);

 // Задание 2

 //function isPositive(number) {
    //return number > 0;
 //}

 //function isMale(person) {
    //return person.gender === 'male';
 //}

 //function filter(arr, rule) {
    //const result = [];
    //for (let i = 0; i < arr.length; i++) {
        
   //     result.push(rule(arr[i]));

    //}
   // return result;
// }
 //console.log(filter([3, -4, 1, 9]), isPositive);
 //const people = [
  //  {name: 'Глеб', gender: 'male'},
   // {name: 'Анна', gender: 'female'},
   // {name: 'Олег', gender: 'male'},
   // {name: 'Оксана', gender: 'female'}
// ];
 
 //console.log(filter(people, isMale)); 

  // Задание 3

  let timerId = setInterval(() => console.log(new Date), 3000);

  setTimeout(() => { clearInterval(timerId); }, 30000);

  // Задание 4

  function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

// Задание 5

// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(function() {
    sayHi('Глеб');
});