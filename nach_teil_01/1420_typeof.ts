export default undefined;

// Type vs Value

// wie kommen wir an 'address'?

let address = {
  city: "Hamburg",
  plz: "22359",
};

type Address = typeof address;
// type X = typeof Address;

declare function sendLetter(a: Address): void;
sendLetter(address);
// mehr Beispiele...

// wie kommen wir an 'greet'
declare function greet(name: string): string;

type CreateLetterFunction = typeof greet;

declare function sendAndWriteLetter(a: Address, b: CreateLetterFunction): void;
