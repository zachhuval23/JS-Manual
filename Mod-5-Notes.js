// 1.) DOCUMENT OBJECT MODEL (DOM)

// Query Selectors - Method that returns the first element whithin the document and matches the specified selector, or group of selectors.
// Examples:
element.querySelector(selector) // Returns reference to the first match of selector
element.querySelectorAll(selectors) // Returns a nodelist containing references to all of the matches of the selectors

// Element Creation - Method that creates a new element of tag type tagName.
// Example:
const div = document.createElement('div'); // This function does NOT put your new element into the DOM - it simply creates it in memory.

// Appending Elements
// Examples:
parentNode.appendChild(childNode) // Appends childNode as the last child of parentNode.
parentNode.insertBefore(newNode, referenceNode) // Inserts newNode into parentNode before referenceNode.

// Removing Elements
//Example:
parentNode.removeChild(child) // Removes child from parentNode on the DOM and returns a reference to child.

// Altering Elements - When you have a reference to an element, you can use that reference to alter the element’s own properties.
// Example:
const div = document.createElement('div'); // creates a new div referenced in the variable 'div'

// Adding Inline Styles
// Example:
div.style.color = 'blue';  // Adds the indicated style rule                                    
div.style.cssText = 'color: blue; background: white;'; // Adds several style rules          
div.setAttribute('style', 'color: blue; background: white;'); // Adds several style rules

// Editing Attributes
// Example:
div.setAttribute('id', 'theDiv'); // If id exists, update it to 'theDiv', else create an id with value "theDiv"                             
div.getAttribute('id'); // Returns value of specified attribute, in this case "theDiv"                                        
div.removeAttribute('id'); // Removes specified attribute

// Adding Text Content
// Example:
div.textContent = 'Hello World!' // Creates a text node containing "Hello World!" and inserts it in div

// Adding HTML Content
// Example:
div.innerHTML = '<span>Hello World!</span>'; // renders the HTML inside div                  

// How to defer a <script> tag until the page loads
<head>
  <script src="js-file.js" defer></script>
</head>

// Additional DOM Methods

// getElementsbyTagName - Returns a collection of all elements with a specified tag name.
// Example: 
const collection = document.getElementsByTagName("li"); // Gets all elements with the tag name li

// getElementsByClassName - Returns a collection of elements with a specified class name(s).
// Example: 
const collection = document.getElementsByClassName("example"); // Gets all elements with class =example

// getElementByID - Returns an element with a specified value
// Example:
const myElement = document.getElementById("demo");
myElement.style.color = "red"; // Gets the element and changes the color to red

// 2.) EVENTS

// 3 Methods for Implementing an onClick Function for a button
// Example 1:
<button onclick="alert('Hello World')">Click Me</button>

// Example 2:
// The HTML File
<button id="btn">Click Me</button>
// the JavaScript file
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

// Example 3:
// The HTML file
<button id="btn">Click Me Too</button>
// The JavaScript file
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});

// Passing a Parameter into your Event Listener Function
// Example:
btn.addEventListener('click', function (e) { // The e in that function is an object that references the event itself. Within that object you have access to many useful properties and methods 
  console.log(e);
});

// Attaching listeners to a Group of Nodes
// Example:
// HTML
<div id="container">
    <button id="1">Click Me</button>
    <button id="2">Click Me</button>
    <button id="3">Click Me</button>
</div>
//JavaScript
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});

// Some useful events besides 'click'
/*
1. dbclick - fires when a pointing device button (such as a mouse's primary button) is   
   double-clicked
2.keydown - fired when a key is pressed
3.keyup - fired when a key is released
*/