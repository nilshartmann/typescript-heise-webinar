export default undefined;

// eine Funktion, liefert ein Objekt zurück....
function getServerConfig(isDev: boolean) {
  // todo
}

// ...mit dem Rückgabe-Wert wollen wir folgende Funktion aufrufen:

type ServerConfig = {
  env: "DEV" | "PROD"; // <-- String Literal!
  host: string;
};
declare function openConnection(config: ServerConfig): void;

const prod = getServerConfig(true);
openConnection(prod);
