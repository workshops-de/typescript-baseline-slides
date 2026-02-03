## Lösung

Details zur Lösung werden im Video erläutert.

```typescript
class Store<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  remove(item: T): void {
    this.items = this.items.filter((entry) => entry !== item);
  }

  all(): T[] {
    return this.items;
  }
}

type Order = { id: string; total: number };

const order: Order = { id: 'A-100', total: 12.8 };
const order2: Order = { id: 'A-101', total: 15.4 };

const store = new Store<Order>();
store.add(order);
store.add(order2);
store.remove(order);

console.log(store.all());

export {};
```
