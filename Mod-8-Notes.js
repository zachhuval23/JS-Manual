// 1.) INTRODUCTION TO THE BACKEND

// What is the difference between frontend and backend development - Frontend development involes creating the UI and designing the visual elements of a website or web application that users interact with directly. JS is used to add interactivity, handle user input and update the UI dynamically. Backend development focuses on the server-side of web applications. It involves building the underlying infrastructure, logic, and functionality that powers the frontend.

// How is dynamic webpage content generated - Dynamic content is generated by using the DOM. The DOM reperesents the structure of an HTML document as a tree-like structure, where each element in the document is a node in the tree.

// What steps happen when a client makes a request to a server
/*
1. Client sends a request
2. Server receives the request
3. Server processes the request
4. Server executes server-side code
5. Server prepaes the response
6. Server sends the response
7. Client receives the response
8. Client-side JS executes
9. Client renders the content
*/

// 2.) INTRODUCTION TO FRAMEWORKS

// What is a framework - A framework is a pre-written collection of JS code that provides a structured and reusable solution for developing web applications. It offers a set of libraries, tools, and conventions to simplify the development process and help develioers build complex applications more efficiently

// Describe some popular frameworks
/*
1. React - Developed by Facebook, React is a component-based JS library for building User Interfaces
2. Angular - Developed and maintained by Google, Angular is a comprehensive framework for building web applications
3. Vue.js - A progressive JS framework that is popular for its simplicity and ease of use
*/

// 3.) INTRODUCTION: WHAT IS NODE.JS

// What is Node.js - An open-source, server-side runtime enviroment built on Chrome's V8 JS engine. It allows developers to execute JS code outside of a web browser, enabling the development of server-side and network applications using JavaScript

// What is the event loop - A crucial concept in Node.js responsible for handling asynchronous operations and managing the execution of JS code. It is a key component of Node.js's event-driven, non-blocking I/O architecture

// 4.) GETTING STARTED

// .env Files - Commonly used to store enviroment variables for a project. These variables can include sensitive information like API keys, database credentials, or configuration settings

// HTTP Module - In JS, the built-in 'http' module provides functionality to create HTTP servers and make HTTP requests

// Example to Import the Module:
const http = require('http');

// Example to Create HTTP Server:
const server = http.createServer((request, response) => {
  // Handle the request and send a response
});

// fs Module - Provides functionality for interacting with the file system. It allows you to read from and write to files, create directories, and perform other file-related operations

// Example to Import the Module:
const fs = require('fs');

// Example for Reading Files:
fs.readFile('path/to/file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  // Process the file data
  console.log(data);
});

// Example for Writing to Files:
const data = 'Hello, World!';

fs.writeFile('path/to/file.txt', data, 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File has been written.');
});

// URL Class - Provides methods and properties to work with URLs. It allows you to parse URLs, extract their components, modify them, and construct new URLs

// Example Creating a new URL Object:
const url = new URL('https://www.example.com/path?param1=value1&param2=value2#fragment');

// NPM - Node Package Manager is a package manager that allows you to easily install, manage, and share JavaScript packages and libraries. It is commonly used in Node.js projects to handle dependencies and streamline the development process

// Events - Built-in module that provides a way to handle and emit custom events whithin your applications. The 'events' module is available both in Node.js and modern browsers

// Example Importing the Events Module:
const { EventEmitter } = require('events');

// Example Creating an EventEmitter:
const myEmitter = new EventEmitter();

// Example Listening for Events:
myEmitter.on('myEvent', (arg1, arg2) => {
  console.log('Event triggered with arguments:', arg1, arg2);
});

// 5.) DEBUGGING NODE

// Useful Takeaways
/*
1. Console.log and Console.error - You can place these statements at various points in your code to print out variable values, function outputs, or messages to help track the flow of execution
2. Node Inspector - Allows you to debug your code using the Chrome DevTools interface
3. VS Code Debugger - When using VS code, it provides debugging support for Node.js applications
4. Using the Node.js 'inspect' and 'inspect-brk' flags - You can use these flags directly with Node.js. They enable the built-in debugger and allow you to connect to it using Chrome DevTools or other debugging tools
5. Using the Debugger Statement - The 'debugger' statement is a built-in keyword that triggers a breakpoint in your code. You can place it at any point in your code where you want the execution to pause and allow you to inspect variables and the program state
*/ 