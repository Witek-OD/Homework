//#region Function
function letterDelete(originalString, whatDelete) {

  for (let currentChar of whatDelete)
  {
    originalString = originalString.replaceAll(currentChar, '');
  }

  return originalString;
}

function validateString(inputString){
  let regExp = /[^a-zA-Zа-яА-ЯёЁ .]/;
    
    if ( regExp.test(inputString) ){
        return false;
    } else {
        return true;
    }
}
//#endregion

let stringForDelete= prompt('Пожалуйста введите исходную строку');

  if(validateString(stringForDelete)){
    let stringDeleteLetters= prompt('Пожалуйста введите строку для удаления');

    if(validateString(stringDeleteLetters)){
      let charDeleteArr = stringDeleteLetters.toString().split('');

      let resultString= letterDelete(stringForDelete, charDeleteArr);

        alert(`Результат : \n ${resultString}`);
    } else {
          alert (`Строка для удаления должна содержать только буквы!`);
    }

  } else {
    alert (`Исходная строка должна содержать только буквы!`);
  }