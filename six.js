/*6) Створіть пустий обєкт productDetail і декілька викликів prompt які заповнять інформацію про товар 
(Назва продукту, ціна продукта, колір, наявність знижки) тут робота на знайомство з синтаксисом обєктів */

let productDetail = {};

productDetail["productName"] = prompt("Enter the product name: ");
productDetail["productPrice"] = Number(prompt("Enter the product price: "));
productDetail["isDiscount"] = confirm("Does the product have discount?");

console.log("Result: ", productDetail);