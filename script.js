//#region Function
function removeElement(array, item) {
  let resultArr = array.filter((n) => {return n !== item});

  return resultArr;
}

//#endregion

const array = [1, 3, 4, 6, 2, 5, 7];

let result= removeElement(array,4);

console.log(result);
