---
layout: section
---

# Generics

---
layout: little-what
---

# Typen flexibel machen ohne Typsicherheit zu verlieren

---
layout: why
---

# Warum brauchst du Generics?

Generics erlauben, Typen flexibel zu machen, ohne Typsicherheit zu verlieren. So kann eine Funktion mit unterschiedlichen Typen arbeiten und trotzdem korrekte Rückgabetypen liefern.

---

# Generics in Funktionen

<WindowMockup codeblock title="wrap.ts">

```ts {all} twoslash
function wrap<T>(value: T) {
  return { value };
}

const wrappedOrderId = wrap('A-100'); // { value: string }
const wrappedTotal = wrap(12.8); // { value: number }
```

</WindowMockup>

---

# Generics in Interfaces

<WindowMockup codeblock title="api-response.ts">

```ts {all} twoslash
interface ApiResponse<T> {
  data: T;
  status: 'ok' | 'error';
}

type Order = { id: string; total: number };

const response: ApiResponse<Order> = {
  data: { id: 'A-100', total: 12.8 },
  status: 'ok',
};
```

</WindowMockup>

---

# Generics in Klassen

<WindowMockup codeblock title="store.ts">

```ts {all} twoslash
class Store<T> {
  private items: T[] = [];

  add(item: T) {
    this.items.push(item);
  }

  all(): T[] {
    return this.items;
  }
}

type Order = { id: string; total: number };

const orderStore = new Store<Order>();
orderStore.add({ id: 'A-100', total: 12.8 });
```

</WindowMockup>

---

# Ausblick

Erweiterte Konzepte wie Constraints (`extends`), Default-Typen und Utility-Types findest du in der TypeScript-Doku:

https://www.typescriptlang.org/docs/handbook/2/generics.html

---
layout: task
---

# Generics
