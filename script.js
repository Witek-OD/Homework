let btnGo=document.getElementById('go');

let btnGet =document.getElementById('getLink');

btnGo.setAttribute('disabled', '');

let inputLink;

function getLink(){
  inputLink = prompt("Введите адрес страници" ,'https://www.google.com/');
  if (inputLink!==''){
    btnGo.removeAttribute('disabled');

    btnGo.addEventListener('click', function (event){
      window.location.href = inputLink;
      }
    )
  }
}

btnGet.addEventListener('click',getLink);



