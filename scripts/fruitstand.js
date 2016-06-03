console.log('hello awesome group!');

$(document).ready(function(){
  console.log('hello from jquery');
});

var currentPrice = [5.0, 5.0, 5.0, 5.0];
var fruit = [];


//This is a function that takes an input from the textbox, and adds a fruit object to the fruit array.

 $('#fruitBtn').click(function(){
var name = $('#fruitIn').val();
   var newFruit = {
     'name': name,
     'moneySpent': 0,
     'amPurchased': 0
   };

fruit.push(newFruit);

currentPrice.push(0);
console.log(fruit);

});

//This generates a random number, and is called by the calcPrice below
var randomNumberMaker = function(min, max){
  return (Math.random() * (max-min) + min).toFixed(2);
};
console.log(randomNumberMaker(-0.50, 0.50));

//setInterval calls calcPrice at a regular interval, and assigns the output to the currentPrice variable
var timer = setInterval(function(){calcPrice(); }, 1000); //remember to change this to 15000
var calcPrice = function(){
 for (var i = 0; i < currentPrice.length; i++) {
    currentPrice[i] = currentPrice[i] += Number(randomNumberMaker(-0.50, 0.50));
    if (currentPrice[i] > 9.99){
      currentPrice[i] = 9.99;
    } else if (currentPrice[i] < 0.50) {
        currentPrice[i] = 0.50;
    } else {

    }

}
$('#applePrice').html(currentPrice[0].toFixed(2));
$('#bananaPrice').html(currentPrice[1].toFixed(2));
$('#grapePrice').html(currentPrice[2].toFixed(2));
$('#orangePrice').html(currentPrice[3].toFixed(2));
//console.log(currentPrice);
 };
