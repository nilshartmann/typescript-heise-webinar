export default undefined;

// wie kommen wir an 'address'?

type Company = {
  name: string;
  address: {
    city: string;
    plz: string;
  };
};

// type A = "address"; // ...
type Address = Company["address"];

declare function sendLetterToCompany(a: Address): void;

// OK
sendLetterToCompany({
  city: "Hamburg",
  plz: "22359",
});

// FEHLER
// @ts-expect-error
sendLetterToCompany({
  city: "Hamburg",
});

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

type Contact = CompanyWithContacts["contacts"][number];

declare function sendLetterToContact(a: Contact): void;
// OK
sendLetterToContact({
  city: "Hamburg",
  plz: "22359",
});

// FEHLER
// @ts-expect-error
sendLetterToContact({
  city: "Hamburg",
});
