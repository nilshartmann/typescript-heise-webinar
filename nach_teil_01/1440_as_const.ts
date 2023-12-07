export default undefined;

// eine Funktion, liefert ein Objekt zurück....
function getServerConfig(isDev: boolean) {
  if (isDev) {
    return {
      env: "DEV",
      host: "localhost",
    } as const;
  }

  return {
    env: "PROD",
    host: "https://......",
  } as const;
}

// Type Narrowing
// Type Widening

// ...mit dem Rückgabe-Wert wollen wir folgende Funktion aufrufen:

type ServerConfig = {
  env: "DEV" | "PROD"; // <-- String Literal!
  host: string;
};
declare function openConnection(config: ServerConfig): void;

const prod = getServerConfig(true);
openConnection(prod);
