export default undefined;
const IBAN_PATTERN = /^[A-Z]{2}\d{2}[A-Z0-9]{4}\d{7}([A-Z0-9]?){0,16}$/;

// EVTL. SPÄTER!
//
// Wie wollen einen Domain-Typen fuer eine IBAN
//  eine Art "fachlicher" String;
//
// -> Brand Typen
// -> validateIban
// -> toIban
// -> __brand in Code Completion

declare function transferMoney(target: string, owner: string): void;

const iban = "DE123456789";

transferMoney(iban, "Nils"); //  😊
transferMoney("Nils", iban); // 😞
