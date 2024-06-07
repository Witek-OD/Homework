const testArr = [1, 2, 3, 3, 7, 9 , 1, 21 ,14 ,9];

let resultArr=testArr.filter((currentValue, index, arr) => arr.indexOf(currentValue) !== index);

console.log(resultArr.toString());