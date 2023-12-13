export default undefined;

// Gemeinsamkeiten
// Austauschbarkeit
// Unterschiede
//  (decl. merging, aliase)
// -> im Webinar werden wir type verwenden
type Person = {
  firstName: string;
  lastName: string;
};

interface IPerson {
  firstName: string;
  lastName: string;
}

type Employee = IPerson & { salary: number };
//    ^?

interface IEmployee extends Person {
  //         ^?
  salary: number;
}

// Declaration Merging!
interface IPerson {
  // fügt das address-Property hinzu!
  address: string;
}

const p: IPerson = {
  firstName: "Susi",
  lastName: "Mueller",
  address: "Hamburg",
};
