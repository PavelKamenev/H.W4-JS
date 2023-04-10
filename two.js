/* 2) Створити функцію яка 3 рази виводить prompt  запитує що купити і вводить отримані данні в массив. Після цього повертає массив */

function whatToBuy () {
    let list = [];

    for(let i = 0; i < 3; i++){
        let item = prompt("What to buy : ");
        list.push(item);
    }
    return list;
}
console.log("Result: ", whatToBuy());