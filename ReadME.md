# TypeScript

### What is TypeScript ?

---

TypeScript is an object-oriented programming language that was designed by Microsoft in the year 2012. This language is considered the superset of JavaScript. TypeScript extends the functionality of JavaScript by adding data types, classes, and other object-oriented features with type-checking. JavaScript is well suited for small-scale applications but TypeScript is used for large-scale applications. TypeScript can be used to develop JavaScript applications for both server-side and client-side execution.

TypeScript programs consist of modules, functions, variables, comments, and expressions like a fully-fledged programming language.

TypeScript code has been written first, then it will be converted to plain JavaScript code using the TypeScript compiler. This is to be done to run the TypeScript code in the browser window. The files of TypeScript are saved with the .ts extension rather than .js which is the extension for saving JavaScript files. Thetsc or the Babel compiler can be used to convert TypeScript to JavaScript.

### Components of TypeScript

---

- Language: It features the TypeScript language elements which consist of elements like syntax, keywords, and, type annotations.

- TypeScript compiler: It is responsible to convert the TypeScript program to its equivalent JavaScript code. The browser is not responsible for executing the TypeScript code directly. That's why the TypeScript code is changed in the code equivalent to the JavaScript code to perform execution in the Browser. For this action to be performed, TypeScript comes with a TypeScript compiler named tsc. TypeScript compiler can be installed on the local machine with the npm package. As soon as the installation completes, the TypeScript file can be compiled by executing the tsc command in the command line.

        npm install typescript --save-dev

  If you are using linux run this command.

        sudo apt install node-typescript

  The bottom statement compiles the index.ts file into the index.js file.

        $ tsc helloworld.ts

- TypeScript Language Services - The TypeScript language service provides the relevant information which helps the editors and other tools to give better features such as IntelliSense and automated refactoring. It supports some standard editor operations like statement completion, signature help, code formatting and outlining, etc.

### Why Use TypeScript?

---

- Object Oriented Programming Language - TypeScript provides support for Object Oriented Programming concepts like Classes, Interfaces, Inheritance, etc. TypeScript code can be written for both client-side and server-side development.

- Supports Type Definitions - It supports type definitions for existing JavaScript libraries. TypeScript definition file that has the .d.ts extension defines external JavaScript libraries.
  Code Readability in TypeScript - Its code is written using classes and interfaces. They provide organization to the program and therefore it is easy to maintain and debug the code.

- TypeScript is Reliable - It has types that care for agility while re-structuring the code. It catches type-related errors at compile time rather than waiting for the runtime.

- Static Type Checking - TypeScript uses static typing which is done using type annotations. It helps type checking at compile time. Hence, errors can be found while typing the code without running the code every time.

### Referance

---

[Link : Scaler topics](https://www.scaler.com/topics/what-is-typescript/)
