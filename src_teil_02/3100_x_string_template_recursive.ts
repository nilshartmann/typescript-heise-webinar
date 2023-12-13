import { Equal, Expect, IsNever } from "type-testing";
import { expectTypeOf } from "vitest";
import { Flatten } from "./flatten";

export default undefined;

// Beispiel: Pattern Matching mit infer von Strings
//
//   - parseUrl soll ein Objekt zurückliefern,
//     In dem die Platzhalter aus der übergebenen URLs als Keys und die Werte als Strings enthalten sind
//
// - Segments type => wie eine rekursive Funktion, in der wir eine Liste für das Ergebnis übergeben

const path = "/api/v1/:userId/likes/:likeId";

type ExpectedPathParams = {
  userId: string;
  likeId: string;
};

type GetParam<S extends string> = S extends `:${infer PARAM}` ? PARAM : never;
type t1 = Expect<Equal<"userId", GetParam<":userId">>>;
type t2 = Expect<IsNever<GetParam<"userId">>>;

type UrlParams<
  S extends string,
  SEGMENTS extends string[] = []
> = S extends `${infer L}/${infer R}`
  ? UrlParams<R, [...SEGMENTS, GetParam<L>]>
  : [...SEGMENTS, GetParam<S>];

type MyUrl = UrlParams<typeof path>;
type UrlUnion = MyUrl[number];
type PathObject = {
  [K in UrlUnion]: string;
};
type testPathObject = Expect<Equal<ExpectedPathParams, PathObject>>;

type ToObject<S extends string> = {
  [K in S]: string;
};
type ToUnion<X extends any[]> = X[number];
type GetUrlParams<S extends string> = Flatten<ToObject<ToUnion<UrlParams<S>>>>;

type test_GetUrlParams = Expect<
  Equal<ExpectedPathParams, GetUrlParams<typeof path>>
>;

declare function addUrlHandler<URL extends string>(
  url: URL,
  handler: (params: GetUrlParams<URL>) => void
): void;

addUrlHandler(path, (params) => {
  expectTypeOf(params).toEqualTypeOf<ExpectedPathParams>();
});
