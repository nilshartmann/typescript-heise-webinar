export default undefined;

// TODO:
//
// -> Brand Typen
// -> validateIban
// -> toIban
// -> __brand in Code Completion
//
//
//
//
const IBAN_PATTERN = /^[A-Z]{2}\d{2}[A-Z0-9]{4}\d{7}([A-Z0-9]?){0,16}$/;

// Wie wollen einen Domain-Typen fuer eine IBAN
//  eine Art "fachlicher" String;

declare function transferMoney(account: IBAN, owner: string): void;

// unique types
// type IBAN = unique string;

type IBAN = string & {
  __brand: "IBAN";
};

const iban = "DE123456789" as IBAN;

transferMoney(iban, "Nils"); //  😊
transferMoney("Nils", iban); // 😞

declare function readIbanFromUser(): string;

const vielleichtEineIban = readIbanFromUser();
ensureIban(vielleichtEineIban);
transferMoney(vielleichtEineIban, "Klaus");

function ensureIban(i: string): asserts i is IBAN {
  if (IBAN_PATTERN.test(i)) {
    return;
  }

  throw new Error("...");
}
