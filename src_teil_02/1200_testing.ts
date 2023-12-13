import { Equal, Expect } from "type-testing";
import { expectTypeOf } from "vitest";

export default undefined;

// In mühevoller Arbeit haben wir diesen Typen entwickelt.
//
//  - Wie können wir sicherstellen, dass der auch funktioniert?
//  - Wie können wir ihn testen?

type ValidationResult<O> = {
  [K in keyof O]: boolean;
};

declare function validate<O extends object>(o: O): ValidationResult<O>;

const person = {
  firstname: "Klaus",
  age: 32,
};
