document.writeln(`Question 1 & 2 <br>`);
var a = parseInt(prompt("Enter a number: "));
var b = parseInt(prompt("Enter a number to add: "));
var c = a+b;
var d = a-b;
var e = a*b;
var f = a/b;
var g = a%b;
document.writeln(`Sum of ${a} and ${b} is ${c} <br> Difference of ${a} and ${b} is ${d} <br> Multiplication of ${a} and ${b} is ${e} <br> Division of ${a} and ${b} is ${f} <br> Mod of ${a} and ${b} is ${g} <br><br>`);

document.writeln(`Question 3 <br>`);
var h;
document.writeln(`Value after variable declaration is: ${h}<br>`);
h = 5;
document.writeln(`Initial value: ${h}<br>`);
h += 1;
document.writeln(`Value after increment is: ${h}<br>`);
h = h+7;
document.writeln(`Value after addition is: ${h}<br>`);
h -= 1;
document.writeln(`Value after decrement is: ${h}<br>`);
h = h%3;
document.writeln(`The remainder is : ${h}<br><br>`);

document.writeln(`Question 4 <br>`);
var ticketCost = 600;
var numberOfTickets = 5;
var totalCostOfTickets = ticketCost*numberOfTickets;
document.writeln(`Total cost to buy ${numberOfTickets} tickets to a movie is ${totalCostOfTickets} <br><br>`);

document.writeln(`Question 5 <br>`);
var tableNumber = parseInt(prompt("Which Number Of Table You Want To Print: "));
document.writeln(`Table of ${tableNumber} <br>`);
for (var i=1; i<=10; i++){
    multiply = tableNumber*i;
    document.writeln(`${tableNumber} X ${i} = ${multiply} <br>`);
}
document.writeln(`<br>`);

document.writeln(`Question 6 <br>`);
var celsius = 25;
var fahrenheit = 70;
document.writeln(`${celsius}°C is ${(celsius*9/5)+32}°F <br>`);
document.writeln(`${fahrenheit}°C is ${(fahrenheit-32)*5/9}°F <br><br>`);

document.writeln(`Question 7 <br>`);
document.writeln(`<h1>SHOPPING CART</h1>`);
var item1Price = 650;
var item2Price = 100;
var item1Qty = 3;
var item2Qty = 7;
var shippingCharges = 100;
document.writeln(`The price of item 1 is ${item1Price} <br>`);
document.writeln(`Quantity of item 1 is ${item1Qty} <br>`);
document.writeln(`The price of item 2 is ${item2Price} <br>`);
document.writeln(`Quantity of item 2 is ${item2Qty} <br>`);
document.writeln(`Shipping Charges ${shippingCharges} <br><br>`);
document.writeln(`Total cost of your order is ${item1Price*item1Qty+item2Price*item2Qty+shippingCharges} <br><br>`);

document.writeln(`Question 8 <br>`);
document.writeln(`<h1>MARKS SHEET</h1>`);
var totalMarks = 980;
var obtainedMarks = 804;
document.writeln(`Total marks: ${totalMarks} <br>`);
document.writeln(`Marks obtained ${obtainedMarks} <br>`);
document.writeln(`Percentage ${obtainedMarks/totalMarks*100}% <br><br>`);

document.writeln(`Question 9 <br>`);
document.writeln(`<h1>CURRENCY IN PKR</h1>`);
document.writeln(`Total currency in PKR: ${10*104.80+25*28}Rs <br><br>`);

document.writeln(`Question 10 <br>`);
var arithmetic = 5;
document.writeln(`All calculations on 5 in a single expression: ${((arithmetic+5)*10)/2} <br><br>`);

document.writeln(`Question 11 <br>`);
document.writeln(`<h1>AGE CALCULATOR</h1>`);
var currentYear = 2025;
var birthYear = 2003;
document.writeln(`Current Year: ${currentYear} <br>`);
document.writeln(`Birth Year: ${birthYear} <br>`);
document.writeln(`Your age is: ${currentYear-birthYear} <br>`);

document.writeln(`Question 12 <br>`);
document.writeln(`<h1>The Geometrizer</h1>`);
var radius = 20;
var pi = 3.142;
document.writeln(`Radius of a circle: ${radius} <br>`);
document.writeln(`The circumference is: ${2*radius*pi} <br>`);
document.writeln(`The area is: ${pi*radius*radius} <br>`);

document.writeln(`Question 13 <br>`);
document.writeln(`<h1>The Life Time Supply Calculator</h1>`);
var favSnack = "Chocolate Chips";
var age = 15;
var maxAge = 65;
var amountPerDay = 3;
document.writeln(`Favourite Snack: ${favSnack} <br>`);
document.writeln(`Current Age: ${age} <br>`);
document.writeln(`Estimated Max Age: ${maxAge} <br>`);
document.writeln(`Amount Of Snacks Per Day: ${amountPerDay} <br>`);
document.writeln(`You will need ${((maxAge-age)*365)*amountPerDay} ${favSnack} to last you until the ripeold age of ${maxAge} <br>`);