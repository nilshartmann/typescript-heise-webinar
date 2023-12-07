export default undefined;

// wie kommen wir an 'address'?
//  mit String Literal als 2. Beispiel

type Company = {
  name: string;
  address: {
    city: string;
    plz: string;
    // phone: {
    //   type: "handy"
    //   nummer: string;
    // }
  };
};

// Index Access Operator
type Address = Company["address"];
// type Phone = Company["address"]["phone"];
declare function sendLetterToCompany(a: Address): void;
sendLetterToCompany({
  city: "fasdfasdf",
  plz: "fasdfasdf",
});

// OK

// FEHLER

// ...und wie kommen wir hier an contacts ?
type CompanyWithContacts = {
  name: string;
  contacts: [
    {
      city: string;
      plz: string;
    }
  ];
};

// Tuple
const person = ["Klaus", 32] as const;
type Person = typeof person;
type Firstname = Person[0];

type CompanyContact = CompanyWithContacts["contacts"][number];
// type CompanyContact2 = CompanyWithContacts.contacts;

// type GetProperty<X extends object> = X["contacts"]

declare function sendLetterToContact(a: CompanyContact): void;
sendLetterToContact({
  city: "berlin",
  plz: "30000",
});
// OK

// FEHLER
