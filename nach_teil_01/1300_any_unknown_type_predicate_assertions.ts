export default undefined;

// any und unknown
// Type Predicate Functions
// evtl: Zod

// fetch weiß nicht, was für ein Objekt über per HTTP geladen wird
// Rückgabe-Type also any...
//  => Konsequenz?
declare function fetch(url: string): any;

const data = fetch("https://....");
data.toLowerCase();

//  => was wäre besser?
declare function betterFetch(): unknown;
const data2 = betterFetch();
if (typeof data2 === "string") {
  data2.toLowerCase();
}

type ErrorResponse = { error: string };
type SuccessResponse = { data: string };
type Response = ErrorResponse | SuccessResponse;

function loadFromApi(): Response {
  const response = betterFetch();
  assertValidResponse(response);
  return response;
}

function loadUser(): void {
  const response = loadFromApi();

  if (isSuccessResponse(response)) {
    const user = response.data.toLowerCase();
    return;
  }

  response.error;
}

const responses: Response[] = [];
const successfulResponses: SuccessResponse[] =
  responses.filter(isSuccessResponse);

// Type Predicate Function
function isSuccessResponse(response: Response): response is SuccessResponse {
  return "data" in response;
}

// Type Assertion Function
function assertValidResponse(response: unknown): asserts response is Response {
  if (response !== null && typeof response === "object") {
    if ("data" in response || "error" in response) {
      return;
    }
  }

  throw new Error("Invalid response");
}

// Example, API conventions:
//   type ErrorResponse = { error: string };
//   type SuccessResponse = { data: string };
//   type Response = ErrorResponse | SuccessResponse;

// 1. Assert das ein Aufruf von betterFetch eine Response zurückliefert
//     (loadFromApi-Funktion und assert-Funktion)
// 2. Funktion, mit der wir ermitteln können, ob wir ein Error oder ein Success haben
