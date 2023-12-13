export default undefined;

declare function setRequestState(state: RequestState): void;

setRequestState("loading"); // OK
setRequestState("failed"); // OK
// @ts-expect-error
setRequestState("saving"); // SOLL: ERR

type Loading = "loading";
type Failed = "failed";

type RequestState = Loading | Failed;
// => "Loading" | "Failed"
