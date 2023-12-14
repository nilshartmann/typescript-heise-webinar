import { Equal, Expect, IsNever } from "type-testing";
import { expectTypeOf } from "vitest";

export default undefined;

// TODO
//  - Erst GetterName
//  - Dann "BetterGetterName", einfaches infer string, und GetterName verwenden
//
//
//
//
//
//
// - Die Funktion liefert fuer ein Property den Namen der getter-Funktion zurück
//   - firstname -> getFirstname
//   - getLastname -> getLastname
//   -> wenn der Name bereits mit 'get'-anfängt soll der Name unverändert zurückkommen!

type GetterName<N extends string> = `get${Capitalize<N>}`;

type BetterGetterName<N extends string> = N extends `get${string}`
  ? N
  : GetterName<N>;

declare function generateGetterName<N extends string>(
  name: N
): BetterGetterName<N>;

const x = generateGetterName("firstname");
//    ^?

const y = generateGetterName("getLastname");
//    ^?

expectTypeOf(generateGetterName("firstname")).toEqualTypeOf<"getFirstname">();
// hmm...
expectTypeOf(
  generateGetterName("getFirstname")
).toEqualTypeOf<"getGetFirstname">();
