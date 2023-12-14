import { Equal, Expect } from "type-testing";

export default undefined;

// TODO:
//   - "naiver" Weg: string | null als Rückgabe-Wert
//   - Generic für Funktion
//   - Beispiel für Conditional Type
//   - Conditional Type verwenden
//   - Weitere Beispiel mit Rekursion (NumberOrStringOrNull)

//
//
// - Diese Funktion kann einen string oder null entgegen nehmen
//   - ist value ein String, wird dessen Länge zurückgegeben (=> number)
//   - ist value null, soll null zurückgegeben werden (=> null)
//

type NumberOrNull<S extends string | null> = S extends string ? number : null;

// S is Number ? number;
// S is string ? boolean;
// in allen anderen Fällen => null
type NumberOrStringOrNull<S> = S extends number
  ? number
  : S extends string
  ? boolean
  : null;

type t1 = Expect<Equal<NumberOrNull<null>, null>>;
type t2 = Expect<Equal<NumberOrNull<"Lari faria">, number>>;

declare function getLength<V extends string | null>(value: V): NumberOrNull<V>;

const x: number = getLength("hallo");
const y: null = getLength(null);
