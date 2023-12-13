import { Flatten } from "./flatten";
import { Equal, Expect } from "type-testing";

export default undefined;

declare function makeReadonly<O extends object, Keys extends keyof O>(
  object: O,
  keys: Keys
): PartialReadonly<O, Keys>;

type ExcludeKeys<K, Excluded extends K> = K extends Excluded ? never : K;

type X = ExcludeKeys<"A" | "b" | "c", "c" | "A">;
type test_X = Expect<Equal<X, "b">>;

type PartialReadonly<O extends object, Keys extends keyof O> = {
  readonly [K in Keys]: O[K];
} & {
  [K in ExcludeKeys<keyof O, Keys> as K extends Keys ? never : K]: O[K];
};

const person = {
  firstname: "Klaus",
  age: 32,
};

const rPerson = makeReadonly(person, "firstname");
type t = Flatten<typeof rPerson>;
type test_rPerson = Expect<
  Equal<
    t,
    {
      readonly firstname: string;
      age: number;
    }
  >
>;
