import { Equal, Expect } from "type-testing";
import { expectTypeOf } from "vitest";

export default undefined;

// Diese Funktion prüft einen Wert und liefert den zurück
//  - wenn o eine Funktion ist, ruft sie die Funktion auf,
//    prüft deren RÜCKGABE-WERT
//    und liefert den RÜCKABE-WERT zurück
declare function check<O>(o: O): O extends () => infer ARG ? ARG : O;

type GetSecondArgument<X> = X extends (a: any, b: infer B) => any
  ? B
  : "Kein zweiter Parameter!";

declare function a(a: string, b: number): void;
type SecondArg = GetSecondArgument<typeof a>;

// Beispiele:
const c: number = check(() => 123); // Rückgabetyp von 'check' soll number sein
const h: string = check(() => "Hallo"); // Rückgabetyp von 'check'  soll string sein

const f: boolean = check(false); // Rückgabetyp von 'check'  soll boolean sein
const g: string = check("Susi");
