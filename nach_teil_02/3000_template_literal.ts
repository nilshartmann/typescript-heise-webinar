export default undefined;

// Beispiel:
//  Typsichere CSS-Properties (oder vergleichbare Features)
// Wir wollen einen Typen haben, mit dem wir CSS-Klassen typsicher beschreiben können:
//
//  Spacing soll "margin" oder "padding" sein
//  Direction soll "top", "right", "bottom" oder "left" sein

// Die Größen-Angabe soll aus einer Zahl und einer Einheit ("em", "rem" oder "px" bestehen)!

// const x = "Hallo"
// const t = `${x} Welt`

// type Spacing = "margin-left" | "margin-right" | "padding-left" | "padding-right"
type Spacing = "margin" | "padding";
type Direction = "top" | "right" | "bottom" | "left";

type CSSProperty = `${Spacing}-${Direction}`;

type Unit = "em" | "rem" | "px";
type Size = `${number}${Unit}`;

declare function setSpacing(c: CSSProperty, size: Size): void;

setSpacing("margin-right", "1.2rem"); // OK
setSpacing("margin-right", "2em"); // OK
setSpacing("margin-right", "ca2rem"); // ERROR
setSpacing("padding-center", "ca125em"); // ERROR
setSpacing("padding-left", "2cm"); // ERROR
