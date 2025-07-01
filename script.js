let cart = [];
const cartItems = document.getElementById("cart-items");
const totalSpan = document.getElementById("total");

function addToCart(name, price) {
  cart.push({ name, price });
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} — ₪${item.price}`;
    cartItems.appendChild(li);
  });

  totalSpan.textContent = total;
}

function clearCart() {
  cart = [];
  renderCart();
}
