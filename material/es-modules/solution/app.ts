import { formatOrder, type Order } from './order';

const order: Order = { id: 'A-100', total: 12.8 };
console.log(formatOrder(order));
