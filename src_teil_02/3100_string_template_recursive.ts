import { Equal, Expect, IsNever } from "type-testing";
import { expectTypeOf } from "vitest";
import { Flatten } from "./flatten";

export default undefined;

// TODO:
//  - GetParam Type
//   - Test
//  - UrlParams type mit SEGMENTS extends string[] = []
//  - UrlParams mit path aufrufen
//  - ArrayToUnion am konkreten Beispiel
//  - UnionToObject am konkreten Beispiel
//  - GetUrlParams-Generic Typ (am besten auch mit Flatten)
//
//  Signatur Handler Funktion:
// declare function addUrlHandler<URL extends string>(
//   url: URL,
//   handler: (params: GetPathParams<URL>) => void
// ): void;
//
//
//
//
//
//
//
//
//
// 1.
// getParams soll ein Objekt zurückliefern, dass für jeden
// Platzhalter in der URL einen Eintrag enthält
//   - Der Name soll jeweils den Platzhaltern (ohne ":") entsprechen
//   - Der Typ soll jeweils "string" sein (in der URL sind nur strings)

// 2.
// Eine Handler-Funktion, die aufgerufen wird, wenn ein Request für einen
// Pfad eingeht. Signatur:
//  1. die URL inklusive Platzhalter, für die die Funktion als Handler
//     registriert werden soll
//  2. eine Callback-Funktion die unser Objekt mit den Platzhaltern erhält

const path = "/api/v1/:userId/likes/:likeId";

type ExpectedPathParams = {
  userId: string;
  likeId: string;
};

declare function getParams(s: string): unknown;
