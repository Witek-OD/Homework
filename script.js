//#region Function
function arithmeticMean(inputArr) {
  let sum=0;

  let numCount=0;

  for (let currentItem of inputArr) {
    if(typeof(currentItem)=="number")
    {
      sum+=currentItem;
      numCount++;
    }
  }

  let average = sum / numCount;

  let resultArr=[sum,numCount,average];

  return resultArr;
}

//#endregion

let originalArr= ['Q', 27.4, 16, 's', 'r', 2, true];

alert(`Исходный массив : \n ${originalArr}`);

let result= arithmeticMean(originalArr);

alert(`Исходный массив содержит : \n ${result[1]} цифр \n общей суммой ${result[0]} \n среднее арифметическое составляет ${result[2]}`);
