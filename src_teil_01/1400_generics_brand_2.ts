export default undefined;

// TODO:

// - Brand mit Symbol
// - Brand mit Name als Generic
// - Brand mit Name als Typ

// Unser IBAN Typ von eben...
// ... zwei Probleme:
//   1. "__brand":
//         - taucht in Code Completion auf
//         - möglicherweise nicht eindeutig (was wenn andere das auch nutzen)
//   2. Was müssen wir tun, wenn wir auch für CustomerId einen Brand-Typ wollen?

type IBAN = string & {
  __brand: "iban";
};
