//

// 1) Напиши скрипт выбора стоимости отеля по кол - ву звёзд.
//  * 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
//  *
//  * Если в переменной stars что-то кроме чисел 1-5, выведи строку
//  * 'Такого кол-ва звезд нет'

// const star = Number(prompt('Оберіть кількість зірочок'));
// let price;

// if (star === 1) {
//     price = 20;
//     console.log(`Вартість готелю ${price}$`);
// } else if (star === 2) {
//     price = 30;
//     console.log(`Вартість готелю ${price}$`);
// } else if (star === 3) {
//     price = 50;
//     console.log(`Вартість готелю ${price}$`);
// }else if (star === 4) {
//     price = 70;
//     console.log(`Вартість готелю ${price}$`);
// }else if (star === 5) {
//     price = 120;
//     console.log(`Вартість готелю ${price}$`);
// } else {
//     console.log('Такого кол-ва звезд нет');
// }

// ---------------Інструкція Swich-----------------

// const stars = 1;
// let price;

// switch (stars) {
//     case 1:
//         price = 20;
//         break;
    
//     case 2:
//         price = 30;
//         break;
    
//     case 3:
//         price = 50;
//         break;
    
//     case 4:
//         price = 70;
//         break;
    
//     case 5:
//         price = 120;
//         break;
    
//     default:
//         console.log('Такого кол-ва звезд нет');

// }

// console.log(price);


// 2) Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
//  1,2 - 20$, 3,4 - 30$, 5 - 120$

// const stars = 1;
// let price;

// if (stars === 1 || stars === 2) {
//     price = 20;
    
// } else if (stars === 3 || stars === 4) {
//     price = 30
    
// } else if (stars === 5) {
//     price = 120;
    
// } else {
//     console.log('Такого кол-ва звезд нет');
// }

// console.log(price);

// ---------- Instruction Swich-----------------------

// const stars = 6;
// let price;

// switch (stars) {
//     case 1:
//     case 2:
//         price = 20;
//         break;
    
//     case 3:
//     case 4:
//         price = 30;
//         break;
    
//     case 5:
//         price = 120;
//         break;
    
//     default:
//         console.log('Такого кол-ва звезд нет');
// }

// console.log(price);


// 3) Напиши скрипт выбора опции доставки товара.
//  Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта

//  В переменную message записать сообщение в зависимости от опции.
//  - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
//  - 'Курьер доставит заказ завтра с 9:00 до 18:00'
//  - 'Посылка будет отправлена сегодня'
//  - 'Вам перезвонит менеджер'

// const option = 1;
// let message;

// switch (option) {
//     case 1:
//         message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе';
//         break;
    
//     case 2:
//         message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
//         break;
    
//     case 3:
//         message = 'Посылка будет отправлена сегодня';
//         break;
    
//     default:
//         message = 'Вам перезвонит менеджер';
// }

// console.log(message);


// ----------------------Цикл for---------------------------------------
// 4) Напиши скрипт который подсчитывает общую сумму зарплат работников.
//  * Кол-во работников хранится в перемнной employees.
//  * Зарплата каждого работника это случайное число от 500 до 5000
//  * Записать сумму в переменную totalSalary и вывести в консоль

// const employees = 5;
// const minSalary = 500;
// const maxSalary = 5000;

// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`Зарплата работника ${i}: ${salary}`);
//     totalSalary += salary;
// }

// console.log('Сумма зарплаты всех работников', totalSalary);


// 5) Напиши скрипт который подсчитывает сумму всех чётных чисел,
//  * которые входят диапазон чисел в переменных от min до max.
//  * Например, если min=0 и max=5, то диапазон 0-5,
// и в нём два чётных числа - 2 и 4, их сумма 6.

// const minNumber = 1;
// const maxNumber = 50;
// let total = 0;

// for (let i = minNumber; i <= maxNumber; i += 1) {
        
//     if (i % 2 !== 0) {
//         // console.log(i);
//         continue;
//     }
//     console.log('Четные числа', i);
//     total += i;
  
// }

// console.log('Сумма четных чисел', total);
