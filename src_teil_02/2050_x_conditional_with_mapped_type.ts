import { Equal, Expect } from "type-testing";
import { expectTypeOf } from "vitest";

export default undefined;

// Die createProxy-Funktion bekommt ein Objekt übergeben,
//  sie liefert ein Objekt mit setter-Funktionen zurück
//  - die setter-Funtkionen heissen zunächst wie im Original-Objekt
//  - wenn eine Eigenschaft im Original-Objekt eine Funktion ist, soll deren
//    Paramter gesetzt werden (nicht die Funktion)

declare function createProxy<O extends object>(o: O): ProxyObject<O>;

const person = {
  firstname: "Klaus",
  age: 32,
  setLastname(_: string) {
    return true;
  },
};

// der Typ muss entstehen:
type PersonProxy = {
  firstname: (newValue: string) => void;
  age: (newValue: number) => void;
  setLastname: (newValue: string) => void;
};

// Schritte
//  - a: infer A  mit MELDUNG!

type ProxyObject<O extends object> = {
  [K in keyof O]: O[K] extends (a: infer A) => any
    ? (newValue: A) => void
    : (newValue: O[K]) => void;
};

type PP = ProxyObject<typeof person>;

type test_PP = Expect<Equal<PersonProxy, PP>>;
expectTypeOf(createProxy(person)).toEqualTypeOf<PersonProxy>();
