export default undefined;

// Todo: string, number, boolean sind eigene Typen
//       in TS
//      -> das brauchen wir ganz viel auch wenn wir
//         später Typen "programmieren"

//  Wie kann die Signatur dieser Funktion so geschrieben
//  werden, dass sie nur "loading" oder "failed" entgegennimmt?

type Loading = "loading";
type Failed = "failed";

type State = Loading | Failed;

type Zehn = 10;

type JaDasStimmt = true;

declare function setRequestState(state: State): void;

setRequestState("loading"); // OK
setRequestState("failed"); // OK

setRequestState("saving"); // SOLL: ERR
