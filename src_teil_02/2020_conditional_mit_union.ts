import { expectTypeOf } from "vitest";

export default undefined;

// TODO:
// - NullOrNumber Type definieren
// - Beispiele mit NullOrNumber
//   - NullOrNumber<A|B|C> = NullOrNumber<A>|NullOrNumber<B>|NullOrNumber<C>
// - NullOrNumber in der Funktionssignatur
// - Tests

// diese Funktion kann die Größe des übergebenen Wertes berechnen...
//  - wenn null übergeben wird => null
//  - in allen anderen Fällen => number
//  -> was passiert wenn wir für O einen Union Type angeben?
declare function getSize<O>(o: O): unknown;
