document.writeln(`Question 1: <br>`);
document.writeln(`Result: <br>`);
var num = parseInt(prompt("Enter a number:"));
document.writeln(`The value of a is: ${SVGAnimatedNumberList} <br>`);
document.writeln(`..................................  <br><br>`);
document.writeln(`The value of ++a is: ${++num} <br>`);
document.writeln(`Now the value of a is: ${num} <br><br>`);
document.writeln(`The value of a++ is: ${num++} <br>`);
document.writeln(`Now the value of a is: ${num} <br><br>`);
document.writeln(`The value of --a is: ${--num} <br>`);
document.writeln(`Now the value of a is: ${num} <br><br>`);
document.writeln(`The value of a-- is: ${num--} <br>`);
document.writeln(`Now the value of a is: ${num} <br><br>`);

document.writeln(`Question 2: <br>`);
var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
document.writeln(`Starting with the value of --a: ${--a} <br>`);
document.writeln(`Now the value of a is: ${a} <br><br>`);
document.writeln(`Subtract the value of --b: ${--b} from ${a} = ${a - b} <br>`);
document.writeln(`Now the value of b is: ${b} <br><br>`);
document.writeln(`Add the value of ++b: ${++b} in ${a - --b} = ${a - b + ++b} <br>`);
document.writeln(`Now the value of b is: ${b} <br><br>`);
document.writeln(`Add the value of b--: ${b} in ${a - --b + ++b} = ${a - --b + ++b + b} <br>`);
document.writeln(`Now the value of b is: ${b--} <br><br>`);
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.writeln(`Result: ${result} <br><br>`);

document.writeln(`Question 3: <br>`);
var name = prompt("Enter your name:");
document.writeln(`Hello ${name}, Welcome to Jawan Pakistan! <br><br>`);

document.writeln(`Question 4: <br>`);
var tableNumber = parseInt(prompt("Which Number Of Table You Want To Print: "));
tableNumber = Number(tableNumber) || 5;
document.writeln(`Table of ${tableNumber} <br>`);
for (var i = 1; i <= 10; i++) {
    multiply = tableNumber * i;
    document.writeln(`${tableNumber} X ${i} = ${multiply} <br>`);
}
document.writeln(`<br>`);



document.writeln(`Question 5: <br>`);
var subject1 = prompt("Enter name of first subject:");
var subject2 = prompt("Enter name of second subject:");
var subject3 = prompt("Enter name of third subject:");
var totalMarksEach = 100;
var marks1 = +prompt("Enter obtained marks for " + subject1 + ":");
var marks2 = +prompt("Enter obtained marks for " + subject2 + ":");
var marks3 = +prompt("Enter obtained marks for " + subject3 + ":");
var totalObtained = marks1 + marks2 + marks3;
var totalMarks = totalMarksEach * 3;
var percentage = (totalObtained / totalMarks) * 100;
document.write(`
      <table border="1" cellspacing="0" cellpadding="8">
        <tr>
          <th>Subject</th>
          <th>Total Marks</th>
          <th>Obtained Marks</th>
          <th>Percentage</th>
        </tr>
        <tr>
          <td>${subject1}</td>
          <td>${totalMarksEach}</td>
          <td>${marks1}</td>
          <td>${(marks1/totalMarksEach)*100}</td>
        </tr>
        <tr>
          <td>${subject2}</td>
          <td>${totalMarksEach}</td>
          <td>${marks2}</td>
          <td>${(marks2/totalMarksEach)*100}</td>
        </tr>
        <tr>
          <td>${subject3}</td>
          <td>${totalMarksEach}</td>
          <td>${marks3}</td>
          <td>${(marks3/totalMarksEach)*100}</td>
        </tr>
        <tr>
          <th>Total</th>
          <th>${totalMarks}</th>
          <th>${totalObtained}</th>
          <th>${percentage}%</th>
        </tr>
      </table>
`);