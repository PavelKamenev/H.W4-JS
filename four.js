/*4) Створіть функцію з іменем congrat, яка отримує значення рік народження, а повертає вік користувача*/

function congrat(yearOfBirth) {
    let age = 2023 - yearOfBirth;
    return age;
}
console.log(`Result: You are ${congrat(1996)} years old!`);