import { Equal, Expect } from "type-testing";
import { expectTypeOf } from "vitest";

export default undefined;

// Diese Funktion liefert ein Promise zurück
//  (hier vereinfacht durch 'MyPromise')
//  wie bekommen wir an den Wert des Promises?

type MyPromise<X> = {
  then(x: X): void;
};

declare function loadData<X>(x?: X): MyPromise<X>;

// Mit 'myAwait' können wir auf irgendwas warten (analog zur await-Funktion):
//  - wenn das 'irgendwas' ein MyPromise ist => den Wert des Promises
//  - ansonsten den Original-wert

declare function myAwait<X>(x: X): MyAwaited<X>;

const promise = loadData<string>();
const s: string = myAwait("Hallo");
const v: string = myAwait(promise);

type MyAwaited<P> = P extends {
  then(args: infer A): void;
}
  ? MyAwaited<A>
  : P;

// ...wie können wir das Rekursiv "auspacken"?c
const promise2 = loadData(loadData(123));
const p: number = myAwait(promise2);
