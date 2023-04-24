// 1.) FUNCTIONS

/* Invoking Functions

In order to actually use a function after it has been defined, you need to run or 'invoke' it. This is done by including the name of the function in the code, followed by parentheses.

*/

//Example:

function myFunction() {
  alert('hello');
}

myFunction(); // calls the function once

/* Defining Functions

To define a function, you use the 'function' keyword, followed by the function name, and a set of parentheses, which can optionally include parameters for the function. The function body is enclosed in curly braces '{}' and contains the code that will be ran when the function is called.

*/

// Example:

function myFunction() { // Here we use the function keyword with 'myFunction' followed by parentheses to define the function
  alert('hello');
}

/* Anonymous Functions

Anonymous functions are functions that have no name. You typically see these types of functions when a function expects to receive another function as a parameter.

*/

// Example 1:

(function () { // Calling a function with no name
  alert('hello');
})

// Example 2:

textBox.addEventListener('keydown', function(event) {
  console.log(`You pressed "${event.key}".`); // Here we pass an anonymous function into addEventListener()
});

/* Scope

When you create a function, the variables and other things defined inside the function are inside their own separate 'scope', meaning that they are locked away in their own separate compartments, unreachale from code outside the functions.

The top level is called the 'global scope'. Values defined here are accessible from everywhere in the code.

It is setup this way primarily for security and organization.

*/

// Example from MDN:

<!-- Excerpt from my HTML -->
<script src="first.js"></script>
<script src="second.js"></script>
<script>
  greeting();
</script>

// first.js
const name = 'Chris';
function greeting() {
  alert(`Hello ${name}: welcome to our company.`);
}

// second.js
const name = 'Zaptec';
function greeting() {
  alert(`Our company is called ${name}.`);
}

// In the example above, both functions you want to call are called 'greeting()', but you can only ever access the first.js file's greeting() function. The second one is ignored due to 'scope'. Keeping parts of your code locked away in functions avoids such problems, and is considered to be the best practice.

/* Return Values

Return values are the values that a function returns when it completes.

*/

// Example:

const myText = "The weather is cold";
const newString = myText.replace("cold", "warm");
console.log(newString); // newString is the return value

/* Default Values

If you write a function and want to support optional parameters, you can specify the default value by adding '=' after the name of the parameter, followed by the default value.

*/

// Example:

function hello(name = 'Chris') { //defines 'Chris' as the default value
  console.log(`Hello ${name}!`);
}

hello('Ari'); // Hello Ari!
hello();      // Hello Chris!

/* Call Stack

This is basically the way that the JavaScript engine keeps track of its place in code that calls multiple functions. It contains the information on what function is currently being run and what functions are invokes from whithin that function.

When you execute a script, the JavaScript engine creates a global execution context and pushes it on top of the call stack.

Whenever a function is called, the JavaScript engine creates a function execution context for the function, pushes it on top of the call stack, and starts executing the function.

If a function calls another function, the JavaScript engine creates a new function execution context for the function being called and pushes it on top of the call stack.

When the current function completes, the JavaScript engine pops it off the call stack and resumes the execution where it left off.

The script will stop when the call stack is empty.

*/

// 2.) PROBLEM SOLVING

/* Describe the steps for Problem Solving

The problem sovling process when it comes to programming, consists of three steps: Plan, Pseudocode and Divide and Conquer.

Plan - When planning, you should aim to answer the following questions:
Does your program have a UI? What will it look like? Sketch this out on paper.

What inputs wil your program have? Should the user enter data or will you get it from somewhere else?

What is the desired output?

Given your inputs, what are the steps necessary to return the desired output?

Pseudocode - This is writing out the logic for your program in natural langauge instead of code. This is helpful for slowing down and thinking through the steps your program will have to go through to solve a problem.

Divide and Conquer - This is the process of identifying smaller problems (subproblems) based on the larger problem you are solving. Instead of trying to solve the big problem all at once, divide it into smaller subproblems and work on each one individually in order to obtain the solution for your large problem.

*/

// 3.) UNDERSTANDING ERRORS

/* Different Types of JavaScript Errors

An error is a type of object that is built into the JavaScript language, consisting of a name/type and a message. They contain crucial information that can assist you in locating the code responsible for the error, determing why you have this error, and resolving the error(most important part).

Tips for Resolving Errors:

1. Read the error carefully and try to understand it on your own.
2. Google the error. There is a high chance that someone else has encountered it and explained the resolution process on a site such a StackOverflow.
3. Use the debugger. The debugger is great for more involved troubleshooting and is a critical tool for a developer.
4. Make use of the console. console.log() is a popular chouce for quick debugging.

*/

// Example 1 ReferenceError:

const a = "Hello"
const b = "World"

console.log(c) // Running this code results in a ReferenceError. 'c' is not defined, so the console can't print anything out for it.

// Example 2 SyntaxError:

function helloWorld() {
  console.log "Hello World!" // This will result in a SyntaxError because there are no parentheses after console.log.
}

// Example 3 TypeError:

const str1 = "Hello";
const str2 = "World!";
const message = str1.push(str2); // This results in a TypeError which states that str1.push is not a function. In this case, .push() is an arrary method and not a string method.
