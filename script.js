//#region Function
function letterDelete(originalString, whatDelete) {
  let charDeleteArr = whatDelete.toString().split('');

  for (let currentChar of charDeleteArr)
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
       let resultString= letterDelete(stringForDelete, stringDeleteLetters);

        alert(`Результат : \n ${resultString}`);
    } else {
          alert (`Строка для удаления должна содержать только буквы!`);
    }

  } else {
    alert (`Исходная строка должна содержать только буквы!`);
  }