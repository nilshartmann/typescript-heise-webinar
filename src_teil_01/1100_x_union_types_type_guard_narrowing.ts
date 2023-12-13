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
  lastName: string;
};

interface Animal {
  name: string;
  species: string;
}

class Team {
  constructor(public teamName: string) {}
}

function sayHello(p: string | null | Person | Animal | Team) {
  if (!p) {
    // <-- Type Guard
    // welcher Typ ist p hier?
    return "";
  }

  if (typeof p === "string") {
    // <-- Type Guard
    return p.toLowerCase();
  }

  if (p instanceof Team) {
    // <-- Type Guard (class'es sind zur Laufzeit bekannt!)
    return p.teamName.toLowerCase();
  }

  if ("firstName" in p) {
    // <-- Type Guard
    return `Hello ${p.firstName}, ${p.lastName}`;
  }

  return `Hello ${p.name}!`;
}
