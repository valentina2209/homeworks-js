"use strict";
/**
 * З клавіатури вводиться вік людини. Вивести на екран ким він є
 * (дитиною у садочку, школярем, студентом, працівником, пенсіонером).
 */
const humanYears = parseInt(prompt("Введіть вік людини"));
let results;
if (humanYears >= 3 && humanYears <= 6) {
    results = "Дитина у садочку";
}
else if (humanYears >= 7 && humanYears <= 17) {
    results = "Школяр";
}
else if (humanYears >= 18 && humanYears <= 22) {
    results = "Студент";
}
else if (humanYears >= 23 && humanYears <= 59) {
    results = "Працівник";
}
else if (humanYears >= 60) {
    results = "Пенсіонер";
}
else {
    results = "Вік не визначено";
}
