---
layout: section
---

# Syntax: Type Annotation

---
layout: little-what
---

Du nutzt TypeScript-Typannotationen, um Variablen, Objekte und Funktionen sauber zu typisieren.

---
layout: why
---

# Warum typisieren?

- Typfehler werden früh gefunden statt zur Laufzeit
- Annahmen über Daten sind klar und explizit
- IDEs liefern bessere Autovervollständigung und Refactoring
- Weniger Bugs und stabilere Releases als pures JS

---
layout: two-cols-header
layoutClass: gap-x-lg
---

# Primitives

::left::
<Callout type="info">

Typisierungen erweitern den gültigen ECMA-Script-Standard.
Der `:` zeigt an, dass eine Typinformation folgt.

</Callout>

::right::

<WindowMockup codeblock title="primitive-types.ts">
```ts {*|1|2|3|*} twoslash
const shopName: string = 'TS Mart'; // [!code word:\:]
const isOpen: boolean = true;
const taxRate: number = 0.19;
```
</WindowMockup>

---
layout: default
---

# Complex Types

## Objects

<WindowMockup codeblock>
```ts {*|1|*}
const products: { id: number; name: string; price: number } =  {
   id: 1, name: 'Kaffee', price: 4.5
 };
```
</WindowMockup>

---
layout: default
---

# Complex Types

## Arrays

<WindowMockup codeblock>
```ts {*|1,4|*}
const products: { ... } [] = [
  { id: 1, name: 'Kaffee', price: 4.5 },
  { id: 2, name: 'Tee', price: 3.2 },
];
```
</WindowMockup>

---
layout: default
---

# Functions

<WindowMockup codeblock>

```ts {*|2|3|*}
function calcSubtotal(
  items: { product: { id: number; name: string; price: number }; quantity: number }[]
): number {
  return items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
}
```

</WindowMockup>

---
layout: default
---

# Type Inference

<WindowMockup codeblock>

```ts
const shopName = 'TS Mart'; // inferiert: string
const totals = [12.8, 5.4]; // inferiert: number[]
const mix = ['eins', 1]; // inferiert: (string|number)[]
```

</WindowMockup>
