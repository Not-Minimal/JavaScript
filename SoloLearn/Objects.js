//JavaScript variables are containers for data values.
//Objects are variables too, but they can contain many values.
//Think of an object as a list of values that are written as
//name:value pairs, with the names and the values separated by colons.
var person = {
  name: "Saul",
  age: 22,
  color: "Red",
  altura: 173,
};
//Its could access object properties in two ways
//objectName.propertyName
//objectName['propertyName']
var x = person.age;
var y = person["age"];
var course = { name: "JS", lessons: 41 };
document.write(course.name.length);
//Objects Methods
//An Object method is a property that contains a function definition
//objectName.methodName()
//Object Constructors
//In the previos, we created an object using the object literal.
function person(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
}
//The keyword "new" is used for creating an instance of an object
var p1 = new person("Pedro", 55, "Verde");
var p2 = new person("Cheli", 11, "Rosado");
document.write(p1.age); // 55
document.write(p2.name); //Cheli
//Methods
//Methods are functions that are stored as object properties
//methodName = function(){CodeLines}
//objectName.methodName() to access an object
function persona(name, age) {
  this.name = name;
  this.age = age;
  this.changeName = function (name) {
    this.name = name;
  };
}
var p = new persona("David", 21);
p.changeName("Saul"); //NOw p.name = "Saul"
//You can also define the function outside of the constructor function and associate it with the object
function personaUno(name, age) {
  this.name = name;
  this.age = age;
  this.yearOfBirth = bornYear;
}
function bornYear() {
  return 2016 - this.age;
}
var p = new personaUno("A", 23);
document.write(p.yearOfBirth());
