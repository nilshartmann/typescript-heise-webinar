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

// Diesen Funktion kann ein Objekt validieren.
//  -> Sie soll nun allerdings nur *Teile* eines Objektes validieren
//  -> welche, gibt man als 2., 3. etc. Parameter an
//  -> wenn man keine Keys angibt, sollen alle Keys validiert werden
//

type ValidationResult<O extends object> = {
  [K in keyof O]: boolean;
};

declare function validate<O extends object>(o: O): ValidationResult<O>;

const person = {
  firstname: "Peter",
  lastname: "Meier",
  age: 43,
};
