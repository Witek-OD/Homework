let userNumber=prompt('Пожалуйста введите число');

var regExp = /^[0-9]+$/g;

if (regExp.test(userNumber)){
    let curenВegree;

    for (let i = 1; i <= 100; i++) {

        if(Math.pow(i, 2) <=userNumber) {
            console.log(i);
        }
    }

} else {
    alert("Введите ТОЛЬКО число");
}