export default undefined;
const IBAN_PATTERN = /^[A-Z]{2}\d{2}[A-Z0-9]{4}\d{7}([A-Z0-9]?){0,16}$/;

// Wie wollen einen Domain-Typen fuer eine IBAN
//  eine Art "fachlicher" String;

type IBAN = string;

declare function transferMoney(target: IBAN, owner: string): void;

const iban: IBAN = "DE123456789";

transferMoney(iban, "Nils"); //  😊
transferMoney("Nils", iban); // 😞

type RealIBAN = string & {
  __brand: "iban";
};

declare function transferRealMoney(target: RealIBAN, owner: string): void;
const realIban = "DE1231312" as RealIBAN;
transferRealMoney(realIban, "Nils");
transferRealMoney("Nils", realIban);

// Type Predicate Function!
//   -> stellt zur Laufzeit und Build-Zeit korrekte Verwendung sicher
function validateIban(candidate: string): candidate is RealIBAN {
  return IBAN_PATTERN.test(candidate);
}

function toIban(candidate: string): RealIBAN {
  if (validateIban(candidate)) {
    return candidate;
  }

  throw new Error("Invalidate iban!");
}

transferRealMoney(toIban("DE123123123"), "Nils"); // ok
