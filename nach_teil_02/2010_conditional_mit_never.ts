export default undefined;

// die folgende Funktion wirft einen Error, wenn o === null ist
//  -> wie können wir das ausdrücken?

type EnsureNotNull<O> = O extends null ? never : O;

declare function ensureNotNull<O>(o: O): EnsureNotNull<O>;

declare function stop(): never;

const s: string = ensureNotNull("Hallo");
// ...

const y = ensureNotNull(null);
console.log("Hallo");

// stop();
const s2 = stop();
console.log("fasdfasdf");
