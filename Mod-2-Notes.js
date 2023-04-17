// 1.) DECLARING VARIABLES

// Three types of variables: var, let, const

// var Example:
var x = 5;

function example() {
  var y = 10;
  console.log(x); // Output: 5
  console.log(y); // Output: 10
}

console.log(x); // Output: 5
console.log(y); // Output: Uncaught ReferenceError: y is not defined

// let Example:
let a = 5;

if (true) {
  let a = 10;
  console.log(a); // Output: 10
}

console.log(a); // Output: 5

//const Example:
const b = 5;
b = 10; // Output: TypeError: Assignment to constant variable.

/* When naming variables it is important to follow some basic guidelines.
- Try to use camelCase (Start with lowercase letter and capitlize the first letter  of each subsequent word)
- Use descriptive names
- Avoid reserved words such as 'function', 'return', and 'if'
- Use nouns for variable names
- Use meaningful prefixes or suffixes 
*/

// Good Variable Name Examples:
let firstName = "John";
let numberOfStudents = 20;
let isLoggedin = false;
const PI = 3.14159;
let isCompleted = true;
let studentList = ["John", "Mary", "Tom"];

// 2.) OPERATORS

/* Arithmetic Operators in Javascript
+ Addition
- Subtraction
* Multiplication
/ Divsion
% Modulus (Division Remainder)
** Exponentation
++ Increment
-- Decrement
*/

/* What would happen if you use a string with an operator?
Example: "24" + 2
In the example above, the first operand is a string and the second is a number. The '+' operator performs string concatenation (linking together), resulting in the string "242".
*/

// 3.) WORKING WITH NUMBERS

/* NaN
In Javascript 'NaN' stands for "Not a Number". It is a value of the 'Number' data type that represents an undefined value resulting from an operation that should have returned a number, but did not.
*/

// 4.) WORKING WITH STRINGS

/* Escaping Strings
In Javascript, escaping characters are special characters that have a particular meaning whithin a string but need to be preceded by  backslash in order to be included as part of the string.

The most common escaping characters in JavaScript include:

  \n - represents a newline character.
  \t - represents a tab character.
  \" - represents a double quote character within a string.
  \' - represents a single quote character within a string.
  \\ - represents a backslash character within a string.
*/

/* Template Literals
Also known as template strings, template literals are a feature in Javascript that allow you to embed expressions and variables inside a string. They are enclosed within backtick (' ') characters, instead if the single or double quotes used for regular strings.
*/

/* Methods for working with strings
slice() - Extracts a section of an array and returns it as a new array
substring() - Extracts a portion of a string and returns it as a new string
replace() - Replaces a specified part of a string with a new string or regular    expression 
toUpperCase() - Converts all characters in a string to uppercase and returns a new string
toLowerCase() - Converts all characters in a string to lowercase and returns a new string
concat() - Concatenates one or more strings and returns a new string
trim() - Removes whitespace characters from both ends of a string and returns a new string 
padStart() - Pads the beginning of a string with a specified character until the resulting string reaches a desired length
charAt() - Returns the character at a specified index in a string
*/

/* How to convert a string to an array:
To convert a string to a new array in Javascript you can use the split() method. This method splits a string into an arrary of substrings based on a specified separator.
*/
// Example:
const myString = "Hello, World!";
const myArray = myString.split(",");
console.log(myArray); // ["Hello", " World!"]

// 5.) CONDITIONAL STATEMENTS

/* Comparison Operators
== - Compares two values for equality
=== - Compares two values for equality without type conversion
!= - Compares two values for inequality
!== - Compares two values for inequality without type conversion
> - Compares two values to see if the left operand is greater than the right
< - Compares two values to see if the left operand is less than the right
*/

/* Comparing strings in Javascript is based on the alphabetical order of their component letters.
*/

// Comparison Examples:
// Number:
console.log(5 > 2); // Output: true
console.log(2 > 5); // Output: false
// String:
let str1 = "Hello";
let str2 = "hello";

if (str1 === str2) {
  console.log("The two strings are equal.");
} else {
  console.log("The two strings are not equal.");
}
// Boolean
let bool1 = true;
let bool2 = false;

if (bool1 === bool2) {
  console.log("The two booleans are equal.");
} else {
  console.log("The two booleans are not equal.");
}

/* Strict vs Regular Equality Operators
Strict Operators - (===, !==)
Regular Operators - (==, !=)

Strict operators compare both the value and the data type of the operands. Regular operators only compare the value of the operands.
*/

/* Conditional Statements Explained
if - Allows you to execute a block of code only if a certain condition is true
else - Used in conjuction with 'if' to execute a block of code when the 'if' condition is false
else if - Used in conjuction with 'if' to execute a block of code when multiple conditions need to be checked
*/

/* Logical Operators Explained
&& - Returns 'true' if both operands are true, and 'false' otherwise
|| - Returns 'true' if either operand is true, and 'false' otherwise
! - Negates a boolean expression. It returns 'true' if the expression is false, and 'false' if the expression is true
*/

/* Switch Statements Explained
'switch' statements provide a way to execute different code blocks based on different conditions.
*/
// Example:
let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("I love apples!");
    break;
  case "banana":
    console.log("Bananas are great for smoothies.");
    break;
  case "orange":
    console.log("Oranges are a great source of vitamin C.");
    break;
  default:
    console.log("I'm not a fan of that fruit.");
}

/* Ternary Operators Explained
The ternary operator is a shorthand way of writing an 'if...else' statement.
*/
// Example:
let isRaining = true;

let weather = isRaining ? "Bring an umbrella" : "Leave the umbrella at home";

console.log(weather);
