## Aufgabe

Nutze Generics für eine Klasse.

1. Erstelle eine generische Klasse `Store<T>` mit:
   - privatem Array `items`
   - Methode `add(item: T)` zum Hinzufügen
   - Methode `remove(item: T)` die ein Element entfernt
   - Methode `all()` zum Auslesen
2. Verwende `Store<Order>` mit dem Order-Typ unten.

## Startcode

```typescript
type Order = { id: string; total: number };

const order = { id: 'A-100', total: 12.8 };
const order2 = { id: 'A-101', total: 15.4 };

/* Usage:
 * const store = new Store<Order>();
 * store.add(order);
 * store.add(order2);
 * store.remove(order);
 * console.log(store.all());
 */

export {};
```
