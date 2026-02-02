Fuege Typannotationen fuer Primitives, ein Objekt und eine Methode hinzu.
Verwende einfache Inline-Typen.

```ts
const shopName = 'TS Mart';
const isOpen = true;

const order = {
  id: 'A-100',
  customer: { name: 'Mina', vip: true },
  total: 12.8,
};

function formatSummary(order, shopName) {
  const vipBadge = order.customer.vip ? 'VIP' : 'REG';
  return `${shopName} | Bestellung ${order.id} | ${order.customer.name} | ${vipBadge} | Gesamt: ${order.total.toFixed(
    2
  )} EUR`;
}

const summary = formatSummary(order, shopName);

console.log(isOpen, summary);

export {};
```
