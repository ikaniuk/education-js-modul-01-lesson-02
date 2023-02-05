// ----------Task-01
// Задание:
// Используя if...else создайте сценарий, который запросит у пользователя значение и
// выведет на экран
// 1 если значение больше нуля
// -1 если значение меньше нуля
// 0 если значение равно 0

// const userInput = prompt('Введите значение');

// if (userInput > 0) {
//     console.log(1);
// } else if (userInput < 0){
//     console.log(-1);
// } else {
//     console.log(0);
// }


// // --------------Task-02

// //   Задание:
// // оработайте сценарий.Если пользователь ввел значение равное 0 или не числовое
// // начение для высоты и радиуса цилиндра - сообщите об ошибке.
// // eсли введенные значения корректные - рассчитайте объем цилиндра.
// // eсли конвертация строкового значения в целочисленное прошла не успешно,
// // о результат конвертации NaN.Для проверок значения в условии на равенство c NaN
// // ужно использовть функцию isNaN(value), которая вернет true
// // сли значение value не является числом.Такая проверка - value == NaN, не сработает.
    
// alert("Вычисление объема цилиндра.");
//         //  V=π * r в квадрате * h

// const Pi = 3.1415926535;
// const r = Number(prompt("Введите радиус цилиндра"));
// const h = Number(prompt("Введите высоту цилиндра"));
// let V;
// let isValueValid = true;

// if (r === 0 || isNaN(r)) {
//     alert('Ошибка, не правильное значение для радиуса');
//     isValueValid = false;
// }

// if (h === 0 || isNaN(h)) {
//     alert('Ошибка, не правильное значение для высоты');
//     isValueValid = false;
// }

// if (isValueValid) {
//     V = Pi * r * r * h;
//     alert(`Объем цилиндра с высотой ${h} и радиусом ${r} = ${V}`);
// } else {
//     alert("Невозможно вычислить объем цилиндра.");
// }


// // -----------Task-03
// //    Задание:
// //     Доработайте сценарий.Перед выводом общей стоимости заказа узнайте у пользователя,
// //     будет ли он заказывать доставку.
// //     Если да, добавьте к стоимости заказа 40.
    
    
//         let product1 = "Бумага офисная А4, 80 г/м2, 500 л";
//         let product2 = "Биндеры для бумаги 51 мм";
//         let product3 = "Ручка шариковая синяя";

//         let productPrice1 = 280.25;
//         let productPrice2 = 56;
//         let productPrice3 = 12.50;

//         let productQuantity1 = prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`, 0);
//         let productQuantity2 = prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`, 0);
//         let productQuantity3 = prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`, 0);

//         // Выведите на экран сколько пользователю нужно заплатить за каждый продукт по отдельности и всего за все продукты
//         // используйте форматированный вывод
//         let totalPriceProduct1 = productPrice1 * productQuantity1;
//         let totalPriceProduct2 = productPrice2 * productQuantity2;
//         let totalPriceProduct3 = productPrice3 * productQuantity3;

//         let total = totalPriceProduct1 + totalPriceProduct2 + totalPriceProduct3;
//         console.log(`Общая сумма по продукту '${product1}' составляет ${totalPriceProduct1}`);
//         console.log(`Общая сумма по продукту '${product2}' составляет ${totalPriceProduct2}`);
//         console.log(`Общая сумма по продукту '${product3}' составляет ${totalPriceProduct3}`);
// const isAgree = confirm('Хотите оформить доставку?');
// if (isAgree) {
//     total += 40;
//     console.log("Всего с доставкой " + total);
// } else {
//     console.log("Всего " + total);
// }

        
// // --------Task-04
// // Задание:
// // Доработайте сценарий.Если пользователь заказывает товаров больше,
// // чем есть на складе - сообщите ему об этом.Если пользователь заказывает
// // количество товаров, не превышающее количество на складе -
// // рассчитайте общую стоимость заказа.

// const productPrice = 101.5; // цена товара
// let productQuantity = 50;  // количество единиц товара на складе
// const count = Number(prompt('Введите кольчество товара'));

// if (count > productQuantity) {
//     alert('Недостаточно товара на складе!');
// } else {
//     productQuantity -= count;
//     const totalPrice = count * productPrice;
//     alert('Стоимость заказа ' + totalPrice);
//     alert('Остаток товара на складе ' + productQuantity );
// }


// ----------------switch--------------------
// ----------Task-01-------------------
//  Задание:
// Поменяйте if...else на switch
    
// let value = +prompt("Введите число 1 или 2");
// if(value == 1){
//     alert("Вы ввели число 1");
// }else if(value == 2){
//     alert("Вы ввели число 2");
// }else{
//     alert("Вы ввели неправильное значение");
// }
    
// const value = Number(prompt('Введите число 1 или 2'));

// switch (value) {
//     case 1:
//         alert('Вы ввели число 1');
//         break;
//     case 2:
//         alert('Вы ввели число 2');
//         break;
//     default:
//         alert('Вы ввели неправильное значение');
// }
    

// --------------------------Task-02------------------
// Задание:
// Переменная season может принимать 4 значения: 1, 2, 3 или 4. Если значение
// переменной 1 в переменную result запишите значение "зима",
// если значение 2 - "весна" и т.д.Выведите значение переменной result на экран.
// Решите задачу используя конструкцию switch.

// const season = 1;
// let result;

