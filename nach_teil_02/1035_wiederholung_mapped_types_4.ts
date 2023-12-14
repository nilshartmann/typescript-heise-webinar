import { Equal, Expect } from "type-testing";
import { expectTypeOf } from "vitest";
import { Flatten } from "./flatten";

export default undefined;
// TODO Schritte:
//   - ValidationResult-Typen bauen; hier wird nicht mit K in keyof... gearbeitet sondern, die
//     die Keys werden übergbene
//     -> zeigen!
//   - Zweiter Parameter erstmal ein Key
//   - dann mit Rest-Operator
//   - Tests

// Diesen Funktion kann ein Objekt validieren.
//  -> Sie soll nun allerdings nur *Teile* eines Objektes validieren
//  -> welche, gibt man als 2., 3. etc. Parameter an
//  -> wenn man keine Keys angibt, sollen alle Keys validiert werden
//

type ValidationResult<O extends object, Keys extends keyof O> = {
  [K in Keys]: boolean;
};

// declare function validate<O extends object, Keys extends keyof O>
//   (o: O, keys?: Keys[]): Flatten<ValidationResult<O, Keys>>;

declare function validate<O extends object, Keys extends keyof O>(
  o: O,
  ...keys: Keys[]
): Flatten<ValidationResult<O, Keys>>;

const person = {
  firstname: "Peter",
  lastname: "Meier",
  age: 43,
};

// const r = validate(person, ["firstname", "age", "city"]);

// -----------> TestMethode

const r = validate(person, "firstname", "age");

type ExpectedResult = {
  firstname: boolean;
  age: boolean;
};

// expect-type
// Vite vitest
expectTypeOf(r).toEqualTypeOf<ExpectedResult>();

// <--------------

type ValidatedPerson = ValidationResult<typeof person, "firstname" | "age">;
type r_tests = Expect<Equal<ValidatedPerson, ExpectedResult>>;

const f: boolean = r.firstname;
const g: boolean = r.age;
