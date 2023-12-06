import { Flatten } from "./flatten";

export default undefined;

type Person = {
  firstname: string;
  age: number;
};

type V<KEYS extends string> = {
  [K in KEYS]: boolean;
};

type X = V<keyof Person>;

type ValidatedPerson = {
  [K in keyof Person]: boolean;
};

type ValidationResult<O extends object> = {
  [K in keyof O]: boolean;
};

declare function validate<O extends object>(o: O): ValidationResult<O>;

const result = validate({
  firstname: "klaus",
  age: 32,
});

const firstNameValid: boolean = result.firstname;
const ageValid: boolean = result.age;
const invalid: boolean = result.lastname; // lastname nicht vorhanden
