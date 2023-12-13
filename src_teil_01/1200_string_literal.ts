export default undefined;

// Todo: string, number, boolean sind eigene Typen
//       in TS
//      -> das brauchen wir ganz viel auch wenn wir
//         später Typen "programmieren"

//  Wie kann die Signatur dieser Funktion so geschrieben
//  werden, dass sie nur "loading" oder "failed" entgegennimmt?
declare function setRequestState(state: string): void;

setRequestState("loading"); // OK
setRequestState("failed"); // OK

// @ts-expect-error
setRequestState("saving"); // SOLL: ERR
