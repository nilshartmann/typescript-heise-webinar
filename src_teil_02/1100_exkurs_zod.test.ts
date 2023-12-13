import { ZodError, z } from "zod";
import { expect, expectTypeOf, test } from "vitest";
import { Equal, Expect } from "type-testing";

// - "Symbolisch" in fetchPerson Daten "validieren"
//   (nur zeigen, was man machen müsste)
// - Zod-Objekt definieren
// - Zod-Test schreiben
// - Von Zod Typ herleiten lassen
//   -> das geht!
// - mit Vite expectTypeOf(...).toEqualTypeOf() Typ überprüfen
//   -> Ausblick auf später

declare function fetch(): unknown;

// Wir bekommen vom Server Daten
//  - wie können wir die Validieren?
//  - wie können wir sicherstellen, dass sie
//    zu unserem TS Typen TPerson passen?

// So sieht unser Objekt aus, das wir vom Server erwarten:
type TPerson = {
  firstName?: string;
  /** Mindest-Länge: fünf Zeichen! */
  lastName: string;
  age: number;
};

// Das wollen wir machen:

// 1. Person vom Server lesen
// 2. Geladene Daten validieren
// 3. Validierte Daten an handlePerson übergeben

declare function handlePerson(p: TPerson): void;

function fetchPerson() {}
