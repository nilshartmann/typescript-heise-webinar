export default undefined;

// Wir haben ein Objekt mit i18n-Messages
// diese wollen wir typsicher in 'translate' verwenden

const messages = {
  de: {
    hello: "Hallo",
    world: "Welt",
  },
  en: { hello: "Hello", world: "World" },
};
type Messages = typeof messages;

type Language = keyof Messages;
type MessageKey = keyof Messages[Language];

declare function translate(language: Language): void;

translate("de"); // OK
translate("en"); //OK
// @ts-expect-error
translate("fr"); //

declare function translateMessage(language: Language, msg: MessageKey): void;
translateMessage("de", "world"); // OK
translateMessage("en", "hello"); //OK
// @ts-expect-error
translateMessage("en", "goodbye");
