"use strict";
/**
 * З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься
 */
let numberMonth = prompt('Введіть номер місяця, від 1 до 12');
let season;
switch (numberMonth) {
    case '12':
    case '1':
    case '2':
        season = 'Зима';
        break;
    case '3':
    case '4':
    case '5':
        season = 'Весна';
        break;
    case '6':
    case '7':
    case '8':
        season = "Літо";
        break;
    case '9':
    case '10':
    case '11':
        season = 'Осінь';
        break;
    default:
        alert('Введіть коректне значення від 1 до 12');
        break;
}
