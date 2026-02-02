export type Order = { id: string; total: number };

export function formatOrder(order: Order): string {
  return `Bestellung ${order.id} | Gesamt: ${order.total.toFixed(2)} EUR`;
}
