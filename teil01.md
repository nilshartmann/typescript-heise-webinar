## Grundlagen

## <!-- .slide: id="t-intro" -->

### Zwei kleine Tipps

- TypeScript online im Playground ausführen: https://www.typescriptlang.org/play

---

### Zwei kleine Tipps

- Typen in der IDE/Editor anzeigen:
  - In der Regel könnt ihr Euch in Eurem Editor oder Eurer IDE den Typen einer Variable anzeigen lassen, in dem ihr mit der Maus darüber fahrt
  - Im [TypeScript Playground](https://www.typescriptlang.org/play) könnt ihr mit `// ?^` unter einer Variablen Euch deren Typen anzeigen lassen
  - ![Tooltip](./slides/images/screenshot-type-tooltip.png)
  - Für VS Code gibt es dazu eine [Extension](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-twoslash-queries)
- In IntelliJ werden die Typen teilweise anders (schlechter lesbar) angezeigt.
  - Es lohnt sich dann manchmal, zu schauen, wie etwas in VS Code aussieht

---

### Interface vs. Types

- Mit `interface` und `type` lassen sich Objekte beschreiben
- Die Syntax ist sehr ähnlich
- ```typescript
  type Person = {
    firstname: string;
    lastname: string;
  };
  ```
- ```typescript
  interface Person {
    firstname: string;
    lastname: string;
  }
  ```
- <!-- .element: class="demo" --> Gemeinsamkeiten und Austauschbarkeit
- <!-- .element: class="demo" --> Unterschiede (alias + decl. Merging)
- Unterschiede:
  - `interface`: Declaration merging
  - `type`: Aliase für beliebige Typ-Konstrukte (`interface` nur Objekte)

---

### Type Aliase

- Mit dem Schlüsselwort [`type`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases) wird ein **Type Alias** erzeugt.
- Ein Type Alias ist nur ein (anderer) Name für einen Typen
- Man kann immer entweder einen Type Alias oder einen kompletten Typen hinschreiben
- Beispiele:

- ```typescript
  declare function createPerson(
    firstname: string,
    address: { city: string }
  ): { firstname: string; address: { city: string } };
  ```

- ist identisch mit:
- ```typescript
  type Address = {
    city: string;
  };
  type Person = {
    firstname: string;
    address: { city: string };
  };
  declare function createPerson(firstname: string, address: Address): Person;
  ```

* ...und auch das ist identisch:
* ```typescript
  type Address = {
    city: string;
  };
  type Person = {
    firstname: string;
    address: Address;
  };
  declare function createPerson(firstname: string, address: Address): Person;
  ```

---

### Union Types

- Variablen, Parameter etc. können mehr als einen Typ annehmen:
- Man spricht dann von **Union Types**
- ```typescript
  type Person = { name: string };
  type Movie = { title: string };

  type PersonOrMovie = Person | Movie;

  declare function printNameOrTitle(p: PersonOrMovie);

  printNameOrTitle({ name: "Klaus" }); // OK

  printNameOrTitle({ title: "TypeScript Deep Dive" }); // OK

  printNameOrTitle({ label: "Save" }); // ERR
  ```

---

### Union Types

- Aus Prüfungen, die zur **Laufzeit** ausgeführt werden, kann TS Rückschlüsse auf die Typen zur **Buildzeit** ziehen.
- Das können z.B. `null`, `typeof` oder `in`-Prüfungen sein

* ```typescript
  function printNameOrTitle(obj: PersonOrMovie | null) {
    if (!obj) {
      // Type Guard
      return;
    }
    console.log(obj.title); // ERR: Property 'title' does not exist on type 'Person | Movie'

    if ("title" in obj) {
      // Abfrage ist ein "Type Guard"
      // obj ist Movie hier, title ist definiert
      console.log(obj.title);
    } else {
      // obj ist Person hier: name ist definiert
      console.log(obj.name);
    }
  }
  ```
