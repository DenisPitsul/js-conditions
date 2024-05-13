const purchaseSum = +prompt('Input purchase sum');
let sumToPay = 0;

if(purchaseSum > 800) {
    sumToPay = purchaseSum - purchaseSum * 0.05;
} else if(purchaseSum > 500) {
    sumToPay = purchaseSum - purchaseSum * 0.03;
} else {
    sumToPay = purchaseSum;
}
alert(`You sum to pay ${sumToPay} grn`);