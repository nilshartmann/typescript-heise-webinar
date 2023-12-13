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
declare function translate(language: unknown): void;

translate("de"); // OK
translate("en"); //OK
// @ts-expect-error
translate("fr"); //

declare function translateMessage(language: unknown, msg: unknown): void;
translateMessage("de", "world"); // OK
translateMessage("en", "hello"); //OK
// @ts-expect-error
translateMessage("en", "goodbye");
