export default undefined;

// TODO Schritte:
// - person-Objekt anlegen
// - Validator-Factory-Typ

// makeValidator soll ein Objekt entgegen nehmen,
//  als Rückgabe Funktion kommt ein Objekt mit Validator-Funktionen
//  - eine Validator Funktion besteht aus drei Parameter:
//     1. dem zu validieren Wert
//     2. dem Namen des Keys
//     3. dem kompletten Objekt
//   (2+3 sind etwas redundant, nur für Demo hier)
//

declare function makeValidator(o: unknown): unknown;

const person = {
  firstname: "Peter",
  age: 43,
};
