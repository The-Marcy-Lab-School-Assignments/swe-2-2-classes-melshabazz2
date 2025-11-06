class Rectangle {
  constructor(length, width) {
    this.length = length
    this.width = width
  }
  getArea() {
    return this.length * this.width
  }
  getPerimeter() {
    return this.length + this.length + this.width + this.width
  }
  isSquare() {
    if (this.length === this.width) {
      return true
    } else {
      return false
    }
  }
}

class Vehicle {
  passengers = [];
  constructor(type, capacity, color) {
    this.type = type
    this.capacity = capacity
    color ? this.color = color : this.color = "black"
  }
  paint(color) {
    return this.color = color
  }
  addPassenger(passenger) {
    if (this.passengers.length === this.capacity) {
      return -1
    }
    this.passengers.push(passenger)
    return this.passengers.length
  }
}

class PasswordManager {
  #password
  constructor(password) {
    this.#password = password

  }
  checkPassword(attempt) {
    if (attempt === this.#password) {
      return true
    }
    return false
  }
  setPassword(oldPassword, newPasssword) {
    if (oldPassword === this.#password) {
      this.#password = newPasssword
      return true
    }
    return false
  }

}

class TodoList {
  #list = []
  constructor(title) {
    this.title = title
  }
  addItem(description) {
    this.#list.push(description)
    return this.#list.length
  }
  removeItem(description) {
    if (this.#list.includes(description)) {
      // .splice(index, 0 === add 1 === replace, "wasdwas")
      this.#list.splice(this.#list.indexOf(description), 1)
      return description
    }
    return null
  }
  getItems() {
    return [...this.#list]
  }

}

class BankAccount {
  #balance
  static #totalBalance = 0
  constructor(firstName, lastName, balance) {
    this.firstName = firstName
    this.lastName = lastName
    balance ? this.#balance = balance : this.#balance = 0
    BankAccount.#totalBalance += this.#balance
  }
  deposit(amount) {
    this.#balance += amount
    BankAccount.#totalBalance += amount
    return `Your balance is $${this.#balance.toFixed(2)}`
  }
  withdraw(amount) {
    if (amount > this.#balance) {
      return `You do not have enough funds.`
    }
    this.#balance -= amount
    BankAccount.#totalBalance -= amount
    return `Your balance is $${this.#balance.toFixed(2)}.`
  }
  static getTotalHoldings() {
    return BankAccount.#totalBalance
  }
  showBalance() {
    return `Your balance is $${this.#balance.toFixed(2)}`
  }

}

module.exports = {
  Rectangle,
  Vehicle,
  PasswordManager,
  TodoList,
  BankAccount,
};
