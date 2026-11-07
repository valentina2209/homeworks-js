/**
 * З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.
 */

let numberDay = parseInt(prompt('Введіть номер дня тижня, від 1 до 7')!)
let resultDay

switch (numberDay) {
    case 1:
        resultDay = 'Понеділок'
        break;
    case 2:
        resultDay = 'Вівторок'
        break;
    case 3:
        resultDay = 'Середа'
        break;
    case 4:
        resultDay = 'Четвер'
        break;
    case 5:
        resultDay = "П'ятниця"
        break;
    case 6:
        resultDay = 'Субота'
        break;
    case 7:
        resultDay = 'Неділя'
        break;
    default:
        alert('Введіть коректне значення від 1 до 7')
        break;
}