class Bank {
  constructor(
    public account: number,
    public userName: string,
    public value: number
  ) {
    this.account = account;
    this.userName = userName;
    this.value = value;
  }

  deposit(value: number): void {
    this.value += value;
    console.log(`Depósito de R$${value} realizado com sucesso!`);
  }

  withdraw(value: number): void {
    if (value <= this.value) {
      this.value -= value;
      console.log(`Saque de R$${value} realizado com sucesso!`);
    } else {
      console.log("Saldo insuficiente!");
    }
  }

  showAmount(): number {
    console.log(`Saldo da conta: ${this.value}`);
    return this.value;
  }
}

let account1 = new Bank(1, "João", 1000);

let account2 = new Bank(2, "Maria", 1500);
account2.deposit(1000);
account2.withdraw(2000);
account2.showAmount();
