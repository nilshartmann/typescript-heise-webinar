export default undefined;

// TODO:
// Wie kann das Objekt aussehen
//  - zwei Properties, beide strings, beide optional
//  - ist aber nicht richtig typsicher
//  - also zwei Objekte mit zwei Parametern => überprüfen mit "in" => haben wir schon gesehen
// Ein String kann ein Typ sein in TypeScript
//  - Tagged Union Type
//  - never
// Überleitung:
//  Api Response mit boolean literal type

// Eine Funktion, die einen String (germanString / englishString) "übersetzen" kann...
type TranslationAction = {
  germanString?: string;
  englishString?: string;
};

function translate(action: TranslationAction) {
  // welche Probleme haben wir hier?
}

// wie kann es besser aussehen?

// Api Response!
