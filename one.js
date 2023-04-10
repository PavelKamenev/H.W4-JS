/* 1)Створити функцію яка отримує массив і вибирає з нього всі парні числа, після чого розміщує в новому масиві.
 Функція повина повертати массив з парними номерами. */


function arrFunc (arr) {
    let newArr = [];
    for(let i = 0; i <= arr.length; i++) {
        if(arr[i] % 2 === 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log("Result: ", arrFunc([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10]));