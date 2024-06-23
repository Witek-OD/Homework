function showHelpForm(){
  let forForm =document.getElementById('forForm');

  forForm.innerHTML=''; // очистка на случай повторного вызова

  let form=document.createElement('div');

  form.setAttribute('class','form');

  let formPanel=document.createElement('div');

  formPanel.setAttribute('class','form-panel');

  //#region FormHeader

  let formHeader=document.createElement('div');

  formHeader.setAttribute('class','form-header');

  let h1=document.createElement('h1');

  h1.innerText='We would like to help you';

  formHeader.append(h1);

  //#endregion

  let formContent=document.createElement('div');

  formContent.setAttribute('class','form-content');

  let formInput= document.createElement('form');

  //#region Name
  let formInName =document.createElement('div');

  formInName.setAttribute('class','form-group');

  let inName=document.createElement('input');

  inName.setAttribute('type','text');

  inName.setAttribute('id','username');

  inName.setAttribute('placeholder','Name');

  inName.setAttribute('class','input-item');

 // inName.setAttribute('required','required'); //Name - обовьязкове текстове поле .

  formInName.append(inName);

  formInput.append(formInName);

  //formContent.append(formInput);

  //#endregion

  //#region NameError

  let formErrName =document.createElement('div');

  formErrName.setAttribute('id','errNameText');

  formErrName.setAttribute('class','errHidden');// Изначально поле отображения ощибки скрыто

  let errName=document.createElement('label');

  errName.setAttribute('class','errText');

  errName.innerText='Поле Name не должно быть пустым';

  formErrName.append(errName);

  formInput.append(formErrName);

  //#endregion

  //#region Message
  let formInMessage=document.createElement('div');


  formInMessage.setAttribute('class','form-group');

  let inMessage=document.createElement('textarea');

  inMessage.setAttribute('name','message');

  inMessage.setAttribute('id','message');

  inMessage.setAttribute('placeholder','Message');

  inMessage.setAttribute('rows','5');

  inMessage.setAttribute('cols','33');

  inMessage.setAttribute('class','input-item');

 // inMessage.setAttribute('minlength','5'); //Message - текстове поле не меньше 5 символів

  // Изменение размера не запрещено так же как и в скрине задания

  formInMessage.append(inMessage);

  formInput.append(formInMessage);

  //endregion

  //#region MessageError

  let formErrMessage =document.createElement('div');

  formErrMessage.setAttribute('id','errMessageText');

  formErrMessage.setAttribute('class','errHidden'); // Изначально поле отображения ощибки скрыто

  let errMessage=document.createElement('label');

  errMessage.setAttribute('class','errText');

  errMessage.innerText='Поле Message должно содержать более 5 символов';

  formErrMessage.append(errMessage);

  formInput.append(formErrMessage);

  //#endregion

  //#region Label

  let formInLabel=document.createElement('div');

  formInLabel.setAttribute('class','form-group');

  let inLabel=document.createElement('label');

  inLabel.innerText='HOW TO ANSWER TO YOU ?';

  formInLabel.append(inLabel);

  formInput.append(formInLabel);


  //#endregion

  //#region Phone

  let formInPhone=document.createElement('div');

  formInPhone.setAttribute('class','form-group');

  let inPhone=document.createElement('input');

  inPhone.setAttribute('type','phone'); // типу phone

  inPhone.setAttribute('name','phone number');

  inPhone.setAttribute('id','phone');

  inPhone.setAttribute('placeholder','Phone number');

  inPhone.setAttribute('class','input-item');

 // inPhone.setAttribute('pattern','^\\+380\\d{9}'); // З початком на +380

 // inPhone.setAttribute('required','required'); // Phone number - обовьязкове поле

  formInPhone.append(inPhone);

  formInput.append(formInPhone);

  //#endregion

  //#region PhoneError

  let formErrPhone =document.createElement('div');

  formErrPhone.setAttribute('id','errPhoneText');

  formErrPhone.setAttribute('class','errHidden'); // Изначально поле отображения ощибки скрыто

  let errPhone=document.createElement('label');

  errPhone.setAttribute('class','errText');

  errPhone.innerText='Поле Phone должно содержать номер в формате +380*********';

  formErrPhone.append(errPhone);

  formInput.append(formErrPhone);

  //#endregion

  //#region Email

  let formInEmail =document.createElement('div');


  formInEmail.setAttribute('class','form-group');

  let inEmail=document.createElement('input');

  inEmail.setAttribute('id','email');

  inEmail.setAttribute('type','text');

  inEmail.setAttribute('placeholder','Email');

  inEmail.setAttribute('class','input-item');

  //inEmail.setAttribute('required','required'); //Name - обовьязкове текстове поле .

  //inEmail.setAttribute('pattern','[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');

  formInEmail.append(inEmail);

  formInput.append(formInEmail);

  //#endregion

  //#region EmailError

  let formErrEmail =document.createElement('div');

  formErrEmail.setAttribute('id','errEmailText');

  formErrEmail.setAttribute('class','errHidden'); // Изначально поле отображения ощибки скрыто

  let errEmail=document.createElement('label');

  errEmail.setAttribute('class','errText');

  errEmail.innerText='Поле Email должно содержать адрес с "@" и "."';

  formErrEmail.append(errEmail);

  formInput.append(formErrEmail);

  //#endregion

  //#region Button

  let formBtnSend =document.createElement('div');

  formBtnSend.setAttribute('class','form-group');

  let btnSend=document.createElement('button');

  btnSend.setAttribute('type','submit');

  btnSend.setAttribute('class','input-item');

  btnSend.innerText='Send message';

  formBtnSend.append(btnSend);

  formInput.append(formBtnSend);
  //endregion

  formContent.append(formInput);

  formPanel.append(formHeader);

  formPanel.append(formContent);

  forForm.append(formPanel);

}

