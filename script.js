function createTable (colsStart ,colsEnd  , rowsStart , rowsEnd ) {

  if(checkData(colsStart ,colsEnd  , rowsStart , rowsEnd )){

    let forTable = document.getElementById('forTable');

    forTable.innerHTML=''; // очистка на случай повторного вызова функции

    let tb = document.createElement('table');

    for (let i = rowsStart; i<rowsEnd; i++) {
      let row = document.createElement('tr')

      for (let j = colsStart; j<colsEnd; j++) {
        let cell = document.createElement((i==0 || j==0)? 'th' : 'td')

        if(i==0){
          cell.textContent = j;
        } else if (j==0){
          cell.textContent = i;
        } else {
          cell.textContent = i*j;
        }

        row.append(cell);
      }

      tb.append(row);
    }

    forTable.append(tb);

  }

}

function checkData (colsStart ,colsEnd  , rowsStart , rowsEnd ) {

  if ( ( colsEnd <1) || ( rowsEnd <1) ){

    alert('Размер таблици должен быть положительным числом!');
    return false;
  }

  if ( (colsEnd >10) || ( rowsEnd >10) || (rowsStart>10) || (colsStart)>10){
    alert('Размер таблици умножения должен быть меньше 10!');
    return false;
  }

  if (( rowsStart >= rowsEnd ) || (colsStart >= colsEnd)){

    alert('Номер начального элемента таблицы должен быть меньше номера конечного элемента !');
    return false;
  }

  return true;
}

createTable(0,10,0,10);
