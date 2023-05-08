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










