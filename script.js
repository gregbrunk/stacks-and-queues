var itemQueue = [
  { name: 'banana',  price: 0.29 },
  { name: 'smoothie', price: 4.00 },
  { name: 'car', price: 10000 },
  { name: 'apple',  price: 0.59 },
  { name: 'soda', price: 2.50 },
  { name: 'boat', price: 50000 },
  { name: 'yacht', price: 2000000 },
  { name: 'jet', price: 16000000 },
  { name: 'massive plane', price: 100000000 },
  { name: 'cat', price: 800 },
  { name: 'dog', price: 1 },
  { name: 'bird', price: 25 },
  { name: 'toad', price: 2000 },
  { name: 'candy bar', price: 1.73 },
  { name: 'greg', price: 10000000000000 },
];

function calculateTotal (array) {
	var count = 1;
	var priceArray = [];
	var items = array;
	var currentProduct = items.shift();
	while (currentProduct !== undefined) {
		if (count%15 === 0) {
			priceArray.push(currentProduct.price * 0.7);
		} else if (count%5 === 0) {
			priceArray.push(currentProduct.price * 0.8);
		} else if (count%3 === 0) {
			priceArray.push(currentProduct.price * 0.9);
		} else {
			priceArray.push(currentProduct.price);
		}
	currentProduct = items.shift();
	count += 1;
	}
	console.log(priceArray);
	var sum = priceArray.reduce(function(a, b) { return a + b; }, 0);
	return sum;
}

var total = calculateTotal(itemQueue);
console.log(total);