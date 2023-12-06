export default undefined;

type Person = {
  id: string;
  name: string;
  age: number;
};

// -----------------------------------------------------------------------------------------

function patchPerson(person: Person) {
  // Wir wollen eine Untermenge von Person erlauben...
  // außerdem sollte person readonly sein
}

//

// -----------------------------------------------------------------------------------------

// ... Für ein Formular zum Erfassen einer neuen Person benötigen wir ein Person-Objekt
//     aber ohne 'id'-Feld (weil das erst später vergeben wird)
//     -> wie erzeugen wir eine Person "ohne" Id

function enterNewPersonForm(): Person {
  // Keine Id hier!
  // @ts-ignore   🤔🤔🤔🤔🤔🤔🤔
  return {
    name: "Klaus",
    age: 32
  };
}
