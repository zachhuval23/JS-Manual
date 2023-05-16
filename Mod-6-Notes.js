// 1.) OBJECTS

// Creating an Empty Object - To create an empty object you can use the object literal notation or the 'Object()' constructor
// Example:
const emptyObject = {};
const emptyObject = new Object();

// Creating an object with "key: value" pairs
// Example Object Literal Notation:
const myObject = {
  key1: value1,
  key2: value2,
  key3: value3,
  // ...
};

// How to access property values of an object - You can use dot notation (`objectName.propertyName`) or square bracket notation (`objectName['propertyName']`)
// Example:
const person = {
  name: "Zach Huval",
  age: 26,
  occupation: "Software Engineer",
};
console.log(person.name); // Output: Zach Huval
console.log(person.age); // Output: 26
console.log(person["occupation"]); // Output: Software Engineer

// How to add new "key: value" pairs - You can assign a value to a new key using either dot notation (objectName.newKey = value) or square bracket notation (objectName['newKey'] = value)
// Example:
const person = {
  name: "Zach Huval",
  age: 26,
};
person.occupation = "Software Engineer";
person["location"] = "Washington";

console.log(person);

// How to delete "key: value" pairs - you can use the delete operator
// Example:
const person = {
  name: "Zach Huval",
  age: 26,
  occupation: "Software Engineer",
};
delete person.age;

console.log(person);
// Output:
{
  name: "Zach Huval",
  occupation: "Software Engineer",
}

// When you need to use square bracket notation, instead of dot access
/*
1. When the property name is stored in a variable or is dynamically generated
2. When the property name contains special characters or spaces
3. When accessing properties dynamically based oon conditions or calculations
4. When iterating over object properties
*/

// The in operator - Used to check if a specified property exists in an object. It returns a boolean value indicating whether the property is found in the object or its prototype chain
// Example Syntax:
propertyNameOrIndex in object
// Example of usage:
const person = {
  name: "Zach Huval",
  age: 26,
};
console.log("name" in person); // Output: true
console.log("occupation" in person); // Output: false

// The for...in loop - a control flow statement in JavaScript that allows you to iterate over the properties of an object. It provides an easy way to access the keys or property names of an object and perform actions on each one of them
// Example Syntax:
for (variable in object) {
  // code to be ran
}
// Example of usage:
const person = {
  name: 'Zach',
  age: 26,
  profession: 'Developer'
};

for (let key in person) {
  console.log(key + ': ' + person[key]);
}

// The this keyword - Refers to the current execution context or the object on which a function is invoked. The value of this depends on how a function is called and can vary dynamically
// Example:
const person = {
  name: 'Zach',
  age: 26,
  greet: function() {
    console.log('Hello, my name is ' + this.name);
  }
};

person.greet(); // Output: Hello, my name is Zach

// Constructors - Special functions that are used to create and initialize objects. They are typically defined with an uppercase first letter to indicate that they are intended to be used as constructors
// Example:
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Creating an object using the constructor:
const john = new Person('Zach', 26);
console.log(john.name); // Output: Zach
console.log(john.age); // Output: 26

// 2.) ARRAY METHODS

// .forEach() - A higher-order function available for arrays in JavaScript. It allows you to iterate over each element of an array and execute a provided callback function for each element
// Example:
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number);
});

// .indexOf() - A built-in function in JavaScript arrays that allows you to find the index of a specified element within an array. It returns the first index at which the element is found, or -1 if the element is not present in the array
// Example:
const fruits = ['apple', 'banana', 'orange', 'mango'];

console.log(fruits.indexOf('banana')); // Output: 1
console.log(fruits.indexOf('grape')); // Output: -1

// .lastIndexOf() - A built-in function in JavaScript arrays that allows you to find the last occurrence of a specified element within an array. It returns the index of the last occurrence of the element, or -1 if the element is not found
// Example:
const fruits = ['apple', 'banana', 'orange', 'mango', 'banana'];

console.log(fruits.lastIndexOf('banana')); // Output: 4
console.log(fruits.lastIndexOf('grape'));

// .find() - A built-in function in JavaScript arrays that allows you to find the first element in an array that satisfies a given condition
// Example:
const numbers = [1, 2, 3, 4, 5];

const evenNumber = numbers.find(function (number) {
  return number % 2 === 0;
});

