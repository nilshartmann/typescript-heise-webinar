export default undefined;
// TODO Schritte:

// - person-Objekt anlegen
// - Validator-Factory-Typ
// - Spoiler für Teil 2:  wir können Keys umbennenen

// makeValidator soll ein Objekt entgegen nehmen,
//  als Rückgabe Funktion kommt ein Objekt mit Validator-Funktionen
//  - eine Validator Funktion besteht aus drei Parameter:
//     1. dem zu validieren Wert
//     2. dem Namen des Keys
//     3. dem kompletten Objekt
//   (2+3 sind etwas redundant, nur für Demo hier)
//

type Validator<O extends object> = {
  [K in keyof O]: (valueToValidate: O[K]) => boolean;
};
declare function makeValidator<O extends object>(o: O): Validator<O>;

const person = {
  firstname: "Peter",
  age: 43,
};

const result = makeValidator(person);
result.age(355);
result.firstname("Klaus");

type Person = typeof person;
// type VPerson = Validator<Person>

// Ziel-Objekt, das aus makeValidator zurückkommt:
// const vPerson = {
//   firstname(v: string) { return true },
//   age(v: number) { return false }
// }
