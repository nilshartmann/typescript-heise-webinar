import { Equal, Expect, IsNever } from "type-testing";
import { expectTypeOf } from "vitest";

export default undefined;

// - Die Funktion liefert fuer ein Property den Namen der getter-Funktion zurück
//   - firstname -> getFirstname
//   -> wenn das Ding bereits mit 'get'-anfängt soll der Name unverändert zurückkommen!

type GetterName<S extends string> = `get${Capitalize<S>}`;

declare function generateGetterName<S extends string>(name: S): GetterName<S>;

expectTypeOf(generateGetterName("firstname")).toEqualTypeOf<"getFirstname">();
// hmm...
expectTypeOf(
  generateGetterName("getFirstname")
).toEqualTypeOf<"getGetFirstname">();

// Pattern Matching !
type PreservingGetterName<S extends string> = S extends `get${string}`
  ? S
  : GetterName<S>;

type test_p = Expect<
  Equal<"getFirstname", PreservingGetterName<"getFirstname">>
>;
type test_p2 = Expect<Equal<"getFirstname", PreservingGetterName<"firstname">>>;
