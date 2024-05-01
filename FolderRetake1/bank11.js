class BankAccount {
  constructor(accountNumber) {
    this.accountNumber = accountNumber;
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.recordTransaction("deposit", amount);
      return this.balance;
    }else{
        return "Filled in incorrect";
    }
    return null;
  }

  withdraw(amount) {
    if (amount > 0 && this.balance >= amount) {
      this.balance = balance-amount;
      this.recordTransaction("withdrawal", amount);
      return this.balance;
    }else{
        return "Filled in incorrect";
    }
    return null;
  }
  getBalance() {
    return this.balance;
  }

  getAccountNumber() {
    return this.accountNumber;
  }

  getTransactions() {
    return this.transactions;
  }

  getTransaction(id) {
    return this.transactions.find((tx) => tx.id === id) || null;
  }

  recordTransaction(type, amount) {
    const newTransaction = {
      id: this.transactions.length + 1,
      type: type,
      amount: amount,
      timestamp: new Date(),
    };
    this.transactions.push(newTransaction);
  }

  transferFunds(targetAccount, amount) {
    if (!targetAccount || typeof targetAccount.deposit !== "function") {
      return false;
    }

    if (this.balance >= amount) {
      this.withdraw(amount);
      targetAccount.deposit(amount);
      return true;
    }

    return false; 
  }
}

const MyAccount = new BankAccount("12345");
console.log(MyAccount.withdraw(100));
console.log(MyAccount.deposit(50));
console.log(MyAccount.getBalance()); 
console.log(MyAccount.getTransactions());
