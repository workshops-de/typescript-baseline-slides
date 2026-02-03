---
layout: section
---

# Discriminated Unions & Type Guards

---
layout: little-what
---

# Sichere Unterscheidung verschiedener Datenformen durch ein gemeinsames Unterscheidungsfeld

---
layout: why
---

# Warum brauchst du Discriminated Unions?

Wenn unterschiedliche Datenformen in einem Wert stecken, brauchst du eine sichere Methode, um je nach Fall die passenden Felder zu verwenden. Discriminated Unions machen diese Fälle eindeutig.

---

# Von einfachen Unions zu Objekten

Starte mit Primitives und dann die gleiche Idee bei Objekten:

<WindowMockup codeblock title="discriminated-union.ts">

<!-- prettier-ignore -->
```ts {*|1|4|4-6|*} twoslash
type Input = string | number; // [!code word:|]

function formatInput(value: Input): string {
  if (typeof value === 'string') { // [!code word:typeof]
    return value.toUpperCase();
  }
  return value.toFixed(2);
}
```

<!-- prettier-ignore-end -->

</WindowMockup>

---

# Objekte mit Discriminator-Feld

<WindowMockup codeblock title="discriminated-union.ts">

```ts {all} twoslash
type Payment = { kind: 'card'; last4: string } | { kind: 'paypal'; email: string };

function formatPayment(payment: Payment): string {
  switch (payment.kind) {
    case 'card':
      return `Karte **** ${payment.last4}`;
    case 'paypal':
      return `PayPal (${payment.email})`;
  }
}
```

</WindowMockup>

<br/>

<Callout type="info">Mithilfe von if-Bedingungen oder switch-Statements schreibst du <strong>inline Type-Guards</strong>, die TypeScript helfen zu verstehen, welcher Typ verarbeitet wird.</Callout>

---
layout: sub-section
---

# Eigene Type Guards

---
layout: little-what
---

# Eine Funktion, die TypeScript sagt, welchen Typ ein Wert hat – erkennbar an `value is Type` im Rückgabetyp

---
layout: why
---

# Warum eigene Type Guards?

Wenn die Unterscheidung komplexer ist als ein simples `typeof` oder ein `switch`, kapseln Type Guards die Logik und machen den Code lesbar.

---

# Type Guard Beispiel

<WindowMockup codeblock title="type-guard.ts">

<!-- prettier-ignore -->
```ts {*|3-5|8|*} twoslash
type Payment = { kind: 'card'; last4: string } | { kind: 'paypal'; email: string };

function isCard(payment: Payment): payment is { kind: 'card'; last4: string } {  // [!code word:payment is]
  return payment.kind === 'card';
}

function formatPayment(payment: Payment): string {
  if (isCard(payment)) {
    return `Karte **** ${payment.last4}`;
  }
  return `PayPal (${payment.email})`;
}
```

<!-- prettier-ignore -->
</WindowMockup>

---
layout: task
---

# Discriminated Unions & Type Guards
