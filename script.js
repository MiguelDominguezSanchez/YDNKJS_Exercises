// up & going – ch1
// exercise
/*
const SPENDING_THRESHOLD = 200
const TAX_RATE = 0.08
const PHONE_PRICE = 99.9
const ACCESSORY_PRICE = 9.99

var bank_balance = 3303.91
var amount = 0

function calculateTax(amount) {
	return amount * TAX_RATE
}
function formatAmount(amount) {
	return '$' + amount.toFixed(2)
}

// keep buying phones while you  still have money in
while (amount < bank_balance) {
	// buy a new phone!
	amount = amount + PHONE_PRICE

	// can we afford the accessory?
	if (amount < SPENDING_THRESHOLD) {
		amount = amount + ACCESSORY_PRICE
	}
}

// don't forget  to pay the government, too
amount = amount + calculateTax(amount)

console.log('Your purchase: ' + formatAmount(amount))
// Your purchase:

// can you actually afford this purchase?
if (amount > bank_balance) {
	console.log("You can't afford this  purchase. :(")
}
*/