console.log(evenNumber); // Output: 2

// .sort() - A built-in function in JavaScript arrays that allows you to sort the elements of an array in place
// Example:
const fruits = ['banana', 'apple', 'orange', 'mango'];

fruits.sort();

console.log(fruits); // Output: ["apple", "banana", "mango", "orange"]

// .reverse() - A built-in function in JavaScript arrays that allows you to reverse the order of the elements in an array
// Example:
const numbers = [1, 2, 3, 4, 5];

numbers.reverse();

console.log(numbers); // Output: [5, 4, 3, 2, 1]

// .split() - A built-in function in JavaScript strings that allows you to split a string into an array of substrings based on a specified separator
// Example:
const sentence = 'Hello, world!';

const words = sentence.split(' ');

console.log(words); // Output: ["Hello,", "world!"]

// .join() - A built-in function in JavaScript arrays that allows you to concatenate the elements of an array into a single string, using a specified separator between each element
// Example:
const fruits = ['apple', 'banana', 'orange'];

const joinedString = fruits.join(', ');

console.log(joinedString); // Output: "apple, banana, orange"

// .reduce() - a built-in function in JavaScript arrays that allows you to reduce an array to a single value by applying a specified callback function to each element of the array
// Example:
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15

// .isArray() - A built-in function in JavaScript that allows you to check whether a given value is an array
// Example:
const array = [1, 2, 3];

console.log(Array.isArray(array)); // Output: true

const notArray = 'Hello';

console.log(Array.isArray(notArray)); // Output: false

// 3.) JSON

// Syntax rules
/*
1. Data Format: JSON data must be represented as a valid JavaScript object literal. It consists of key-value pairs enclosed in curly braces {}.
2. Keys: JSON keys must be enclosed in double quotes ("") and follow the same rules as JavaScript string literals. They should be unique within the object.
3. Values: strings, numbers, booleans, null, arrays, objects
4. Whitespace: JSON allows whitespace characters (spaces, tabs, line breaks) outside of strings, but within strings, whitespace is considered part of the string value.
*/
// Example of valid syntax:
{
  "name": "Zach",
  "age": 26,
  "isStudent": true,
  "hobbies": ["skateboarding", "photography", "video games"],
  "address": {
    "street": "123 Main St",
    "city": "Port Orchard",
    "country": "USA"
  },
  "favoriteColors": null
}

// Converting from JSON text to a Javascript object - To convert JSON text into a JavaScript object, you can use the JSON.parse() method. This method takes a JSON-formatted string as input and returns a JavaScript object based on the parsed JSON data
// Example:
const jsonString = '{"name": "Zach", "age": 26, "isStudent": true}';

const javascriptObject = JSON.parse(jsonString);

console.log(javascriptObject); // Output: { name: "Zach", age: 26, isStudent: true }

// How to access data in JSON hierarchy (include example of deeply nested data) - You can use dot notation or square bracket notation in JavaScript. Dot notation is used when you know the exact key names, while square bracket notation is useful when accessing keys dynamically or when the key names contain special characters or spaces
// Example with deeply nested data:
const data = {
  "person": {
    "name": "Zach Huval",
    "age": 26,
    "address": {
      "street": "123 Main St",
      "city": "Port Orchard",
      "country": "USA"
    },
    "hobbies": ["skateboarding", "photography", "video games"]
  }
};
// Accessing data using dot notation:
console.log(data.person.name); // Output: "Zach Huval"
console.log(data.person.address.city); // Output: "Port Orchard"
// Accessing data using square bracket notation:
console.log(data["person"]["age"]); // Output: 26
console.log(data["person"]["hobbies"][1]); // Output: "skateboarding"

// How to validate JSON - You can use the JSON.parse() method. The JSON.parse() method attempts to parse a JSON string and returns the resulting JavaScript object if the JSON is valid. If the JSON string is not valid, an exception is thrown
// Example:
function validateJSON(jsonString) {
  try {
    JSON.parse(jsonString);
    return true; // JSON is valid
  } catch (error) {
    return false; // JSON is not valid
  }
}

const validJSON = '{"name": "Zach", "age": 26}';
const invalidJSON = '{"name": "Zach", age: 26}';

console.log(validateJSON(validJSON));   // Output: true
console.log(validateJSON(invalidJSON)); // Output: false