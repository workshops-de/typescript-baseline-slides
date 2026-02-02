## Lernziel

Du verstehst Generics und kannst sie für Funktionen sowie Interfaces/Klassen in einem Shop-Kontext einsetzen.

## Warum brauchst du Generics?

Generics erlauben, Typen flexibel zu machen, ohne Typsicherheit zu verlieren. So kann eine Funktion mit unterschiedlichen Typen arbeiten und trotzdem korrekte Rückgabetypen liefern.

## Generics in Funktionen

```ts
function wrap<T>(value: T) {
  return { value };
}

const wrappedOrderId = wrap('A-100'); // { value: string }
const wrappedTotal = wrap(12.8); // { value: number }
```

## Generics in Interfaces/Klassen

```ts
interface ApiResponse<T> {
  data: T;
  status: 'ok' | 'error';
}

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

## Ausblick

Erweiterte Konzepte wie Constraints (`extends`), Default-Typen und Utility-Types findest du in der TypeScript-Doku:
https://www.typescriptlang.org/docs/handbook/2/generics.html
