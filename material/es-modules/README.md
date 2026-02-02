## Lernziel

Du verstehst ES-Module (`import`/`export`) und kannst Dateien sauber strukturieren.

## Warum ESM?

Module trennen Verantwortung und machen Code wiederverwendbar. In TypeScript konntest du `export`/`import` nutzen, bevor es in Browsern standardisiert und breit verfügbar war.

## Kurzüberblick

- `export` gibt Werte aus einem Modul frei.
- `import` nutzt exportierte Werte in anderen Dateien.
- `default` exportiert einen Hauptwert pro Datei.

### Beispiel

```ts
// order.ts
type Order = { id: string; total: number };
export const formatOrder = (order: Order) =>
  `Bestellung ${order.id} | Gesamt: ${order.total.toFixed(2)} EUR`;

// app.ts
import { formatOrder } from './order';

console.log(formatOrder({ id: 'A-100', total: 12.8 }));
```

## Type-Only Imports in TypeScript

Du kannst das `type`-Schlüsselwort auch in einem `import` verwenden.
Das ist eine TypeScript-Erweiterung.
Es kennzeichnet einen reinen Typ-Import, der nur zur Compile-Zeit existiert.

Die Folge: Alles, was mit `type` importiert wird, wird nicht nach JavaScript kompiliert.
Im JS-Bundle landet also kein Laufzeit-Code für diesen Import.

### Beispiel

```ts
// order.ts
export type Order = { id: string; total: number };

// app.ts
import { type Order } from './order';

const order: Order = { id: 'A-100', total: 12.8 };
```
