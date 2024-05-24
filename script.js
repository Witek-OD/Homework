//#region Function
function addition() {
  let curentValue = 0;

  return function(add) {
    return curentValue += add;
  }
}
//#endregion

let sum = addition();

console.log(sum(4));

console.log(sum(6));

console.log(sum(10));

console.log(sum(7));