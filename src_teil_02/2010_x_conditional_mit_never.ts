export default undefined;

// die folgende Funktion wirft einen Error, wenn o === null ist
//  -> wie können wir das ausdrücken?
declare function ensureNotNull<O>(o: O): NotNull<O>;

type NotNull<O> = O extends null ? never : O;

const c = ensureNotNull("huhu");
// ^? string

// hier macht 'never' Sinn, da die Funktion hier nicht zurückkommt:
const b = ensureNotNull(null);
// ^? never
