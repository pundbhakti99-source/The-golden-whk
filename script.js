let cart = [];
let total = 0;
let discountApplied = false;

// 1. SEARCH & FILTERS
document.getElementById("searchInput").addEventListener("keyup", function () {
    const value = this.value.toLowerCase();
    document.querySelectorAll(".product-card").forEach(card => {
        const title = card.querySelector("h3").innerText.toLowerCase();
        card.style.display = title.includes(value) ? "block" : "none";
    });
});

function filterCategory(category, event) {
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    document.querySelectorAll(".product-card").forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// 2. LOCATION SIMULATION (Theobroma Style)
function checkLocation() {
    let pin = prompt("Enter your Pincode to check delivery:");
    if(pin && pin.length === 6) {
        document.getElementById("userLocation").innerText = "Delivering to " + pin;
    } else {
        alert("Invalid Pincode!");
    }
}

// 3. CART LOGIC
function toggleCart() {
    document.getElementById("cartDrawer").classList.toggle("open");
}

function addToCart(name, price, isCake) {
    cart.push({ name, price });
    total += price;
    
    // Show cake message field if a cake is added
    if(isCake) document.getElementById("cartExtras").style.display = "block";
    
    updateCartUI();
    if(!document.getElementById("cartDrawer").classList.contains("open")) toggleCart();
}

function applyDiscount() {
    if(discountApplied) return alert("Discount already applied!");
    const code = prompt("Enter Code:");
    if (code === "WHISK10") {
        total = total * 0.9;
        discountApplied = true;
        updateCartUI();
        alert("10% Discount Applied!");
    }
}

function updateCartUI() {
    document.getElementById("cartCount").innerText = cart.length;
    const container = document.getElementById("cartItems");
    
    if (cart.length === 0) {
        container.innerHTML = '<p class="empty-msg">Your basket is empty.</p>';
        document.getElementById("cartExtras").style.display = "none";
    } else {
        container.innerHTML = cart.map(item => `
            <div style="display:flex; justify-content:space-between; padding: 10px 0; border-bottom:1px solid #eee">
                <span>${item.name}</span>
                <strong>$${item.price.toFixed(2)}</strong>
            </div>
        `).join('');
    }
    document.getElementById("cartTotal").innerText = `$${total.toFixed(2)}`;
}

function proceedToCheckout() {
    if(cart.length === 0) return alert("Cart is empty!");
    const msg = document.getElementById("cakeMessage").value;
    alert(`Order Placed!\nTotal: $${total.toFixed(2)}\nMessage: ${msg || "None"}`);
}

