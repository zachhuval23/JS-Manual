// 1.) TIPS FOR WRITING CLEAN CODE

/* Indentation - It doesn't really matter what kind you use, just be consistent.
   
   Semicolons - Semicolons are mostly optional but it's best to add them to avoid any     
   unecessary bugs while compiling.
   
   Line Length - Like indentation, there is no absolute right way to do it, just be consistent.
   
   Naming Things - Names for functions and variables should be descriptive. Always use camelCase. Variables should begin with a noun or an adjective and functions with a verb.
*/

// 2.) ARRAYS

// Creating Arrays - The simplest way to do it is by using array literal notation
// Example:
const myArray = [1, 2, 3, 4, 5];
 
// Accessing First and Last Elements - You access the elements of an array by using their index position. The index of of the first element is always 0, while the index of the last elements is the length of the array, minus 1.
// Example First Element:
const myArray = [10, 20, 30, 40, 50];
const firstElement = myArray[0];
console.log(firstElement); 
// Example Last Element:
const myArray = [10, 20, 30, 40, 50];
const lastElement = myArray[myArray.length - 1];
console.log(lastElement);

// Changing an Array Element - You can change an array element by accessing the element using its index and assigning a new value to it.
// Example:
const myArray = [10, 20, 30, 40, 50];
myArray[1] = 25;
console.log(myArray);

// Length Property - 'Length' is the property of an array that returns the number of elements in the array.
// Example:
const myArray = [10, 20, 30, 40, 50];
const arrayLength = myArray.length;
console.log(arrayLength);

// Looping Over Array Elements - You can loop over array elements using various looping constructs such as, 'for', 'while', and 'forEach'.
// Example forEach Loop:
const myArray = [10, 20, 30, 40, 50];
myArray.forEach(function(element) {
  console.log(element);
});
// Example For Loop:
const myArray = [10, 20, 30, 40, 50];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

/* Difference between Arrays & Objects - While they are similar, these are the main differences between Objects and Arrays:

Order of Elements - Arrays maintain the order of their elements based on their index, while objects do not have a specific order for their properties.

Indexing - Arrays are indexed using integer values while objects use property names.

Type of Data - Arrays are best used to store daya of the same type, while Objects are best used to store data of different types.

Length - Arrays have a 'length' property while Objects do not

Looping - Arrays have built-in methods for iterating over their elements, while Objects require 'for..in' loops or 'Object.keys()'.
*/

// Converting Arrays to Strings - You can convert Arrays to Strings by using the 'join()' or 'toString()' methods.
// Example:
const myArray = ["apple", "banana", "orange"];

const joinedString = myArray.join(", "); // Using join() method
console.log(joinedString); // Output: "apple, banana, orange"

const stringifiedArray = myArray.toString(); // Using toString() method
console.log(stringifiedArray); // Output: "apple,banana,orange"

// push(), pop() - Two methods available for arrays that allow you to add and remove elements from the end of an array.
// Example push():
const myArray = ["apple", "banana"];
const newLength = myArray.push("orange", "pear");
console.log(myArray); // Output: ["apple", "banana", "orange", "pear"]
console.log(newLength); // Output: 4
// Example pop():
const myArray = ["apple", "banana", "orange", "pear"];
const lastElement = myArray.pop();
console.log(myArray); // Output: ["apple", "banana", "orange"]
console.log(lastElement); // Output: "pear"

// shift(), unshift() - Two methods available for arrays that allow you to add and remove elements from the beginning of an array.
// Example unshift():
const myArray = ["orange", "pear"];
const newLength = myArray.unshift("apple", "banana");
console.log(myArray); // Output: ["apple", "banana", "orange", "pear"]
console.log(newLength); // Output: 4
// Example shift():
const myArray = ["apple", "banana", "orange", "pear"];
const firstElement = myArray.shift();
console.log(myArray); // Output: ["banana", "orange", "pear"]
console.log(firstElement); // Output: "apple"

