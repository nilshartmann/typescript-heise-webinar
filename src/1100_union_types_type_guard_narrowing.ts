export default undefined;

// 1. string | null
// 2. string | null | boolean
// 3. string | null | boolean | object | objekt
// 4. string | null | boolean | object | objekt (mit "in")
//  Type Guards
//  Type Narrowing
//  typeof Problematik

//
type Person = {
  firstName: string;
  age: number;
};

type Animal = {
  name: string;
  species: string;
};

function sayHello() {}
