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


        


