class Order {
  public id: string;
  public total: number;

  constructor(id: string, total: number) {
    this.id = id;
    this.total = total;
  }
}

class OrderService {
  public placeOrder(order: Order): string {
    if (!this.validateOrder(order)) {
      return "Ungültige Bestellung";
    }
    return `Bestellung ${order.id} wurde platziert`;
  }

  public shipOrder(order: Order): string {
    return `Bestellung ${order.id} wurde versendet`;
  }

  private validateOrder(order: Order): boolean {
    return order.id.length > 0 && order.total > 0;
  }
}

const service = new OrderService();

const order = new Order("A-100", 12.8);
console.log(service.placeOrder(order));
console.log(service.shipOrder(order));

export { };
