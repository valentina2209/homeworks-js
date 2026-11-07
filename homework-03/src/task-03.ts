/**
 * Випадковим чином генерується число від 1 до 5. 
 * Спробуйте вгадати число за 2 спроби.
 */

const minNumber = 1;
const maxNumber = 5;

const randomNumber = minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1)!);
let userNumber = parseInt(prompt("Будь ласка, введіть число від 1 до 5:", "1")!);

if (userNumber === randomNumber) {
    alert(`Вітаю! Ви вгадали число: ${randomNumber}`);
} else {
    userNumber = parseInt(prompt("На жаль ви не вгадали число. Спробуйте ще число від 1 до 5:", "1")!);
    if (userNumber === randomNumber) {
        alert(`Вітаю! Ви вгадали випадкове число: ${randomNumber}`);
    } else {
        alert(`На жаль, ви не вгадали 2 рази. Випадкове число було: ${randomNumber}`)
    }
}