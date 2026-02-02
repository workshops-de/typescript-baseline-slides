## Lernziel

Du kannst TypeScript-Syntax für Typannotationen einsetzen und damit Variablen, Arrays, Objekte und Funktionen in einem praktischen Beispiel sauber typisieren.

## Warum typisierst du?

- JavaScript findet Typfehler erst zur Laufzeit, oft in Produktion oder spät im Test.
- Mit Typisierung machst du Annahmen explizit: Welche Daten du erwartest und was zurückkommt.
- Du findest Fehler früh, IDEs geben dir bessere Autovervollständigung und Refactoring wird sicherer.
- Ergebnis: weniger Bugs, schnelleres Onboarding und stabilere Releases gegenüber purem JS.

## Primitives

Hier typisierst du einfache Werte klar: Name als `string`, Status als `boolean`, Steuersatz als `number`.

```ts
const shopName: string = 'TS Mart';
const isOpen: boolean = true;
const taxRate: number = 0.19;
```

## Complex-Types (Arrays & Objekte)

Du annotierst Arrays und Objekte direkt, damit jede Struktur klar ersichtlich ist.

```ts
const products: { id: number; name: string; price: number }[] = [
  { id: 1, name: 'Kaffee', price: 4.5 },
  { id: 2, name: 'Tee', price: 3.2 },
];

const items: { product: { id: number; name: string; price: number }; quantity: number }[] = [
  { product: products[0], quantity: 2 },
];
```

## Functions (Parameter & Return-Value)

Die Funktion nimmt ein typisiertes Array entgegen und gibt einen `number`-Wert zurück.

```ts
function calcSubtotal(
  items: { product: { id: number; name: string; price: number }; quantity: number }[]
): number {
  return items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
}
```

# Type Inference

Type Inference bedeutet: TypeScript leitet Typen automatisch aus dem Code ab, ohne dass du sie explizit angeben musst.

Warum brauchst du das? Es reduziert Tipparbeit und hält den Code lesbar, ohne die Typsicherheit zu verlieren.

Vorteile:

- Weniger Boilerplate, gleicher Schutz durch den Type-Checker
- Schnellere Entwicklung und bessere IDE-Hinweise

Worauf musst du achten?

- Bei leeren Arrays/Objekten wird oft zu allgemein inferiert; dann sind explizite Typen sinnvoll.
- Bei Funktionen mit mehreren Rückgabepfaden ist eine Annotation oft klarer.

### Beispiel

```ts
const shopName = 'TS Mart'; // TypeScript inferiert: string
const totals = [12.8, 5.4]; // inferiert: number[]
const mix = ['eins', 1]; // inferiert: (string|number)[]

function formatTotal(total: number) {
  return total.toFixed(2);
}

const label = formatTotal(totals[0]); // inferiert: string
```
