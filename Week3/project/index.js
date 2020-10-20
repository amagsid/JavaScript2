'use strict'

//global variables to use outside the function

//"each" word that shows after the tip amoubnt
let each = document.getElementById("each");
let totalAmount = document.getElementById("total-amount");
let calculateButton = document.getElementById("calculate-button");

//CalculateTip function 
function calculateTip() {
  //getting HTML DOM elemewnts
  let billAmount = document.getElementById("bill").value;
  let service = document.getElementById("service").value;
  let numberOfPeople = document.getElementById("people").value;
  let tip = document.getElementById("tip");
  //validate input
  if (billAmount === "" || service == 0 ) {
    alert("You need to fill in all the fields!");
  } else if (isNaN(billAmount) || isNaN(numberOfPeople)) {
    alert("You need to enter a numeric value!");
  };

  //ommit "erach if number of people is 1"
  if (numberOfPeople === "" || numberOfPeople <= 1) {
    numberOfPeople = 1;
    each.style.display = "none";
  } else {
    each.style.display = "block";
  };
  
  //Calculate tip
  let total = (billAmount * service) / numberOfPeople;
  //display 2 decimal digits
  total = total.toFixed(2);
  //Display "Total amount"
  totalAmount.style.display = "block";
  //display tip amount only if it's a number
  if (!isNaN(total)) {
    tip.innerHTML = total;
  };
};
  
//hide "total amount" and "each" on load
totalAmount.style.display = "none";
each.style.display = "none";

//button click event
calculateButton.addEventListener('click', calculateTip);