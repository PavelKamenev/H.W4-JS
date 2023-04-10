/* 3) Напишіть функцію яка отримує як аргумент довільний  массив цифр і повертає сумму всіх значень массиву */


function sumValues (...arrVal) {
    let sum = 0;
    for(let i = 0; i < arrVal.length; i++) {
        sum += arrVal[i]
    }
    return sum;
}
console.log("Result: ", sumValues(1, 2, 3, 4, 5, 6));