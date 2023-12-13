export default undefined;

// any und unknown
// Type Predicate Functions
// evtl: Zod

// fetch weiß nicht, was für ein Objekt über per HTTP geladen wird
// Rückgabe-Type also any...
//  => Konsequenz?
declare function fetch(): any;

//  => was wäre besser?
declare function betterFetch(): any;

// Example, API conventions:
//   type ErrorResponse = { error: string };
//   type SuccessResponse = { data: string };
//   type Response = ErrorResponse | SuccessResponse;

// 1. Assert das ein Aufruf von betterFetch eine Response zurückliefert
//     (loadFromApi-Funktion und assert-Funktion)
// 2. Funktion, mit der wir ermitteln können, ob wir ein Error oder ein Success haben
