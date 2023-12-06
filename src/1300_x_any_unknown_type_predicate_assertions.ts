export default undefined;

// Example: fetch function
// Example:
//   type ErrorResponse = { error: string };
//   type SuccessResponse = { data: string };
//   type Response = ErrorResponse | SuccessResponse;

// fetch weiß nicht, was für ein Objekt über per HTTP geladen wird
// Rückgabe-Type also any...
//  => Konsequenz?
declare function fetch(): any;

// => wir können auf dem Return-Value ALLES machen
fetch().toUpperCase();

//  => was wäre besser?
declare function betterFetch(): unknown;

// ...nun müssen wir überprüfen!
const r = betterFetch();
if (typeof r === "string") {
  r.toUpperCase();
}

// Example, API conventions:
//   type ErrorResponse = { error: string };
//   type SuccessResponse = { data: string };
//   type Response = ErrorResponse | SuccessResponse;

type ErrorResponse = { error: string };
type SuccessResponse = { data: string };
type Response = ErrorResponse | SuccessResponse;

function loadFromApi(): Response {
  const r = betterFetch();
  ensureValidResponse(r);
  return r;
}

function ensureValidResponse(candidate: any): asserts candidate is Response {
  if ("error" in candidate || "data" in candidate) {
    return;
  }

  throw new Error("Candidate is invalid");
}

// idea 2: how can users of apiFetch distinguish between
//    ErrorResponse and SuccessResponse

function fetchUser() {
  const res = loadFromApi();

  if (isSuccessResponse(res)) {
    res.data.toUpperCase();
  } else {
    res.error.toLowerCase();
  }
}

function isSuccessResponse(candidate: Response): candidate is SuccessResponse {
  return "data" in candidate;
}
