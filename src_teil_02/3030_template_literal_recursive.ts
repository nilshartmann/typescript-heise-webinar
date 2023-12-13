import { Equal, Expect, IsNever } from "type-testing";
import { expectTypeOf } from "vitest";

export default undefined;

// TODO
//   - InferUnit-Type
//   - Recursive InferUnit-Type (${number}${infer U})
//
//
//
//
//
//
//
// Die folgende Funktion parst einen String mit einer Größen-Angabe
//  im folgenden Format:
//  "2 rem", oder "14 em"
//  Bei anderen Angaben (z.B. "2 cm") soll 'never' zurückgegeben werden
//  - Zusatz:
//     -> Exkurs: Können wir Capitalize selbst bauen?
//     -> Die Funktion soll die Strings ohne Leerzeichen parsen

type Unit = "rem" | "em";
declare function parseSpacing<S extends string>(s: S): unknown;

const p = parseSpacing("333 rem");

expectTypeOf(parseSpacing("333 rem")).toEqualTypeOf<"rem">();

expectTypeOf(parseSpacing("3 em")).toEqualTypeOf<"em">();
