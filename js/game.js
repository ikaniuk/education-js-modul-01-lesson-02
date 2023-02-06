const x = Math.round(Math.random() * (100  - 1) + 1);
console.log(x);
let input; 
let counter = 0;

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
    counter += 1;
    
} while (input !== x);

console.log(`Число попыток ${counter}`);




