export default undefined;

// Wir haben ein Objekt mit i18n-Messages
// diese wollen wir typsicher in 'translate' verwenden

const messages = {
  de: {
    hello: "Hallo",
    world: "Welt",
  },
  en: { hello: "Hello", world: "World", goodbye: "Goodbye!" },
};

type TMessages = typeof messages;
type TMessageKeys = keyof TMessages;

// type TMessageKey = keyof TMessages["de"]
type TMessageKey = keyof TMessages[TMessageKeys];

declare function setLanguage(language: TMessageKeys): void;
setLanguage("en");
setLanguage("de");

declare function translateMessage(
  language: TMessageKeys,
  msg: TMessageKey
): void;
translateMessage("de", "world"); // OK
translateMessage("en", "hello"); //OK
translateMessage("en", "goodbye");
