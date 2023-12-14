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

type InferUnit<S extends string> = S extends `${number} ${infer U extends Unit}`
  ? U
  : never;

declare function parseSpacing<S extends string>(s: S): InferUnit<S>;

const p = parseSpacing("333 em");

expectTypeOf(parseSpacing("333 rem")).toEqualTypeOf<"rem">();

expectTypeOf(parseSpacing("3 em")).toEqualTypeOf<"em">();

type InferUnitR<S extends string> = S extends `${number}${infer U}`
  ? InferUnitR<U>
  : S extends Unit
  ? S
  : never;

type X = InferUnitR<"123rem">;
type A = InferUnitR<"rem">;
type Z = InferUnitR<"123px">;
