// Using Higher Order Function
// HOF -> int this function return a function

function discountCalculator(discount){
    return function(price){
        return price - price * discount/100;
    }
}
let ten = discountCalculator(10);
let twenty = discountCalculator(20);

console.log("Ten percent discount in price 2000: ",ten(2000));
console.log("Twenty percent discount in price 3000: ",twenty(3000));