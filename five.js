
/*5) Створіть функцію яка отримує массив цифрових значень (різні роки) 
і колбек функцію яку ви створили congrat. 
Поверніть новий массив зі значенням "Вік користувача і розрахунок з колбек функції" */

function userAges(years, congrat) {
    let calcAges = [];
    for (let i = 0; i < years.length; i++) {
        let userAge = congrat(years[i]);
        calcAges.push(userAge);
    }
    return calcAges;
}

console.log("Result: ", userAges([1996, 1997, 1998], congrat));