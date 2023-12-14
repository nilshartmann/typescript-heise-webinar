export default undefined;

// TODO Schritte:
// - person-Objekt anlegen
// - Validator-Factory-Typ
//
//
//
//
//
//
//
//
// makeValidator soll ein Objekt entgegen nehmen,
//  als Rückgabe Funktion kommt ein Objekt mit Validator-Funktionen
//  - eine Validator Funktion besteht aus drei Parameter:
//     1. dem zu validieren Wert
//     2. dem Namen des Keys
//     3. dem kompletten Objekt
//   (2+3 sind etwas redundant, nur für Demo hier)
//

type ValidatorObject<O extends object> = {
  [K in keyof O]: (
    valueToValidate: O[K],
    propertyName: K,
    source: O
  ) => boolean;
};

declare function makeValidator<O extends object>(o: O): ValidatorObject<O>;

const person = {
  firstname: "Peter",
  age: 43,
};

const r = makeValidator(person);
r.age;
// ^?
r.firstname;
// ^?

r.age(22, "age", { age: 32, firstname: "Susi" });
r.age(22, "firstname", person); // ERROR
r.firstname("Susi", "firstname", person); // OK
