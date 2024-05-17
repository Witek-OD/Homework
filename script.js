let userNumber=prompt('Пожалуйста введите число');

var regExp = /^[0-9]+$/g;

if (regExp.test(userNumber)){
    let isSimple=true;

    for (let i = 2; i < userNumber; i++) {
        if ((userNumber % i === 0)&&(userNumber!=i)){
            isSimple=false;
        }
    }

    if (isSimple) {
        alert(`Число ${userNumber} является простым`);

    } else {
        alert(`Число ${userNumber} не является простым`);
    }

} else {
    alert("Введите ТОЛЬКО число");
}