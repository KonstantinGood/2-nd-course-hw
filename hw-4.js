//Задание 1

let m = 0;
while (m < 2) {
    console.log ('Привет');
    m++
}
 //Задание 2

 let i = 0;

while (i < 6) {
	console.log(i);
	i++;
}

//Задание 3

let n = 7;

while (n < 23) {
	console.log(n);
	n++;
}

//Задание 4

let obj = {'Коля': 200, 'Вася':300, 'Петя': 400};

for(key in obj){
    console.log([key]+ ' - Зарплата ' + obj[key] +' долларов');
}

//Задание 5

let a = 1000, s= 0;
while(a >= 50){
    a = a/2;
  s++;
}
console.log("Итераций: " + s +", получилось число " + a);


//Задание 6

//for (let fridey = 7; fridey <=31; fridey = fridey+7) {
//  console.log (`Сугодня пятница ${fridey}-е число. Необходимо подготовить отчет.`)
//}

//Задание 6
let dey = Number(prompt(`какая дата у пятницы?`));

let fridey = dey;
do {
  console.log (`Сегодня пятница ${fridey}-е число. Необходимо подготовить отчет.`);
  fridey = fridey+7;
  fridey++;
} while (fridey <=31);

                  