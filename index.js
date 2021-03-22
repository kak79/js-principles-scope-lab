// Write your solution in this file!

var customerName = "bob"

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase()
  print(customerName)
}

function setBestCustomer() {
  window.bestCustomer = "not bob"
}

function overwriteBestCustomer() {
  window.bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer = 'Bob Bartleby'
  leastFavoriteCustomer = 'definitely bob'
}



