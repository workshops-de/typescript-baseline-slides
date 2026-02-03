---
layout: section
---

# ES Modules

---
layout: little-what
---

# Code in wiederverwendbare Module aufteilen mit import und export

---
layout: why
---

# Warum ESM?

Module trennen Verantwortung und machen Code wiederverwendbar. In TypeScript konntest du `export`/`import` nutzen, bevor es in Browsern standardisiert und breit verfügbar war.

---
layout: two-cols-header
layoutClass: gap-x-sm
---

# Kurzüberblick

::left::

- `export` gibt Werte aus einem Modul frei.
  - `default` exportiert einen Hauptwert pro Datei.
- `import` nutzt exportierte Werte in anderen Dateien.

::right::

<WindowMockup codeblock title="order.ts">

<!-- prettier-ignore -->
```ts {all} twoslash
type Order = { id: string; total: number };

export const formatOrder = (order: Order) => // [!code word:export]
`Bestellung ${order.id} | Gesamt: ${order.total.toFixed(2)} EUR`;

```

<!-- prettier-ignore-end -->
</WindowMockup>

<br/>

<WindowMockup codeblock title="app.ts">
<!-- prettier-ignore -->

```ts {all} twoslash
// @filename: order.ts
type Order = { id: string; total: number };
export const formatOrder = (order: Order) =>
  `Bestellung ${order.id} | Gesamt: ${order.total.toFixed(2)} EUR`;

// @filename: app.ts
// ---cut---
import { formatOrder } from './order'; // [!code word:import]

console.log(formatOrder({ id: 'A-100', total: 12.8 }));
```

<!-- prettier-ignore-end -->
</WindowMockup>

---
layout: two-cols-header
layoutClass: gap-x-sm
---

# Type-Only Imports in TypeScript

::left::

Du kannst das `type`-Schlüsselwort auch in einem `import` verwenden.
Das ist eine TypeScript-Erweiterung.
Es kennzeichnet einen reinen Typ-Import, der nur zur Compile-Zeit existiert.

Die Folge: Alles, was mit `type` importiert wird, wird nicht nach JavaScript kompiliert.
Im JS-Bundle landet also kein Laufzeit-Code für diesen Import.

::right::

<WindowMockup codeblock title="order.ts">

```ts {all} twoslash
export type Order = { id: string; total: number }; // [!code word:type]
```

</WindowMockup>

<br />

<WindowMockup codeblock title="app.ts">

```ts {all} twoslash
// @filename: order.ts
export type Order = { id: string; total: number };

// @filename: app.ts
// ---cut---
import { type Order } from './order'; // [!code word:type]

const order: Order = { id: 'A-100', total: 12.8 };
```

</WindowMockup>

---
layout: task
---

# ES Modules
