// To define the type aliases we need to use 'type' keyword in typeScript

type mixTypes = string | number;

let FirstName: mixTypes = 'ali';

FirstName = 12;

// We can use the feature of aliases to improve the form of object type

// the past way to declear the obj
let obj1: { id: number; name: string; age: number } = {
  id: 1245,
  name: 'Omar',
  age: 16,
};

type userDate = { id: number; name: string; age: number };

let obj2: userDate = {
  id: 1245,
  name: 'Omar',
  age: 16,
};

console.log(obj2);
