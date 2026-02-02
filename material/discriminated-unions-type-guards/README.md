## Lernziel

Du kannst Discriminated Unions nutzen und mit einfachen Type Guards (if/switch) sicher auf die passenden Felder zugreifen.

## Warum brauchst du Discriminated Unions?

Wenn unterschiedliche Datenformen in einem Wert stecken, brauchst du eine sichere Methode, um je nach Fall die passenden Felder zu verwenden. Discriminated Unions machen diese Fälle eindeutig.

## Von einfachen Unions zu Objekten

Starte mit Primitives und dann die gleiche Idee bei Objekten:

```ts
type Input = string | number;

function formatInput(value: Input): string {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}
```

Jetzt als Objekte mit Discriminator-Feld:

```ts
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

## Eigene Type Guards

Warum brauchst du die? Wenn die Unterscheidung komplexer ist als ein simples `typeof` oder ein `switch`, kapseln Type Guards die Logik und machen den Code lesbar.

Beispiel:

```ts
function isCard(payment: Payment): payment is { kind: 'card'; last4: string } {
  return payment.kind === 'card';
}

function formatPayment(payment: Payment): string {
  if (isCard(payment)) {
    return `Karte **** ${payment.last4}`;
  }
  return `PayPal (${payment.email})`;
}
```
