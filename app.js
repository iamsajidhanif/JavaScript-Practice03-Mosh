
// ==========================================================================
//                          JavaScript Engine
// ==========================================================================
// Chrome: v8
// FireFox: SpiderMonkey

// ==========================================================================
//                              NodeJS
// ==========================================================================
// - We can use Node as backend.
// - Node is a runtime environment of JavaScript.
// - We can run JavaScript code out-side the browser with the help of NodeJS.
// - NodeJS is a C++ Program, in which v8 engine of Google has also been included.
// - We can run the JavaScript code with the following command in terminal:
//   node app.js

// ==========================================================================
//                          Script Tag Palcement
// ==========================================================================
// Script tag should be menitioned in the body tag, at the last line.

// ==========================================================================
//                            Variable Name
// ==========================================================================
// 1. Cannot be a reserved keyword.
// 2. Should be meaningful.
// 3. Cannot start with a number (3name)
// 4. Cannot contain a space or hyphen (-)

// ==========================================================================
//                      Data Types in JavaScript
// ==========================================================================
// 1. Primitives Types / Value Types:
//      1. String (String Literal)
//      2. Number (Number Literal)
//      3. Boolean (Boolean Literal)
//      4. undefined 
//      5. null

// 2. Reference Types
//      1. Array (for multiple values)
//      2. Object (for an object with different properties, key value pairs)
//      3. Function (for repeatative tasks)

// ==========================================================================
//              Accessor (Dot Notation & Bracket Notation)
// ==========================================================================
// let person = {
//     name: 'Wadood',
//     age: 30
// }
// // - Dot Notation
// person.name = 'Ahmed';

// // - Bracket Notation
// person['name'] = 'Faisal';

// --------------------------------------------------------------------------
// We can access an array's properties with "dot notation".
// --------------------------------------------------------------------------
// let selectedColor = ['red', 'blue']
// console.log(selectedColor.length) // length is a property of the array

// ==========================================================================
//              Statically-typed & Dynamically-types Languages
// ==========================================================================
// - JavaScript is a Dynamically-typed language.
// - When we change the value of a String variable to a number, it will also change the type of that variable from "string" to "number".
// - Most of the languages are Statically-typed languages.

// --------------------------------------------------------------------------
// Dynamically-typed Example:
// --------------------------------------------------------------------------
// let Course = 'JavaScript';
// console.log(typeof Course); // string

// Course = 100;
// console.log(typeof Course); // number

// --------------------------------------------------------------------------
// typeof "null" data type:
// --------------------------------------------------------------------------
// let name = 'Mosh';
// console.log(typeof name) // string

// let age = 30;
// console.log(typeof age); // number

// let isApproved = false;
// console.log(typeof isApproved); // boolean

// let firstName = undefined;
// console.log(typeof firstName); // undefined

// let taxDeduction = null;
// console.log(typeof taxDeduction); // object (The typeof a null is "object").

// ==========================================================================
//          Parameter is not accessable out-side the function
// ==========================================================================
// 1. Performing a task
// function greet(name) {
//     console.log('Hello' + name);
// }
// greet('Sajid'); // Hello Sajid

// console.log(name); // NOTE: name parameter is not accessable out-side the function

// 2. Calculating a value
// function square(number) {
//     return number * number;
// }
// console.log(square(2)); // 4



























