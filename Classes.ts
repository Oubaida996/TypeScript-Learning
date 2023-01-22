// Create a new class called Person

class Person {
  constructor() {
    console.log('Constructor called');
  }
}

// You can then create a new instance of the Person class by using the new keyword followed by the name of your class and then an empty parameter list (which may be omitted),

const personInstance = new Person();

// You can think of the class itself as a blueprint for creating objects with the given shape, while instances are the objects themselves, created from this blueprint.

// When working with classes, most of the time you will need to create a constructor function. A constructor is a method that runs every time a new instance of the class is created. This can be used to initialize values in the class.

// Access modifire  : How I can access into properties or methods inside classes, and there are three types (private , protected , public as defult).
//private : I can't access into properties or methods from out the class itself.
//protected : I just can access into properties or methods form subclass.
//public : I can access into into properties or methods from anywhere.

// public color:string it represents the property or field for Car class
//Ex:
/*  
class Car{
  color:string;
  constructor(c:string){
    this.color =c;
  }
} 
*/

class Car {
  constructor(public model: string) {
    console.log('Car class' + model);
  }
}

// Inhertance :

class Ford extends Car {
  constructor() {
    super('2012');
  }
}

let ford1 = new Ford();
