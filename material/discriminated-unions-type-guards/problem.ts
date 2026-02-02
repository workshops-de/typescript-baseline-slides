/*
 * TODO: Erstelle eine Discriminated Union für Zahlungsarten und nutze Type Guards.
 * 1) Definiere `Payment` als Union mit `kind: "card"` und `kind: "paypal"`.
 *    - card: `last4` (string)
 *    - paypal: `email` (string)
 * 2) Typisiere die Variable `payment`.
 * 3) Implementiere `formatPayment` mit `switch` oder `if`, sodass je nach `kind`
 *    die richtigen Felder genutzt werden.
 */

const payment = {
  kind: "card",
  last4: "1234",
};

function formatPayment(payment) {
  return "";
}

const label = formatPayment(payment);

console.log(label);

export { };
