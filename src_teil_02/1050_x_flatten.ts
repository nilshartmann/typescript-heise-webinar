import { Flatten } from "./flatten";

export default undefined;

// person als JavaScript Object
// Ein Intersection Type
//   Person & Address
//   Readonly
//   Omit
// Dann noch ein Union Type

const person = {
  firstname: "Klaus",
  lastname: "Meier",
};

type Person = typeof person;

type Address = {
  city: string;
  plz: string;
};

type Phone = {
  pre: string;
  type: "mobile" | "fixed";
};

type Contact = Omit<Readonly<Person & Address>, "id"> | Partial<Phone>;
//    ^?

type FContact = Flatten<Contact>;
//    ^?
