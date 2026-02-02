/*
 * TODO: Nutze das Beispiel aus "syntax-type-annotation" und erstelle wiederverwendbare Typen.
 * 1) Definiere ein `interface` Customer mit `name` (string) und optional `vip` (boolean).
 * 2) Definiere ein `interface` Order mit `id` (string), `customer` (Customer) und `total` (number).
 * 3) Definiere einen `type` SummaryFn fuer die Funktion (Parameter und Rueckgabe).
 * 4) Typisiere die Variablen unten mit den passenden Typen.
 */

const shopName = "TS Mart";
const isOpen = true;

const order = {
  id: "A-100",
  customer: { name: "Mina", vip: true },
  total: 12.8,
};

function formatSummary(order, shopName) {
  const vipBadge = order.customer.vip ? "VIP" : "REG";
  return `${shopName} | Bestellung ${order.id} | ${order.customer.name} | ${vipBadge} | Gesamt: ${order.total.toFixed(
    2
  )} EUR`;
}

const summary = formatSummary(order, shopName);

console.log(isOpen, summary);

export { };
