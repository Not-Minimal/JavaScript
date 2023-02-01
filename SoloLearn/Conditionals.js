//The if statement
//We use if to specify a block of code that we want to be executed if specified condition is true

//if (condition){
//statement
//}
//

var num1 = 7;
var num2 = 10;
if (num1 < num2) {
  console.log("JavasCript is easy to learn.");
}

//alert() Make an a popup alert box that contains information inside paretheses.
//
//The Else Statement
var month = "september";
if (month == "August") {
  console.log("vacation");
} else {
  console.log("");
}
//The ElseIf statement
var course = 1;
if (course == 1) {
  document.write("<h1>HTML Tutorial</h1>");
} else if (course == 2) {
  document.write("<h1>CSS Tutorial</h1>");
} else {
  document.write("<h1>JavasCript Tutorial</h1>");
}
//The Switch Statement
//switch (expression){
//case 1:
//  statement
//  break;
//case 2:
//  statement
//  break;
//default:
//  statement
//}

//For Loop Statement
//for (statement 1; statement 2; statement 3){
//code block to be executed
//}
for (let i = 1; i <= 5; i++) {
  document.write(i + "<br />");
}
for (let i = 1, text = ""; i <= 5; i++) {
  text = i * 3;
  document.write(i + "<br />");
}
//The While Loop
//The while loop repeats through a block of code, but only as long as specified condition is true
//while (condition) {
// statement
//}
let u = 0;
while (u <= 10) {
  document.write(u + "<br />");
  u++;
}
//The DoWhile Loop
//This loop will execute the code block once, before checking if the condition is true, and then
//it will repear the loop as long as long as the condition is true
//do {
//statement
//} while (condition);
var x = 20;
do {
  document.write(x + "<br />");
  x++;
} while (x <= 25);
