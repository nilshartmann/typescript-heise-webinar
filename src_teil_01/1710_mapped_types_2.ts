import { Flatten } from "./flatten";
export default undefined;

//  2.  DB-Mapping (string oder null als key)
//   -> Zweiter Parameter typsicher, ohne dass Anwender dafür was tun müssen!

declare function saveToDatabase(o: unknown, columnNames: unknown): void;
