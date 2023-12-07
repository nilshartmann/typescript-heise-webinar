export default undefined;

// 1. string | null
// 3. string | null | object | objekt
// 4. string | null | object | objekt (mit "in")
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

// Diese Funktion soll ein Argument haben,
//  das entweder ein string, null, oder Person oder Animal oder Team sein darf
//  -> wie kann in der Funktion mit den Werten gearbeitet werden?

function sayHello(p: string | null | Person | Animal | Team) {
  if (p === null) {
    // Type Guard
    return "Leider kein Hello möglich";
  }

  if (p instanceof Team) {
    // Type Guard
    return p.teamName.toLowerCase();
  }

  if (typeof p === "object") {
    // Type Guard
    if ("firstName" in p) {
      // Type Guard
      return p.firstName.toLocaleLowerCase();
    }
    return p.name.toLocaleLowerCase();
  }

  return p.toLowerCase();
}
