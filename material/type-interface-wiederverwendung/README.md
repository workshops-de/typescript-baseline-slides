## Lernziel

Du kannst `type` und `interface` nutzen, um Domänenmodelle wiederzuverwenden und zu erweitern, inklusive optionaler Properties.

## Warum brauchst du wiederverwendbare Typen?

Wenn mehrere Objekte die gleiche Struktur haben (z. B. Bestellungen), vermeiden wiederverwendbare Typen doppelte Arbeit und halten Modelle konsistent. Eine Änderung muss nur an einer Stelle passieren.

## Was ist das Problem mit Inline-Typisierungen?

Inline-Typen sind schnell, aber schwer wartbar: Die Typen sind lang, wiederholen sich und können leicht auseinanderlaufen. Das macht Refactoring und Reviews fehleranfällig.

## Interface

Ein `interface` beschreibt die Form von Objekten. Es eignet sich besonders für Domain-Modelle und lässt sich mit `extends` erweitern.
Wann nimmst du es? Wenn du Objektstrukturen definieren oder erweitern möchtest.

### Beispiel

```ts
interface Customer {
  name: string;
  vip?: boolean;
}

interface OrderBase {
  id: string;
  customer: Customer;
}

interface OrderWithTotal extends OrderBase {
  total: number;
}
```

## `type`

Ein `type` ist ein Alias für einen Typ. Er kann Objekte beschreiben und Typen kombinieren, z. B. mit `&` (Intersection).
Warum gibt es ihn trotz `interface`? Weil du `type` auch für Nicht-Objekte und für Kombinationen flexibel einsetzen kannst.

Wann nimmst du ihn? Wenn du Typen kombinieren, Varianten bauen oder einen klaren Alias brauchst.

### Beispiel

```ts
type OrderWithNote = OrderBase & { note?: string };

const order: OrderWithNote = {
  id: 'A-100',
  customer: { name: 'Mina' },
  note: 'Hello there!',
};
```

### Beispiel für Nicht-Objekte

```ts
type OrderId = string;
type Amount = number;
```
