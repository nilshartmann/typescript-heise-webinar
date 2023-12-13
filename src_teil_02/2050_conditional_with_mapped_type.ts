import { Equal, Expect } from "type-testing";
import { expectTypeOf } from "vitest";

export default undefined;

//
// Schritte
//  - a: infer A  mit MELDUNG!
//  - Fertig machen
//  - Testen mit PersonProxy

// Die createProxy-Funktion bekommt ein Objekt übergeben,
//  sie liefert ein Objekt mit setter-Funktionen zurück
//  - die setter-Funtkionen heissen zunächst wie im Original-Objekt
//  - wenn eine Eigenschaft im Original-Objekt eine Funktion ist, soll deren
//    Paramter gesetzt werden (nicht die Funktion)

declare function createProxy(o: unknown): unknown;

const person = {
  firstname: "Klaus",
  age: 32,
  setLastname(_: string) {
    return true;
  },
};

// der Typ folgende muss entstehen:

type PersonProxy = {
  // ...
};
