import { Flatten } from "./flatten";
export default undefined;

//  2.  DB-Mapping (string oder null als key)
//   -> Zweiter Parameter typsicher, ohne dass Anwender dafür was tun müssen!

// declare function saveToDatabase(o: unknown, columnNames: unknown): unknown;

type Mapping<O extends object> = {
  [K in keyof O]: string | null;
};

declare function saveToDatabase<O extends object>(
  o: O,
  mapping: Mapping<O>
): void;

// nur firstname "mappen"
saveToDatabase(
  {
    firstname: "...",
    age: 32,
  },
  { firstname: "first_name", age: null }
);
