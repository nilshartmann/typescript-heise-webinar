export default undefined;

// Unser IBAN Typ von eben...
// ... zwei Probleme:
//   1. "__brand":
//         - taucht in Code Completion auf
//         - möglicherweise nicht eindeutig (was wenn andere das auch nutzen)
//   2. Was müssen wir tun, wenn wir auch für CustomerId einen Brand-Typ wollen?

type IBAN = string & {
  __brand: "iban";
};

// Lösung 1: wir sagen TS einfach, es gibt ein globales SYMBOL
//   das verwenden wir
//   -> dieses Symbol gibt es zur Laufzeit nicht, aber das macht
//      nichts, weil wir es ja ohnehin nur zur Buildzeit brauchen
declare const __brand: unique symbol;

type IBAN2 = string & {
  [__brand]: "iban";
};

// Problem 2: wir müssen das für jeden Typen wiederholen

type CustomerId = string & {
  [__brand]: "CustomerId";
};

// Lösung:
// Ein GENERISCHER Typ kann ein Typ-Argument entgegennehmen
type Brand<BrandName> = string & { [__brand]: BrandName };

type IBAN3 = Brand<"iban">;

// ...ein Brand-Typ muss nicht einmal ein string sein, also
//  noch generischer:

type Brand2<Type, BrandName> = Type & { [__brand]: BrandName };

type Amount = Brand2<number, "amount">;

type IBAN4 = Brand2<string, "iban">;

declare const i: IBAN3;
const iban: IBAN4 = i; // OK
const amount: Amount = i; // NO!

//
