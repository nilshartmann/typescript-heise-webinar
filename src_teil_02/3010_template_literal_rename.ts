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
//   -> wenn das Ding bereits mit 'get'-anfängt soll der Name unverändert zurückkommen!

declare function generateGetterName(name: string): unknown;

expectTypeOf(generateGetterName("firstname")).toEqualTypeOf<"getFirstname">();
// hmm...
expectTypeOf(
  generateGetterName("getFirstname")
).toEqualTypeOf<"getGetFirstname">();
