import { Flatten } from "./flatten";
export default undefined;

// TODO - SCHRITTE:
//   - ValidatePerson mit boolean
//   - Validate Person mit optional Keys
//   - ValidatePerson mit KEYS und boolean
//   - Validate Generic mit boolean

// 1. Wie können wir validate implementieren?

type ValidatedObject<O extends object> = {
  [K in keyof O]: boolean;
};

declare function validate<O extends object>(o: O): ValidatedObject<O>;

const result = validate({
  firstname: "klaus",
  age: 32,
});

const firstNameValid: boolean = result.firstname;
const ageValid: boolean = result.age;
const invalid: boolean = result.lastname; // lastname nicht vorhanden
