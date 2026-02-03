## Lösung

Details zur Lösung werden im Video erläutert.

**order.ts**

```typescript
export type Order = { id: string; total: number };

export function formatOrder(order: Order): string {
  return `Bestellung ${order.id} | Gesamt: ${order.total.toFixed(2)} EUR`;
}
```

**app.ts**

```typescript
import { formatOrder, type Order } from './order';

const order: Order = { id: 'A-100', total: 12.8 };
console.log(formatOrder(order));
```
