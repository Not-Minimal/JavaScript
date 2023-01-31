let curso = "Curso JavaScript";
console.log("Primer Mensaje por Consola");

/*
*- JavaScript is a very popular programming language.
- Web developers use the console to test code and fix bugs.
- You can use console.log() to write or log messages to the console.
*/
//Output
//<script>
document.write("Hola");
document.write("Hola Mundo"); //document.write() function. This is what we need to use to write text into our HTML document.
//</script>
//
document.write("<h1>Hola Mundo</h1>"); //document.write() function. This is at we need to use to write text into our HTML document.
var x = 10; //Variables are containers for storing data values. Could change troughout the program
//The = is for assignment
document.write(x);
x = 50;
document.write(x);
//Note: Every written "instruction" is called a statement. JavaScript statement are separated by semicolons.
//Naming Variables
//JavaScript it's case-Sensitive
//- The first character of a variable name must be a letter, underscore (_), or a dollar sign ($) (Subsequent characters can be letters, digits, underscores, or dollar signs).
//- The first character of a variable name can’t be a number.
//- Variable names can’t include a mathematical or logical operator in their name. For instance, 2*something or this+that;
//- Variable names can’t contain spaces.
//- You’re not allowed to use any special symbols, like my#num, num%, etc.
//JavaScript Comments
//This is a single line Comment
alert("This is an alert box!"); //Alert is used to create a message box
/*
 * Multiline Comments
 * */
//Data Types
//Numbers
var num = 42; //A number without decimals
var price = 55.5; //A number with decimals
document.write(prince);
//Strings
var name = 'Saul';
var text = "Mi nombre es" + name;
var text = "Mi nombre es 'Saul"; 
//BackSlash \ (Escape Character)
var sayHello = 'Hola Mundo \'Soy un programador en JavaScript \' ';
document.write(sayHello);
//Bololeans
var isActive = true;
vas isHoliday = false;
//Notes: The Boolean value of 0 (zero), null, undefined, empty string is false.
//Everythin with a "real" value is true.
