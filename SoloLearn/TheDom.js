//When u open any webpage in a browser, the HTML of the page is loaded and rendered visually on the screen.
//To acomplish that, the browser buil the Document Object Model of that page, which is an object oriented model of
//its logical structure.
//The DOM of an HTML document can be represented as a nested set of Bosexs.
//JavaScript can be used to manipulate the DOM of a page dynamically to add, delete and modify elements.
//DOM Tree
//For the example above:
//<html> has two children (<head>, <body>);
//<head> has one child (<title>) and one parent (<html>);
//<title> has one parent (<head>) and no children;
//<body> has two children (<h1> and <a>) and one parent (<html>);

//The Document Object
/*
There is a predefined document object in JavaScript, which can be used to access all elements on the DOM.
In other words, the document object is the owner (or root) of all objects in your webpage.
So, if you want to access objects in an HTML page, you always start with accessing the document object.
*/
document.body.innerHTML = "Holaaa";
//Selecting Elements
//All HTML elements are objects. And as we know every object has properties and methods.
//The document object has methods that allow you to select the desired HTML element.
//These three methods are the most commonly used for selecting HTML elements.
//finds element by id.
document.getElementById(id);
//fins elements by class name
document.getElementByClassName(name);
//find elements by TagName
//document.getElementByTagName(name)
//
var element = document.getElementById(demo);
element.innerHTML = "Hello";
/*
Each element in the DOM has a set of properties and methods that provide information about their relationships in the DOM:
element.childNodes returns an array of an element's child nodes.
element.firstChild returns the first child node of an element.
element.lastChild returns the last child node of an element.
element.hasChildNodes returns true if an element has any child nodes, otherwise false.
element.nextSibling returns the next node at the same tree level.
element.previousSibling returns the previous node at the same tree level.
element.parentNode returns the parent node of an element
 * */
//Changing Attributes
//Once you have selected the element(s) u want to work with, yo can chnge their attributes.
//As we have seen in the previus lessons, we can change the text content of an element using the innetHTML property.

//var arr = document.getElementByTagName("img");
//for (var x = 0; x < array.length;x++) {
//  var array[x].src = "demo.jpg";
//}

//Changing Style
//The Style of HTML elements can also be changed using JavaScript
//All the style attributes can be accessed sing the syle object of the element.
//<div id = "demo" style = "width:200px">some text</div>
//<script>
//var x = document.getElementById("demo");
//x.style.color = "6600FF";
//x.style.width = "100px";
//</script;
//</script>>
