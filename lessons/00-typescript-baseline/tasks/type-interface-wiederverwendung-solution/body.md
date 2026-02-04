Details zur Lösung werden im Video genannt.

```ts
interface Customer {
  name: string;
  vip?: boolean;
}

interface Order {
  id: string;
  customer: Customer;
  total: number;
}

type SummaryFn = (order: Order, shopName: string) => string;

const shopName: string = 'TS Mart';
const isOpen: boolean = true;

const order: Order = {
  id: 'A-100',
  customer: { name: 'Mina', vip: true },
  total: 12.8,
};

const formatSummary: SummaryFn = (order, shopName) => {
  const vipBadge = order.customer.vip ? 'VIP' : 'REG';
  return `${shopName} | Bestellung ${order.id} | ${order.customer.name} | ${vipBadge} | Gesamt: ${order.total.toFixed(
    2
  )} EUR`;
};

const summary: string = formatSummary(order, shopName);

console.log(isOpen, summary);

export {};
```
