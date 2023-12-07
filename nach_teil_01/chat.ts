export default undefined;

// -> Object literal may only specify known properties, and 'b' does not exist in type 'Foo'

// Hier war es { error: string } & Record<string, unknown>

type Foo = { a: string };
export const b: Foo = { a: "foobar", b: "foobar" };

const c = { a: "foobar", b: "foobar" };
const d: Foo = c;

sayHello(c);
sayHello({ a: "foobar", b: "foobar" });

declare function sayHello(p: Foo): void;

// OFFENE FRAGE
// Wie schreibe ich eine Predicate Function, wenn ich nur überprüfen will,
// dass es nicht null oder unknown ist,
// Response ist also nicht näher definiert.
// Stichwort: GraphQL Query

function assertNotNull<X>(response: X | null): asserts response is X {
  if (response !== null) {
    return;
  }

  throw new Error("...");
}

// => Teil 2
// 1. Wir liefern einen "fertigen" Typen zurück (z.B. ServerConfig),
// und wollen ausdrücken, dass darin ein Parameter readonly sein soll

//
// 2. Thema "type predicates" – zurück zu meiner Frage von vorhin.
// Habe mal ein Minimal gebaut, das ich nicht gelöst bekomme,
// weil ich keine Ahnung von Rekursion in Typescript habe.
// https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgJKpCayDeAoZQ5YAEwC5kBnMKUAcwG48BfPPUSWRFVAeQFdOuAkVIVqtEIxGEScMHArpM2AD7IQ-ADZbk6-iBIQYoCCSas8YAJ4AHHgBF5cZAF40Aoes069yA0YmWOZsMAYIYMAA9iDElLwA1nDWADwAKgB8ABRyChRpAJQUuS7AlMgAcjEV2lpwAEZaEOkZwkTEMMg5zm6u7j5aBchQEGD8ULHwWpQQMh1dNvZRnSXIAIR9yABEUfUAVhARW0MjYxPIUzNs7cCdWVukW8SxJUP47Td3WyVPoMivbQ+QNO41iZUSyW6CgAdK85u1mMgINMUO8gR8QecaPxZujkKwEUiUYDgaNQRc4CiGO05qxLGEQBForEALZwUBQxRoJwKN5zW5dcFJaycgp8vEIGKUKJNaFaKJ0Tmw5zQ0gFWksIA
