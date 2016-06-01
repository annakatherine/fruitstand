console.log('hello awesome group!');

$(document).ready(function(){
  console.log('hello from jquery');
});

var currentPrice = [0,0,0,0];
var fruit = [];
// var newFruit = {
//   'name': name,
//   // 'moneySpent': moneySpent,
// //   'amPurchased': amPurchased
// };
var randomNumberMaker = function(min, max){
  return (Math.random() * (max-min) + min).toFixed(2);
};
console.log(randomNumberMaker(-0.50, 0.50));

var timer = setInterval(function(){calcPrice(); }, 1000); //remember to change this to 15000
var calcPrice = function(){
 for (var i = 0; i < currentPrice.length; i++) {
    currentPrice[i] = Number(randomNumberMaker(-0.50, 0.50));
}
console.log(currentPrice);
 };
