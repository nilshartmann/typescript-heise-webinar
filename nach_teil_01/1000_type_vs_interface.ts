export default undefined;

// Gemeinsamkeiten
// Austauschbarkeit
// Unterschiede
//  (decl. merging, aliase)
// -> im Webinar werden wir type verwenden

type Person = {
  firstName: string;
  lastName: string;
};

//
interface IPerson {
  firstName: string;
  lastName: string;
}

interface Employee extends Person {
  salary: number;
}

type Temployee = IPerson & {
  salary: number;
};

type YesOrNo = true | false;

// plug-in
interface IPerson {
  age: 32;
}
