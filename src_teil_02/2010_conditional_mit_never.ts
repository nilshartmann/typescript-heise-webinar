export default undefined;

// die folgende Funktion wirft einen Error, wenn o === null ist
//  -> wie können wir das ausdrücken?
declare function ensureNotNull<O>(o: O): unknown;
