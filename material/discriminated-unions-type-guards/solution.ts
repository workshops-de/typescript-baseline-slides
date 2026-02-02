type Payment =
  | { kind: "card"; last4: string }
  | { kind: "paypal"; email: string };

const payment: Payment = {
  kind: "card",
  last4: "1234",
};

function formatPayment(payment: Payment): string {
  switch (payment.kind) {
    case "card":
      return `Karte **** ${payment.last4}`;
    case "paypal":
      return `PayPal (${payment.email})`;
  }
}

const label: string = formatPayment(payment);

console.log(label);

export { };
