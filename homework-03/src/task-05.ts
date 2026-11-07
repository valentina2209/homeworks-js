/**
 * З клавіатури вводиться назва категорії водія 
 * (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). 
 * Вивести на екран назву транспортного засобу, яким він може керувати.
 */

const categoryCar = prompt('Введіть назву категорії автомобіля, латинськими літерами у верхньому регістрі')

const categoryA = 'A'
const categoryB = 'B'
const categoryC = 'C'
let category

switch (categoryCar) {
    case categoryA:
        category = 'Мотоцикл'
        break;
    case categoryB:
        category = 'Легковий автомобіль'
        break;
    case categoryC:
        category = 'Вантажний автомобіль'
        break;

    default: category = 'Введіть коректне значення'
}