const sales = [
  { item: "laptop", quantity: 2, price: 300 },
  { item: "mouse", quantity: 3, price: 50 },
  { item: "monitor", quantity: 5, price: 150 },
];

console.log("Exercise 1: Calculate total sales amount");
function calculateTotalSales(salesArray) {
  let total = 0;

  total = salesArray.reduce((acc, item) => {
    return (acc += Number(item.price) * Number(item.quantity));
  }, 0);

  return total;
}

console.log("Exercise 2: Generate an order receipt");
function generateReceipt(salesArray) {
  let total = 0;
  salesArray.forEach((item) => {
    const itemTotal = Number(item.quantity) * Number(item.price);
    total += itemTotal;
    console.log(`Item ${item.item}, Total Cost: ${itemTotal}`);
  });
  console.log(`Total Cost: ${total}`);
}

const totalSales = calculateTotalSales(sales);
const userReceipt = generateReceipt(sales);

console.log(totalSales);
console.log(userReceipt);

console.log("Exercise 3: Validate passwords");
const passwords = [
  "Password123",
  "short",
  "ValidPass123",
  "Too_long_Password_Example",
  "12345",
];

function validatePasswords(passwords) {
  console.log("pass 03", passwords.length);
  for (let i = 0; i < passwords.length; i++) {
    const regExp = /^[A-Za-z0-9]{8,20}$/;
    if (regExp.test(passwords[i])) {
      console.log("Valid password");
    } else {
      console.log("Invalid password");
    }
  }
}
validatePasswords(passwords);

console.log("Exercise 4: Track product stock levels");
const stockProducts = [
  { product: "laptops", stock: 3 },
  { product: "mouse", stock: 0 },
  { product: "monitors", stock: 1 },
];

function checkStockLevels(stock) {
  stock.forEach((item) => {
    if (item.stock > 0) {
      console.log(item.product, "in Stock");
    } else {
      console.log(item.product, "OUT OF Stock");
    }
  });
}

checkStockLevels(stockProducts);
