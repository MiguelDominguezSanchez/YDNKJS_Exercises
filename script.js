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

// var ø = Object.create(null)

// 211009

var myObject = {
	a: 2,
	b: 3,
}

Object.defineProperty(myObject, Symbol.iterator, {
	enumerable: false,
	writable: false,
	configurable: true,
	value: function () {
		var o = this
		var idx = 0
		var ks = Object.keys(o)
		return {
			next: function () {
				return {
					value: o[ks[idx++]],
					done: idx > ks.length,
				}
			},
		}
	},
})

// iterate `myObject` manually
var it = myObject[Symbol.iterator]()
it.next() // { value:2, done:false }
it.next() // { value:3, done:false }
it.next() // { value:undefined, done:true }

// iterate `myObject` with `for..of`
for (var v of myObject) {
	console.log(v)
}
// 2
// 3
