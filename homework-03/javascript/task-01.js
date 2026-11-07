"use strict";
/**
 * З клавіатури вводяться імена двох дітей та кількість у них цукерок.
 * Вивести нa екран ім’я тієї дитини, у якої кількість цукерок є більшою,
 * або вивести, що кількість однакова.
 */
const nameFirstChild = prompt("Введіть ім'я першої дитини");
const amountCandyOfFirstChild = parseInt(prompt('Введіть кількість цукерок першої дитини'));
const nameSecondChild = prompt("Введіть ім'я другої дитини");
const amountCandyOfSecondChild = parseInt(prompt("Введіть кількість цукерок другої дитини"));
let result;
if (amountCandyOfFirstChild > amountCandyOfSecondChild) {
    result = "більше";
}
else if (amountCandyOfFirstChild < amountCandyOfSecondChild) {
    result = "менше";
}
else {
    result = "мають однакову кількість цукерок";
}
