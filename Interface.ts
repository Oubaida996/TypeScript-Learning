// is an abstract type that tells the compiler which property names a given object can have.

// An interface describes the shape of an object in TypeScript. They can be used to provide information about object property names and the datatypes their values can hold to the TypeScript compiler. An interface adds the functionality of strong type checking for your functions, variables, or the class that is implementing the interface.

// Interfaces make sure that everything is implemented as expected.

// To declare an interface using interface keyword.

interface Dimension {
  width: string;
  height: string;
}

// The difference  between 'interface' and 'type' declaration and inheritance.

// type userDate = { id: number; name: string; age: number };

let obj3: Dimension = {
  width: '10px',
  height: '20px',
  sum(n1, n2) {
    return n1 + n2;
  },
  space(n1, n2) {
    return n1 * n2;
  },
};

// We can add new properties into interface that called 're-opern' interface

//Here we add a function into Dimension interface
interface Dimension {
  sum?: (n1: number, n2: number) => number; // Arrow function
  space?(number1: number, number2: number): number; // Normal functoin
}

// Inheritance

interface Size extends Dimension {
  thickness: string;
  size(height: number, width: number, thickness: number): number;
}

let obj4: Size = {
  height: '10px',
  width: '520px',
  thickness: '0.8px',
  size(height, width, thickness) {
    return height * width * thickness;
  },
};

console.log(obj4.size(4, 5, 1));
