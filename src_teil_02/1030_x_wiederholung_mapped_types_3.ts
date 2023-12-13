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

type ValidatorFactory<O> = {
  [K in keyof O]: (valueToValidate: O[K], key: K, object: O) => boolean;
};

declare function makeValidator<O extends object>(o: O): ValidatorFactory<O>;

const person = {
  firstname: "Peter",
  age: 43,
};

const r = makeValidator(person);

r.age(22, "age", person);
r.age(22, "firstname", person); // ERROR
