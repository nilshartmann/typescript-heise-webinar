export default undefined;

import { Equal, Expect } from "type-testing";
import { expectTypeOf } from "vitest";

// Wir haben diesen Typen und die folgende Funktion
//  -> wie können wir testen, dass die Funktion funktioniert?
//  -> wie können wir testen, dass der *Typ* funktioniert?

type ValidationResult<O> = {
  [K in keyof O]: boolean;
};

declare function validate<O extends object>(o: O): ValidationResult<O>;

const person = {
  firstname: "Klaus",
  age: 32,
};

type Person = typeof person;

type test_isString = Expect<Equal<string, string>>;

type test_x = Expect<
  Equal<
    {
      firstname: boolean;
      age: boolean;
    },
    ValidationResult<Person>
  >
>;

expectTypeOf(validate(person)).toEqualTypeOf<{
  firstname: boolean;
  age: boolean;
}>();
