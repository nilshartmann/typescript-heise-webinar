export default undefined;

// wie kommen wir an 'address'?
//  mit String Literal als 2. Beispiel

type Company = {
  name: string;
  address: {
    city: string;
    plz: string;
  };
};

declare function sendLetterToCompany(a: unknown): void;

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

declare function sendLetterToContact(a: unknown): void;
// OK

// FEHLER