// switch (season) {
//     case 1:
//         result = 'зима';
//         console.log(result);
//         break;
//     case 2:
//         result = 'весна';
//         console.log(result);
//         break;
//     case 3:
//         result = 'лето';
//         console.log(result);
//         break;
//     case 4:
//         result = 'осень';
//         console.log(result);
//         break;
//     default:
//         console.log('Выберите другое значение');
// }


// ---------------Task-03---------------------------
// Задание:
// Поменяйте switch на if...else. Поведение сценария, после изменений,
// должно остаться прежним(обратите внимание на значения USA и Great Britain).
        
// let country = prompt("введите название страны");

//         switch (country)
//         {
//             case "USA":
//             case "Great Britain":
//                 alert("Английский язык");
//                 break;
//             case "Germany":
//                 alert("Немецкий язык");
//                 break;
//             case "France":
//                 alert("Французский язык");
//                 break;

//             default:
//                 alert("Указанной страны нет в списке");
//                 break;

//         }

// const country = prompt('введите название страны');

// if (country === 'USA' || country === 'Great Britain') {
//     alert('Английский язык');
// } else if (country === 'Germany') {
//     alert('Немецкий язык');
// } else if (country === 'Fance') {
//     alert('Французский язык');
// } else {
//     alert('Указанной страны нет в списке');
// }
    

// -------------Task-04----------------------
// Задание:
// Доработайте сценарий. Добавьте расчет скидки.
// Если заказ от 500, скидка 5%, если заказ от 1000 скидка 10%, если заказ от 1500
// скидка 15 % и доставка бесплатная.
// Выведите пользователю стоимость заказа с учётом скидки и сумму скидки, которую он получил.
// Также информацию о стоимости доставки, если она была заказана.
// Используйте подходящую условную конструкцию.
// let product1 = "Бумага офисная А4, 80 г/м2, 500 л";
// let product2 = "Биндеры для бумаги 51 мм";
// let product3 = "Ручка шариковая синяя";

// let productPrice1 = 280.25;
// let productPrice2 = 56;
// let productPrice3 = 12.50;

// let productQuantity1 = prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`, 0);
// let productQuantity2 = prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`, 0);
// let productQuantity3 = prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`, 0);

// let totalPriceProduct1 = productPrice1 * productQuantity1;
// let totalPriceProduct2 = productPrice2 * productQuantity2;
// let totalPriceProduct3 = productPrice3 * productQuantity3;

// let total = totalPriceProduct1 + totalPriceProduct2 + totalPriceProduct3;
// console.log(`Общая сумма по продукту '${product1}' составляет ${totalPriceProduct1}`);
// console.log(`Общая сумма по продукту '${product2}' составляет ${totalPriceProduct2}`);
// console.log(`Общая сумма по продукту '${product3}' составляет ${totalPriceProduct3}`);

// console.log("Ваш заказ = " + total);

// let discount = 0;

// if (total >= 500 && total < 1000) {
//     console.log('Скидка 5%')
//     discount = total * 0.05;
//     total -= discount;
    
//     console.log(`Cтоимость заказа с учётом скидки ${total}, сумму скидки, которую вы получил ${discount}`);
     
//     let shipping = confirm("Заказываете доставку курьером?");
//     if (shipping) {
//         total += 40;
//         console.log("Доставка 40");
//     }

//     console.log("Всего " + total);
// } else if (total >= 1000 && total < 1499) {
//     console.log('Скидка 10%')
//     discount = total * 0.1;
//     total -= discount;
//     console.log(`Cтоимость заказа с учётом скидки ${total}, сумму скидки, которую вы получил ${discount}`);
//     let shipping = confirm("Заказываете доставку курьером?");
//     if (shipping) {
//         total += 40;
//         console.log("Доставка 40");
//     }

//     console.log("Всего " + total);
// } else {
//     console.log('Скидка 15%')
//     discount = total * 0.15;
//     total -= discount;
//     console.log(`Cтоимость заказа с учётом скидки ${total}, сумму скидки, которую вы получил ${discount}`);
//     console.log('Доставка курьером бесплатная!');
// }


// ----------------Task-05-----------------------

// Задание:
//         Замените условные конструкции на тернарный оператор, где это возможно.
//         let age = +prompt("Введите ваш возраст");
//         let technology = prompt("Ведите 1 или 2. 1 - JavaScript. 2 - C#");
//         let expirience = prompt("Введите опыт работы в годах.");

//         let adult, specialization, position;

//         // if (age > 18)
//         // {
//         //     adult = "совершеннолетний";
//         // }
//         // else
//         // {
//         //     adult = "несовершеннолетний"
//         // }
// adult = age >= 18 ? 'совершеннолетний' : 'несовершеннолетний';

//         // if (technology == 1)
//         // {
//         //     specialization = "Frontend";
//         // }
//         // else
//         // {
//         //     specialization = "Backend";
//         // }
// specialization = technology === 1 ? 'Frontend' : 'Backend';

//         if (expirience == 0)
//         {
//             position = "Без опыта работы";
//         }
//         else if (expirience > 0 && expirience <= 1.5)
//         {
//             position = "Junior";
//         }
//         else if (expirience > 1.5 && expirience <= 3)
//         {
//             position = "Middle";
//         }
//         else if(expirience > 3)
//         {
//             position = "Senior";
//         }
//         else
//         {
//             position = "error";
//         }

//         let result = `Возраст: ${adult}\r\nСпециализация: ${specialization}\r\nПозиция: ${position}`;
//         alert(result);