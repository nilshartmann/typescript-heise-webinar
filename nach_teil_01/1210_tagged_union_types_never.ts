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
type TranslateToEnglish = {
  language: "DE->EN";
  germanString: string;
};

type EnglishToGerman = {
  language: "EN->DE";
  englishString: string;
};

type FrenchToEnglish = {
  language: "FR->EN";
  frenchString: string;
};

type TranslationAction = TranslateToEnglish | EnglishToGerman | FrenchToEnglish;

function translate(action: TranslationAction) {
  switch (action.language) {
    case "DE->EN": // type guard
      return action.germanString;
    case "EN->DE":
      return action.englishString;
  }

  handleInvalidTranslationAction(action);
}

function handleInvalidTranslationAction(a: never) {
  throw new Error("..." + a);
}

// wie kann es besser aussehen?

// Api Response!
