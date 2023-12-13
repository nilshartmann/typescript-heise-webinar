import { ZodError, z } from "zod";
import { expect, test } from "vitest";

declare function fetch(): unknown;

// EVTL SPÄTER (BEISPIEL FÜR MAPPED TYPE)
// Wir bekommen vom Server Daten
//  wie können wir die Validieren?

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
