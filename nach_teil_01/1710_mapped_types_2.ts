import { Flatten } from "./flatten";
export default undefined;

//  2.  DB-Mapping (string oder null als key)
//   -> Zweiter Parameter typsicher, ohne dass Anwender dafür was tun müssen!

type Mapping<O extends object> = {
  [K in keyof O]: string | null;
};

declare function saveToDatabase<O extends object>(
  o: O,
  columnNames: Mapping<O>
): void;

saveToDatabase(
  {
    firstname: "...",
    age: 23,
  },
  {
    firstname: "FIRST_NAME",
    age: null,
  }
);
