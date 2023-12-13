import { Equal, Expect } from "type-testing";
import { expectTypeOf } from "vitest";

export default undefined;

// Diese Funktion prüft einen Wert und liefert den zurück
//  - wenn O eine Funktion ist, ruft sie die Funktion auf,
//    prüft deren RÜCKGABE-WERT
//    und liefert den RÜCKABE-WERT zurück
declare function check<O>(o: O): O;

// Beispiele:
check(() => 123); // Rückgabetyp von 'check' soll number sein
check(() => "Hallo"); // Rückgabetyp von 'check'  soll string sein
check(false); // Rückgabetyp von 'check'  soll boolean sein

declare function check2<O>(o: O): O extends (...args: any) => infer A ? A : O;

const a = check2(() => 123);
//    ^?
const b = check2(() => "Hallo");
//    ^?

const c = check2(false);

expectTypeOf(a).toEqualTypeOf<123>();
expectTypeOf(b).toEqualTypeOf<"Hallo">();
expectTypeOf(c).toEqualTypeOf<boolean>();

type _a = Expect<Equal<123, typeof a>>;
type _b = Expect<Equal<"Hallo", typeof b>>;
type _c = Expect<Equal<false, typeof c>>;

// Warum ist a 123 und b 'Hallo' (und nicht number und string)?

// Ermitteln von Argumenten einer Funktion:
type FirstArg<O> = O extends (a: infer A, ...args: any) => any ? A : never;

// Ermitteln des Types eines Arrays:
type TypeOfArray<A> = A extends (infer A)[] ? A : never;
type T1 = TypeOfArray<string[]>; // string
type T2 = TypeOfArray<string>; // never

// Für typische Anforderungen gibt es bereits fertige _Utility Typen_, z.B.:
// * [Awaited](https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype): Liefert Typ von Promises zurück
// * [ReturnType](https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype): Rückgabe-Typ einer Methode
// * [InstanceType](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype): Typ der Instanz einer Klasse
