// String Literal type

type CardinalDirection = 'North' | 'East' | 'South' | 'West';

// you can't assign a new value out of CardinalDirection values 'North' |         'East' |  'South' | 'West'

// let direction:CardinalDirection = 'omar' // Wrong

let direction: CardinalDirection = 'East'; // Right

// Number Literal type

type OneToFive = 1 | 2 | 3 | 4 | 5;

// Boolean Literal type
type Bools = true | false;
