export default undefined;

// Generic Functions
// - setState-Funktion von React
//   - Typ Parameter wird übergeben oder abgeleitet
//   - Zurück kommt Parameter-Typ und Setter-Funktion
//
// Generic Types
//  - Die Setter-Funktion als Typ

type SetterFunction<V> = (newValue: V) => void;

declare function useState<S>(initialState: S): [S, SetterFunction<S>];

let [value, setValue] = useState("Hallo");
value;
setValue("Pause");
let y = useState(123);

const setNumber: SetterFunction<number> = (newValue) => {};

function tueWas<X>(a: X, fn: SetterFunction<X>) {}

// const [state, setState] = useState("Guten Morgen!");
//  state: "Guten Morgen!" // string
//  setState(newState: string): void

//  const [state, setState] = useState(123);
//  state: 123 // number
//  setState(newState: number): void // number
