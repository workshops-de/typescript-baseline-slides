/*
 * TODO: Organisiere die Funktionen in zwei Klassen mit passenden Access Modifiers.
 * 1) Definiere eine Klasse `Order` mit `public id` (string) und `public total` (number).
 * 2) Definiere eine Klasse `OrderService`, die im Konstruktor ein `Order` entgegennimmt.
 * 3) Baue die Funktionen unten als Methoden in `OrderService` ein:
 *    - `placeOrder` soll `public` sein.
 *    - `shipOrder` soll `public` sein.
 *    - `validateOrder` soll `private` sein (wird nur intern genutzt).
 * 4) `placeOrder` soll `validateOrder` aufrufen und bei `true` eine Nachricht zurückgeben.
 */

function validateOrder(id: string, total: number): boolean {
  return id.length > 0 && total > 0;
}

function placeOrder(id: string, total: number): string {
  if (!validateOrder(id, total)) {
    return "Ungültige Bestellung";
  }
  return `Bestellung ${id} wurde platziert`;
}

function shipOrder(id: string): string {
  return `Bestellung ${id} wurde versendet`;
}

/*
* Usage:
* const service = new OrderService();
* const order = new Order("A-100", 12.8);
*
* console.log(service.placeOrder(order));
* console.log(service.shipOrder(order));
*/

export { };
