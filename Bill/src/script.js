var ITEMS = {
  burger: { name: "Burger", price: 120 },
  pizza: { name: "Pizza", price: 250 },
  frankie: { name: "Frankie", price: 150 },
  fries: { name: "Fries", price: 90 },
};

var cart = {};
var cartList = document.getElementById("cartList");
var totalAmountEl = document.getElementById("totalAmount");
var generateBillBtn = document.getElementById("generateBill");
var clearCartBtn = document.getElementById("clearCart");
var billModal = document.getElementById("billModal");
var billContent = document.getElementById("billContent");
var closeBillBtn = document.getElementById("closeBill");

function addToCart(item) {
  cart[item] = (cart[item] || 0) + 1;
  renderCart();
}
function removeFromCart(item) {
  if (!cart[item]) return;
  cart[item]--;
  if (cart[item] < 0) cart[item] = 0;
  renderCart();
}
function clearCart() {
  for (var i in cart) cart[i] = 0;
  renderCart();
}

function calcTotal() {
  var total = 0;
  for (var i in cart) total += cart[i] * (ITEMS[i] ? ITEMS[i].price : 0);
  return total;
}

function renderCart() {
  var keys = [];
  for (var i in cart) keys.push(i); 

  var rows = keys
    .filter((i) => cart[i] > 0)
    .map(
      (i) => `
      <div class="p-5">
        ${ITEMS[i] ? ITEMS[i].name : i} - ${cart[i]} × ₹${
        ITEMS[i] ? ITEMS[i].price : 0
      }
        <button onclick="removeFromCart('${i}')"> - </button>
        <button onclick="addToCart('${i}')"> + </button>
      </div>
    `
    )
    .join("");

  cartList.innerHTML = rows|| "<i>Cart is empty</i>";
  totalAmountEl.textContent = `₹${calcTotal()}`;
}

function openBill() {
  var subtotal = calcTotal();
  var gst = subtotal * 0.18;
  var total = subtotal + gst;

  var keys = [];
  for (var i in cart) keys.push(i);

  var rows = keys.filter((i) => cart[i] > 0).map((i) => `
      <tr>
        <td>${ITEMS[i] ? ITEMS[i].name : i}</td>
        <td>${cart[i]}</td>
        <td>₹${ITEMS[i] ? ITEMS[i].price : 0}</td>
        <td>₹${cart[i] * (ITEMS[i] ? ITEMS[i].price : 0)}</td>
      </tr>
    `
    ).join("");
    // console.log(rows);
    
  if (!rows) rows = `<tr><td colspan="4">No items</td></tr>`;

  billContent.innerHTML = `
    <table border="1" width="100%">
      <tr><th>Item</th><th>Qty</th><th>Rate</th><th>Amount</th></tr>
      ${rows}
    </table>
    <p>Subtotal: ₹${subtotal}</p>
    <p>GST (18%): ₹${gst}</p>
    <p>Total: ₹${total}</p>
  `;

  billModal.classList.remove("hidden");
}

function closeBill() {
  billModal.classList.add("hidden");
}

document.querySelectorAll(".add-btn").forEach((btn) => {
  btn.onclick = () => addToCart(btn.getAttribute("data-item"));
});
generateBillBtn.onclick = openBill;
clearCartBtn.onclick = clearCart;
closeBillBtn.onclick = closeBill;


renderCart();
