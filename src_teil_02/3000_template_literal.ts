export default undefined;

// Beispiel:
//  Typsichere CSS-Properties (oder vergleichbare Features)
// Wir wollen einen Typen haben, mit dem wir CSS-Klassen typsicher beschreiben können:
//
//  Spacing soll "margin" oder "padding" sein
//  Direction soll "top", "right", "bottom" oder "left" sein

// Die Größen-Angabe soll aus einer Zahl und einer Einheit ("em", "rem" oder "px" bestehen)!

declare function setSpacing(c: unknown, size: unknown): void;

setSpacing("margin-right", "2rem"); // OK
setSpacing("padding-center", "2rem"); // ERROR
setSpacing("margin-right", "2cm"); // ERROR
