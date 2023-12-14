export default undefined;

// TODO:

// - Brand mit Symbol
// - Brand mit Name als Generic
// - Brand mit Name als Typ
//
//
//
//
//
//
//
// Unser IBAN Typ von eben...
// ... zwei Probleme:
//   1. "__brand":
//         - taucht in Code Completion auf
//         - möglicherweise nicht eindeutig (was wenn andere das auch nutzen)
//   2. Was müssen wir tun, wenn wir auch für CustomerId einen Brand-Typ wollen?

declare const __brand: unique symbol;

type BrandType<N, T = string> = T & {
  [__brand]: N;
};

type IBAN2 = BrandType<"iban">;
type CustomerId = BrandType<"customerId">;
type PositiveNumber = BrandType<"positiveNumber", number>;

type IBAN = string & {
  [__brand]: "iban";
};

type CUSTOMER_ID = string & {
  __brand: "CustomerId";
};

type EMAIL = string & {
  __brand: "Email";
};
