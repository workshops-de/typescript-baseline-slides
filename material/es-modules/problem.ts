/*
 * TODO: Teile den Code in Module auf.
 * 1) Erstelle in einer Datei `order.ts` einen `export` für den Typ `Order`
 *    und eine Funktion `formatOrder`.
 * 2) Importiere beides in `app.ts` und nutze es.
 *
 * Hinweis: Hier im Problem steht beides noch in einer Datei.
 */

type Order = { id: string; total: number };

function formatOrder(order: Order): string {
  return `Bestellung ${order.id} | Gesamt: ${order.total.toFixed(2)} EUR`;
}

const order: Order = { id: 'A-100', total: 12.8 };
console.log(formatOrder(order));

export {};
