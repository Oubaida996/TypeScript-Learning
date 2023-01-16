//  Array

let nums: number[] = [1, 12, 1.2]; // infered to type number
let names: string[] = ['Ali', 'Omar', 'Musa']; // infered to type string

// Tuple Array
// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.

let tupleArray: [string, number] = ['Esam', 15];

// Named tuples  allow us to provide context for our values at each index.

let dimensions: [width: number, height: number] = [5, 10];

//  Mixture of Types in an Array
let mixArray: (string | number | Date)[] = [12, new Date(), 'ddd', 'dds'];
