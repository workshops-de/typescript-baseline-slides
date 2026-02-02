Details zur Loesung werden im Video genannt.

```ts
const shopName: string = 'TS Mart';
const isOpen: boolean = true;

const order: {
  id: string;
  customer: { name: string; vip: boolean };
  total: number;
} = {
  id: 'A-100',
  customer: { name: 'Mina', vip: true },
  total: 12.8,
};

function formatSummary(
  order: {
    id: string;
    customer: { name: string; vip: boolean };
    total: number;
  },
  shopName: string
): string {
  const vipBadge = order.customer.vip ? 'VIP' : 'REG';
  return `${shopName} | Bestellung ${order.id} | ${order.customer.name} | ${vipBadge} | Gesamt: ${order.total.toFixed(
    2
  )} EUR`;
}

const summary: string = formatSummary(order, shopName);

console.log(isOpen, summary);

export {};
```
