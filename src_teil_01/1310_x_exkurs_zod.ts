import { ZodError, z } from "zod";
import { expect, test } from "vitest";

declare function fetch(): unknown;

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

// wie müsste validatePerson aussehen?
function fetchPerson() {
  const person = fetch();

  if (person && typeof person === "object") {
    // firstName prüfen
    // lastName prüfen
    //  Länge von lastName prüfen
    // age prüfen
    // => OK
    handlePerson(p);
  }

  // FEHLER
}

declare function handlePerson(p: TPerson): void;

// Zod!
// -> Objekt definieren
// -> Test
// -> Typ herleiten

const Person = z.object({
  firstName: z.string().optional(),
  lastName: z.string().min(5),
  age: z.number(),
});

test("person", () => {
  expect(() => Person.parse({})).toThrow(ZodError);
  expect(
    Person.parse({
      firstName: "Klaus",
      lastName: "Mueller",
      age: 32,
    })
  ).toEqual({
    firstName: "Klaus",
    lastName: "Mueller",
    age: 32,
  });

  expect(() =>
    Person.parse({
      firstName: "Klaus",
      lastName: "Hans",
      age: 32,
    })
  ).toThrow(ZodError);
});

function fetchFromServerZod() {
  const response = fetch();

  const person = Person.parse(response);

  handlePerson(person);
}

// Typ mit Zod generieren:

type IPerson = z.infer<typeof Person>;

declare function handlePersonZod(p: IPerson): void;

// ...nun brauchen wir den TS Typen nicht mehr!
