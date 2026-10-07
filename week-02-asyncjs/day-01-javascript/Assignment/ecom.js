// Write a single chainable JavaScript expression using `filter`, `map`, and arrow functions
// to transform an array of raw e-commerce order objects—containing `id`, `status`,
// and an `items` array of `{ name, price }` objects—into an array of objects shaped like
// `{ id, totalAmount, itemNames }`, keeping only orders where `status` is `'completed'` 
// and the total sum of item prices exceeds `$100`, with `totalAmount` rounded to 2 decimal places
// and `itemNames` formatted as a comma-separated string.

const rawOrders = [
  {
    id: 'ORD-101',
    status: 'completed',
    items: [
      { name: 'Wireless Mouse', price: 25.5 },
      { name: 'Mechanical Keyboard', price: 85.0 }
    ]
  },
  {
    id: 'ORD-102',
    status: 'pending',
    items: [
      { name: 'Monitor', price: 220.0 }
    ]
  },
  {
    id: 'ORD-103',
    status: 'completed',
    items: [
      { name: 'USB-C Cable', price: 12.0 },
      { name: 'Power Bank', price: 35.0 }
    ]
  },
  {
    id: 'ORD-104',
    status: 'completed',
    items: [
      { name: 'Headphones', price: 150.0 },
      { name: 'Carrying Case', price: 20.0 }
    ]
  }
];

const ordersCompleted = rawOrders
.filter(order => {
    const total = order.items.reduce((sum, item) => sum + item.price, 0);
    return order.status === 'completed' && total > 100;
})
.map(order => ({
    id: order.id,
    totalAmount: order.items.reduce((sum, item) => sum + item.price, 0),
    itemName: order.items.map(item => item.name).join(' ,')
})
);

console.log(ordersCompleted);