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
