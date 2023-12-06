export default undefined;

// Type vs Value

// wie kommen wir an 'address'?
//   typeof (Laufzeit vs. Build-Zeit)

let address = {
  city: "Hamburg",
  plz: "22359",
};

declare function sendLetter(a: unknown): void;
sendLetter(address);
sendLetter({
  city: "hamburg",
  plz: "1234",
});
// @ts-expect-error
sendLetter({
  city: "Berlin",
});

declare function greet(name: string): string;

declare function sendAndWriteLetter(a: unknown, b: unknown);
// OK
sendAndWriteLetter(
  {
    city: "hamburg",
    plz: "1234",
  },
  (name) => "Hallo " + name
);

// ERROR
sendAndWriteLetter(
  {
    city: "hamburg",
    plz: "1234",
  },
  // @ts-expect-error
  (name) => 123
);
