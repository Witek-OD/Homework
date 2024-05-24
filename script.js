//#region Function
function addition() {
  let curentValue = 0;

  return function(add) {
    return curentValue += add;
  }
}
//#endregion

let sum = addition();

console.log(sum(4));  // 0

console.log(sum(6));  // 1

console.log(sum(10));  // 2

console.log(sum(7));  // 2