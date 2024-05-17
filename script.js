let userNumber=prompt('Пожалуйста введите число');

var regExp = /^[0-9]+$/g;

if (regExp.test(userNumber)){
    if ((userNumber==0) || (userNumber==1)) {
        alert("Числа 0 и 1 не являются ни простыми, ни составными.");

    } else {
    let isSimple=true;

    for (let i = 2; i < userNumber; i++) {
        if ((userNumber % i === 0)&&(userNumber!=i)){
            isSimple=false;
        }
    }

    if (isSimple) {
        alert(`Число ${userNumber} является простым`);

    } else {
        alert(`Число ${userNumber} является составным`);
    }
    }

} else {
    alert("Введите ТОЛЬКО число");
}