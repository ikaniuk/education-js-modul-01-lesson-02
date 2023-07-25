// ----------------------------Задание 1------------------------
// Oбъяви две переменные хранящие название и цену товара: name и price
// Присвой переменным следующие характеристики товара (сразу при объявлении)
// название: Генератор защитного поля
// цена: 1000
// Используя шаблонную строку выведи в консоль информацию о товаре,
// получится: 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'.
// Присвой товару новую цену - 2000
// Используя шаблонную строку выведи в консоль информацию о товаре,
// получится: 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'.

// const productName = 'Генератор защитного поля';
// const price = 1000;

// console.log(`Выбран ${productName}, цена за штуку ${price} кредитов`);


// -------------------------Задание 2-------------------------
// Напиши скрипт проверки количества товаров на складе.
// Есть переменные total(количество товаров на складе) и ordered(единиц товара в заказе).

// Сравни эти значения и по результатам выведи:

// Если в заказе указано число, превышающее количество товаров на складе,
// то выведи сообщение "На складе недостаточно твоаров!".
// В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
// Проверь работоспособность кода с разными значениями переменной ordered,
// например 20, 80 и 130.

// const total = 100;
// const order = 280;

// // if (order > total) {
// //     console.log('На складе недостаточно твоаров!');
// // } else {
// //     console.log('Заказ оформлен, с вами свяжется менеджер');
// // }

// console.log(order > total ? 'На складе недостаточно твоаров!' : 'Заказ оформлен, с вами свяжется менеджер');


// -------------------------Задание 3-------------------------
// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате.
// При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением
// константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось,
// записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

// const userInput = prompt('Введите пароль');

// if (userInput === null) {
//     message = 'Отменено пользователем!';
// } else if (userInput === ADMIN_PASSWORD) {
//     message = 'Добро пожаловать!';
// } else {
//     message = 'Доступ запрещен, неверный пароль!';
// }

// alert(message);


// -------------------------Задание 4-------------------------
// На счету пользователя есть 23580 кредитов, значение хранится в переменной credits
// (создай и присвой).Пользователь решает купить ремонтных дроидов, которые стоят
// по 3000 кредитов за штуку.Цена одного дроида хранится в
// переменной pricePerDroid(создай и присвой).

// При посещении страницы, используя prompt, необходимо спросить количество дроидов
// которые пользователь хочет купить и сохранить в переменную.

// Напиши скрипт который:

// Если в prompt была нажата кнопка Cancel, выводит в консоль
// сообщение 'Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету,
// выводи в консоль сообщение 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на
// счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

// let credits = 23580;
// const pricePerDroid = 3000;
// let totalPrice;
// const quantityOfDroid = prompt('Какое количество дроидов?', 0);

// if (quantityOfDroid === null) {
//     console.log('Отменено пользователем!');
// } else {
//     totalPrice = quantityOfDroid * pricePerDroid;
//     if (totalPrice > credits) {
//         console.log('Недостаточно средств на счету!');
//     } else {
//         credits -= totalPrice;
//         console.log(`Вы купили ${quantityOfDroid} дроидов, на счету осталось ${credits} кредитов.`);
//     }
// }


// -------------------------Задание 5-------------------------
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении
// страницы в prompt.Учти, пользователь может ввести имя страны не только буквами
// нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
// Обязательно используй switch.Формат
// сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то
// выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

