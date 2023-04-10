/*7) Створити функцію яка задає в обєкт cordinat рандомні значення left i top. 
Максимальне значення лефт це 1000 максимальне значення top це 100 */

function MaxMinVal () {
  let cordinat = {};
  cordinat.left = Math.random() * 1000;
  cordinat.top = Math.random() * 100;
  return cordinat;
}

console.log("Result: ", MaxMinVal());
