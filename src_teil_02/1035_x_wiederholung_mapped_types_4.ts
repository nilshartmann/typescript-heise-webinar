import { Equal, Expect } from "type-testing";
import { Flatten } from "./flatten";

export default undefined;
// TODO Schritte:
//   - ValidationResult-Typen bauen; hier wird nicht mit K in keyof... gearbeitet sondern, die
//     die Keys werden übergbene
//     -> zeigen!
//   - Zweiter Parameter erstmal ein Key
//   - dann mit Rest-Operator
//   - Tests

// Diesen Typen haben wir geben gebaut!
// Unsere validate-Funktion soll nicht ALLE Einträge validieren,
// sondern nur solche die man (als 2.,3.4,.... Parameter) der validate-Funktion übergibt...
// -> wenn die Keys nicht angegeben werden, sollen alle Keys validiert werden
//

type ValidationResult<O, Keys extends keyof O> = {
  [K in Keys]: boolean;
};

declare function validate<O extends object, Keys extends keyof O>(
  o: O,
  ...keys: Keys[]
): ValidationResult<O, Keys>;

const person = {
  firstname: "Peter",
  lastname: "Meier",
  age: 43,
};

const r = validate(person, "age");
type test_r = Expect<
  Equal<
    {
      age: boolean;
    },
    typeof r
  >
>;

const r2 = validate(person, "age", "firstname");
type test_r2 = Expect<
  Equal<
    {
      age: boolean;
      firstname: boolean;
    },
    typeof r2
  >
>;

const r3 = validate(person);
type test_r3 = Expect<
  Equal<
    {
      age: boolean;
      firstname: boolean;
      lastname: boolean;
    },
    typeof r3
  >
>;
