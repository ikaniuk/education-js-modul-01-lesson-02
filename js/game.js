const x = Math.round(Math.random() * (100  - 1) + 1);
// console.log(x);
let input; 

do {
    input = Number(prompt('Отгадай Х от 1 до 100'));
    if (!input) {
        alert('Отменено пользователем!');
        break;
    } else if (input < x){
        alert(`Число Х > ${input}`);
    } else if (input > x) {
        alert(`Число Х < ${input}`);
    } else {
        alert(`Поздравляю Вы отгадали число! X = ${input}`);
    }
} while (input !== x);





