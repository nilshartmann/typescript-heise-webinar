export default undefined;

// Eine Funktion, die einen String (germanString / englishString) "übersetzen" kann
// Wie kann das Objekt aussehen
//  - zwei Properties, beide strings, beide optional
//  - ist aber nicht richtig typsicher
//  - also zwei Objekte mit zwei Parametern => überprüfen mit "in" => haben wir schon gesehen
// Ein String kann ein Typ sein in TypeScript
//  - Tagged Union Type
//  - never

type TranslationAction = {
  germanString?: string;
  englishString?: string;
};

function translate_not_good(action: TranslationAction) {
  action.germanString.toLowerCase(); // ERR :-(
}

type TranslateToEnglish = {
  translation: "DE_EN";
  germanString: string;
};

type TranslateToGerman = {
  translation: "EN_DE";
  englishString: string;
};

type TranslateToFrench = {
  translation: "EN_FR";
  englishString: string;
};

type Translate = TranslateToEnglish | TranslateToGerman;
// add TranslateToFrensh to Translate and see what happens...

function translate(msg: Translate) {
  switch (msg.translation) {
    case "DE_EN":
      return msg.germanString;
    case "EN_DE":
      return msg.englishString;
  }

  // what happens if we extend possible Translations?
  invalidTranslation(msg);
}

function invalidTranslation(msg: never) {
  throw new Error("Invalid Msg Object!");
}
