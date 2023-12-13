import { Equal, Expect, IsNever } from "type-testing";
import { expectTypeOf } from "vitest";

export default undefined;
type Unit = "rem" | "em";

type InferUnit<S extends string> = S extends `${number} ${infer U extends Unit}`
  ? U
  : never;

declare function parseSpacing<S extends string>(s: S): InferUnit<S>;

const p = parseSpacing("333 rem");

expectTypeOf(parseSpacing("333 rem")).toEqualTypeOf<"rem">();

// was passiert, wenn wir das ohne Leerzeichen wollen?
type ShouldBeRem = InferUnitR<"2em">;
//    ^?
type InferUnitR<S extends string> = S extends `${number}${infer U}`
  ? InferUnitR<U>
  : S extends Unit
  ? S
  : never;

type t1 = Expect<Equal<"em", InferUnitR<"2em">>>;
type t2 = Expect<Equal<"rem", InferUnitR<"2rem">>>;
type t3 = Expect<Equal<"rem", InferUnitR<"25rem">>>;
type t4 = Expect<IsNever<InferUnitR<"25">>>;
