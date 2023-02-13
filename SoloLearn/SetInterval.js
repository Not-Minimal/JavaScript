function myAlert() {
  alert("Hi");
}
setInterval(myAlert, 3000);
//The Data Object
//The date object enables us to work with dates
//A date consists of a year, a monthm a day, hoyr, minute, second, and milliseconds.
//Using new Date(), create a new date object with the current date and time
var d = new Date(); //d store the current date and time
new Date(milliseconds);
new Date(dateString);
new Date(year, month, day, hours, minutes, seconds, milliseconds);
getFullYear();
getMonth();
getDate();
getDay();
getHours();
getMinutes();
getSeconds();
getMilliseconds();

function printTime() {
  var d = new Date();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();
  console.log(hours + minutes + seconds);
}
