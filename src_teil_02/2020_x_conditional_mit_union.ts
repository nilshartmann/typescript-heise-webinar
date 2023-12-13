import { Equal, Expect } from "type-testing";
import { expectTypeOf } from "vitest";

export default undefined;

type NullOrNumber<N> = N extends null ? null : number;

// diese Funktion kann die Größe des übergebenen Wertes berechnen...
//  - wenn null übergeben wird => null
//  - in allen anderen Fällen => number
//  -> was passiert wenn wir für O einen Union Type angeben?
//  -> was passiert mit never?
//     -> mit null|never aufrufen

declare function getSize<O>(o: O): NullOrNumber<O>;
const a: number = getSize(123);
const b: number = getSize("huhu");
const c: null = getSize(null);
const d: number = getSize<string | number>(123);
const e: number | null = getSize<string | number | null>(123);

expectTypeOf(getSize("123")).toEqualTypeOf<number>();
expectTypeOf(getSize("huhu")).toEqualTypeOf<number>();
expectTypeOf(getSize(null)).toEqualTypeOf<null>();
expectTypeOf(getSize<string | number>(123)).toEqualTypeOf<number>();
expectTypeOf(getSize<string | number | null>(123)).toEqualTypeOf<
  number | null
>();

type R = NullOrNumber<string | null | boolean>;
//   ^?

// Jeder Typ wird einzeln geprüft, doppelte werden entfernt:
// - 'string' wird zu 'number'
// - 'null' wird null (kein string)
// - 'boolean' wird null (kein string)

// das obige Beispiel entspricht diesem hier:
type R2 = NullOrNumber<string> | NullOrNumber<null> | NullOrNumber<boolean>;
//   ^?

// never fliegt immer raus:
type A = string | null | never | boolean;
type X = Expect<Equal<A, string | null | boolean>>;
//   ^?
