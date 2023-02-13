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