// Concatenating/Merging Arrays - You can concatenate or merge two or more arrays using the concat() method.
// Example:
const myArray1 = ["apple", "banana"];
const myArray2 = ["orange", "pear"];
const mergedArray = myArray1.concat(myArray2);
console.log(mergedArray); // Output: ["apple", "banana", "orange", "pear"]

// Flattening Arrays - You can flatten an array of arrays (i.e., an array containing one or more subarrays) using the flat() method.
// Example:
const myArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = myArray.flat();
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

// splice(), slice() - Two methods available for JavaScript arrays that allow you to modify and extract portions of an array.
// The splice() method allows you to add or remove elements from an array at a specified index.
// Example splce():
const myArray = ["apple", "banana", "orange", "pear"];
const removedElements = myArray.splice(1, 2, "grape", "kiwi");
console.log(myArray); // Output: ["apple", "grape", "kiwi", "pear"]
console.log(removedElements); // Output: ["banana", "orange"]

// The slice() method allows you to extract a portion of an array into a new array.
// Example slice():
const myArray = ["apple", "banana", "orange", "pear"];
const slicedArray = myArray.slice(1, 3);
console.log(slicedArray); // Output: ["banana", "orange"]

// 3.) LOOPS

// .map() - A higher-order function that provides an elegant way to loop over an array in JavaScript. Instead of using a traditional for loop, you can use the .map() method to iterate over each element of an array and perform some operation on each element.
// Example:
const myArray = [1, 2, 3, 4, 5];
const newArray = myArray.map((element) => {
  return element * 2;
});
console.log(newArray); // Output: [2, 4, 6, 8, 10]

// .filer() - Another higher-order function available for JavaScript arrays that provides a way to loop over an array and create a new array with only the elements that pass a specific test.
// Example:
const myArray = [1, 2, 3, 4, 5];
const filteredArray = myArray.filter((element) => {
  return element % 2 === 0;
});
console.log(filteredArray); // Output: [2, 4]

// for Loop - Allows you to iterate over a block of code multiple times, with each iteration being controlled by a loop variable that changes on each iteration.
// Example Basic Syntax:
for (initializer; condition; final-expression) {
  // code to run
}
// Example that Prints the Numbers from 1 to 5:
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// for...of Loop - A new type of loop introduced in ECMAScript 2015 (ES6) that provides a simpler way to loop over the elements of an array (or any other iterable object) compared to the traditional for loop.
// Example Basic Syntax:
for (const element of iterable) {
  // code to run
}
// Example Printing the Elements of an Array:
const myArray = [1, 2, 3, 4, 5];
for (const element of myArray) {
  console.log(element);
}

// break Statement - A control flow statement that allows you to break out of a loop (for, while, do...while) or a switch statement before the loop or switch has completed its full iteration.
// Example:
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// continue Statement - A control flow statement that allows you to skip over an iteration of a loop (for, while, do...while) and move on to the next iteration.
// Example:  
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

// while Loop - A control flow statement that allows you to execute a block of code repeatedly as long as a specified condition is true.
// Example:
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// do...while Loop - a control flow statement that is similar to the while loop, except that the code inside the loop is executed at least once, even if the condition is false.
// Example Basic Syntax:
do {
  // code to run
} while (condition);

// 4.) DESCRIPTION OF TEST DRIVEN DEVELOPMENT

/* Test-Driven Development (TDD) is a software development approach that involes writing automated tests for software code before writing the actual code. It typically involves the following steps:

Write a Test - Write a test case for the functionality you want to implement.

Run the Test - Run the test (It should fail since the code that implements the functionality hasn't been written yet).

Write the Code - Write the code to pass the test. Ideally, it should be written in small chunks that can be tested incrementally.

Run the Test Again - Run the test again to ensure that the code actually passes the test.

Refactor - Refactor the code to improve its design, readibility, and maintainability, without changing its functionality.

Repeat - Repeat the process for the next functionality you want to implement.
*/

































// 3.) LOOPS







// 4.) DESCRIPTION OF TEST DRIVEN DEVELOPMENT