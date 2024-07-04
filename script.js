class Calculator {

  add(x,y){
    return x+y;
  }

  subtract(x,y){
    return x-y;
}

  multiply(x,y){
    return x*y;
  }

  divide(x,y){
    return y!==0 ? x / y : 'Ошибка , деление на ноль!'

}

}

const calc = new Calculator();

console.log(calc.add(5, 3));

console.log(calc.subtract(10, 4));

console.log(calc.multiply(3, 6));

console.log(calc.divide(8, 2));