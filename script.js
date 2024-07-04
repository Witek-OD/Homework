class BankAccount {
  #account;

  constructor(initialAmount) {
    this.#account = initialAmount;
  }

  deposit(inMoney){
    if(inMoney>0){
      this.#account+=inMoney;
    }
  }

  withdraw(outMoney){
    if(outMoney>0){
      this.#account-=outMoney;
    }
  }

  getBalance(){
    return this.#account;
  }

}

const account1 = new BankAccount(1000);

console.log(account1.getBalance());

account1.deposit(500);

console.log(account1.getBalance());

account1.withdraw(200);

console.log(account1.getBalance());

