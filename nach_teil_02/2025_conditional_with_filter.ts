import { Flatten } from "./flatten";
import { Equal, Expect } from "type-testing";

export default undefined;

// Die folgende Funktionen macht ausgewählte Properties eines Objektes readonly
//   -> wie sieht der Typ dafür aus?
//   -> können wir einen Typen bauen, der Keys AUSSCHLIESST?

type Person = {
  firstname: string;
  age: number;
};

type ExcludeKeys<K, EK extends K> = K extends EK ? never : K;

type E_test = Expect<
  Equal<ExcludeKeys<"a" | "b" | "c" | "d", "a" | "b">, "c" | "d">
>;
type E_test2 = Expect<
  Equal<ExcludeKeys<string | boolean | number, boolean>, string | number>
>;

type PartialReadonly<O extends object, Keys extends keyof O> = {
  readonly [K in Keys]: O[K];
} & {
  [K in ExcludeKeys<keyof O, Keys>]: O[K];
};

type ExpectedPerson = {
  readonly firstname: string;
  age: number;
};

type PartialPerson = Flatten<PartialReadonly<Person, "firstname">>;

type test_t = Expect<Equal<ExpectedPerson, PartialPerson>>;

declare function makeReadonly<O extends object, Keys extends keyof O>(
  o: O,
  key: Keys
): PartialReadonly<O, Keys>;

const person = {
  firstname: "Klaus",
  age: 32,
};

const readonlyPerson = makeReadonly(person, "firstname");