//#region CustomChecking
function chekName() {
  let erNameForm =document.getElementById('errNameText');

  if (chekString(username.value,'[^\\s]')) {

    erNameForm.setAttribute('class','errHidden');

    // если нет ошибки , скрываем поле (если оно отображалось ранее)

    errInput=errInput.filter((item) => item !== 'Name');

  } else {
    erNameForm.setAttribute('class','form-group');

    if(!errInput.includes('Name') ){
      errInput.push('Name');
    }
  }
}

function chekMessage() {
  let erMessageForm =document.getElementById('errMessageText');

  if (chekString(message.value,'^\\w{5,}$')) {

    erMessageForm.setAttribute('class','errHidden');

    errInput=errInput.filter((item) => item !== 'Message');

  } else {
    erMessageForm.setAttribute('class','form-group');

    if(!errInput.includes('Message')) {
      errInput.push('Message');
    }
  }
}

function chekPhone() {
  let erPhoneForm=document.getElementById('errPhoneText');

  if (chekString(phone.value,'^\\+380\\d{9}$')) {

    erPhoneForm.setAttribute('class','errHidden');

    errInput=errInput.filter((item) => item !== 'Phone');

  } else {
    erPhoneForm.setAttribute('class','form-group');

    if(!errInput.includes('Phone')) {
      errInput.push('Phone');
    }
  }
}

function chekEmail() {
  let erEmailForm=document.getElementById('errEmailText');

  if (chekString(email.value,'[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')) {

    erEmailForm.setAttribute('class','errHidden');

    errInput=errInput.filter((item) => item !== 'Email');

  } else {
    erEmailForm.setAttribute('class','form-group');

    if(!errInput.includes('Email')) {
      errInput.push('Email');
    }
  }
}

function chekString(inString,regExp) {
  return inString.match(regExp);
}

//#endregion

let errInput=[];

showHelpForm();

let form=document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();

  if(errInput.length > 0) {
    alert(`Введите корректные данные в поля : \n${errInput.toString()}`);
  } else {

    const url = 'https://example.com/api/submit';

    const formData = new FormData();

    formData.append('username', username.value);

    formData.append('message', message.value);

    formData.append('phone', phone.value);

    formData.append('email', email.value);

    fetch(url, {
      method: 'POST',
      body: formData,
    })
    .then(response => response.text())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Помилка: ' + error);
    });

    console.log(`Username: ${username.value}`);

    console.log(`Message: ${message.value}`);

    console.log(`Phone: ${phone.value}`);

    console.log(`Email: ${email.value}`);
  }
})

let username= document.getElementById('username');

let message=document.getElementById('message');

let phone = document.getElementById('phone');

let email= document.getElementById('email');

username.addEventListener('input',chekName);

message.addEventListener('input',chekMessage);

phone.addEventListener('input',chekPhone);

email.addEventListener('input',chekEmail);