import { Flatten } from "./flatten";
import { Equal, Expect } from "type-testing";

export default undefined;

// Die folgende Funktionen macht ausgewählte Properties eines Objektes readonly
//   -> wie sieht der Typ dafür aus?
//   -> können wir einen Typen bauen, der Keys AUSSCHLIESST?

declare function makeReadonly(o: unknown, keys: unknown): unknown;
