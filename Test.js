class Customer{
    name="";
    address="";
    phone="";
    email="";
    account=[];
    constructor(name,address,phone,email){
        this.name=name;
        this.address=address;
        this.phone=phone;
        this.email=email;
    }
verify(name,address,phone,email){
    if(!this.name === name && this.address === address && 
        this.phone === phone && this.email === email){
        return true;
    }else{
        return false;
    }
}
getAccount(){
    return this.accounts;
}
createAccount(bank, accountType){
    return bank.createAccount(accountType)
}
}


class Account{
    accountNumber="";
    balance=0;
    constructor(accountNumber,balance){
        this.accountNumber=accountNumber;
        this.balance=balance
    }
deposit(amount){
    return this.deposit;
}
withdraw(amount){
    return this.withdraw;
}
createTransction(){
    return this.createTransction;
}
getTransction(){
    return this.getTransction;
}
getBalance(){
    return this.getBalance;
}
getAccountType(){
    return this.getAccountType;
}
getCustomer(){
    return this.getCustomer
}
setCustomer(customer){
    this.setCustomer =customer;
}
}
class Bank {
    name="";
    address="";
    code="";
    constructor(name,address,code){
        this.name=name;
        this.address=address;
        this.code=code;
    }
manage(){
     this.manage = manage;
}
maintain(){
    this.maintain = maintain;
}
verify(){
    return boolean ;
}
openAccount(){
    return this.openAccount;
}
closeAccount(){
    return this.closeAccount
}
createTransction(){
    return this.createTransction;
}
creareCustomer(name, address, phone, email){
    const customer = Customer("Tan","NakhonPathom","00011111","qaz1234@gmail.com")
    return customer
}
createATM(){
    const atm = new ATM("BankNPRU","SE_bank")
    return atm;
}
createAccount(accountType){
    let account;
    if (accountType === "currentAccount"){
        account = new CurrentAccount("654259",10000, 2000, 0.2)
        return account
    }else{
        account = new SavingsAccont("654259",10000, 0.2)
        return account
    }
    
}
}


class CurrentAccount {
    overdratLimit =0;
    overdraftlnterest =0;
    constructor(overdratLimit, overdraftlnterest){
        this.overdratLimit = overdratLimit;
        this.overdraftlnterest = overdraftlnterest;
    }
calculatelnterest(){

}
getOverdraftLimit(){

}
setOverdratLimit(amount){
 this.overdratLimit = amount;
}
}

class SavingsAccont{
    interestRate = 0;
    constructor(interestRate){
        this.interestRate=interestRate;
    }
calculatelnterest(){

}
getInterestRate(){

}
setInterestRate(rate){
    this.rate =rate;
}
}

class Transaction {
    transactionId="";
    transactionType="";
    amount=0;
    transactionDate = date;
    constructor(transactionId,transactionType,amount,transactionDate){
        this.transactionId = transactionId;
        this.transactionType=transactionType;
        this.amount=amount;
        this.transactionDate=transactionDate;
    }
getTransaction(){

}
getTransactionType(){

}
getAmount(){

}
getTransactionDate(){
    
}
getStatus(){
    
}
setStatus(){
    
}
setTransactionType(){

}
setAmount(){
    
}
setTransactionDate(){

}
}

class ATM {
    location = "";
    mangedBy ="";
    constructor(location, mangedBy){
        this.location =location;
        this.mangedBy =mangedBy;
    }
identify(){

}
checkBalance(){

}
withdraw(){
    
}
deposit(){

}
changePin(){

}
transfer(){

}
verify(){

}
}