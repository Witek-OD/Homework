//#region Function

function validateString(inputString){
  let regExp = /^[0-9]+$/g;

  return regExp.test(inputString);
}

function checkValue() {
  let curentValue = 0;

  return function(lastValue) {
    return curentValue = lastValue;
  }

}

//#endregion

let checkingValue = checkValue();

let i=0;

do {
  let inputValue= +prompt('Пожалуйста введите число больше 100');

  if (! validateString(inputValue) ){
    alert('Пожалуйста в следующий раз введите цифры!');

  } else if ( (inputValue < 100) && (i != 9)) {
    checkingValue(inputValue);

    i++;
  } else {
    console.log( checkingValue(inputValue) );

    break;
  }
} while (i<10);




