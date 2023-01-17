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

  If you Want to run ts file we need to convert it to js file then run the command

        $ tsc index.ts
        $ node index.js

  The bottom statement compiles the index.ts file into the index.js file.

        $ tsc index.ts

Now if you change any thing iside index.ts file you should compilt it again or you can create cofig typeScript file and install watch package to listen automaticlly into any change happen iside index.ts file.

To create configure file of typeScript run the command

      $ tsc --init

then run the command

      $ tsc --watch

Now we can shortcut all above things using the commend after install the package

      $ npm i ts-node -g

      $ ts-node index.ts

- TypeScript Language Services - The TypeScript language service provides the relevant information which helps the editors and other tools to give better features such as IntelliSense and automated refactoring. It supports some standard editor operations like statement completion, signature help, code formatting and outlining, etc.

### Why Use TypeScript?

---

(Catch bugs before run on browser, Types to discripe your code , Fully oop )

- Object Oriented Programming Language - TypeScript provides support for Object Oriented Programming concepts like Classes, Interfaces, Inheritance, etc. TypeScript code can be written for both client-side and server-side development.

- Supports Type Definitions - It supports type definitions for existing JavaScript libraries. TypeScript definition file that has the .d.ts extension defines external JavaScript libraries.
  Code Readability in TypeScript - Its code is written using classes and interfaces. They provide organization to the program and therefore it is easy to maintain and debug the code.

- TypeScript is Reliable - It has types that care for agility while re-structuring the code. It catches type-related errors at compile time rather than waiting for the runtime.

- Static Type Checking - TypeScript uses static typing which is done using type annotations. It helps type checking at compile time. Hence, errors can be found while typing the code without running the code every time.

---

### Type system in typeScript

---

There are for primitive types in typeScript as same as JS

- string : 'Ali'
- number : 5 , 0.5
- bollean: true / false
- Date : 01-12-2023

and there is a Cutome Type that you can created as {id , name , age}

Note : you can't create any const or varibale without determine the type of it, if you don't determine the type, the typeScript compiler will gess the type depend on the value.

      let name:string    = 'Ali';
      let toogle:boolean = true;
      let age:number     = 15;
      let birthDate:Date = new Date();

      let lastName = 'Omar' ;

the type of lastName is string depend on the value.

TypeScript has a special type callled, any, that you can use whenever you don't want a particular value to cause type cheking errors.

When a value is of type any, you can assign any vaule to it like string or number ..etc

let obj:any = 'Ahmad'
obj =15;

#### Array :

A special type of data type that which can store multiple values of different data types sequentially using a special syntax.

#### Object Types :

The fundemental way that we group and pass around data is through objects.
the object contains properties that represent the non-primitvie data (primitive data as string, number, boolean, undefined, null, Date).

Each property in an object type must have a type that represent it.

#### Custome Types :

- Type Aliases :
  It creates a new name for a type.
  it doesn't actually create a new type - it creates a new name to refer to the type.

#### The benifits of types inside typeScript :

- Catch the error before Runtime the code.
- Discripe your code

---

### Referance

---

[Link : Scaler topics](https://www.scaler.com/topics/what-is-typescript/)
