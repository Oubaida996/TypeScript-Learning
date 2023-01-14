// This function will return value of tyme number
function sum(x: number, y: number): number {
  return x + y;
}

// This function will not return any thing so we use 'void' type
// You can use the 'any' type to return any thing.
function printText(text: string): void {
  console.log(text);
}

let subtraction = (a: number, b: number): number => {
  return a / b;
};

// Just for example How I can use  a few of types!
let multiplication = (a: number | string, b: number): number | string => {
  return 'yes';
};
