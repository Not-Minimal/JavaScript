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
