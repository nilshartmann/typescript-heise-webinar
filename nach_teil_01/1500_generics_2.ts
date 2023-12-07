export default undefined;

// Diese Funktion soll einen Wert aus einem Objekt zurückliefern
//  - object soll ein beliebiges OBJEKT sein
//  - key soll daraus ein gültiger Key sein
//  - Der Rückgabe-Typ soll dem Typen des Wertes entsprechen

declare function getPropertyFromObject<O extends object, Key extends keyof O>(
  object: O,
  key: Key
): O[Key];

const person = { firstname: "Klaus", age: 32 };

// const firstname = person.firstname;
// const age = person.age;

const firstname = getPropertyFromObject(person, "firstname");
firstname.toLocaleLowerCase();
const age = getPropertyFromObject(person, "age");
getPropertyFromObject("", "");
getPropertyFromObject(person, "city"); // ERR: 'city' nicht in dem Objekt
