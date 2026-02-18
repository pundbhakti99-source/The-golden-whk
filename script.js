// --- 1. DATA SOURCE ---
const products = [
    { id: 1, name: "Classic Choco Chip", price: 12.00, category: "cookies", desc: "Our signature soft-bake.", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80" },
    { id: 2, name: "Red Velvet Cream", price: 14.00, category: "cookies", desc: "Velvety cocoa with white chips.", img: "https://images.unsplash.com/photo-1559622314-f83c65644781?auto=format&fit=crop&w=600&q=80" },
    { id: 3, name: "Classic Croissant", price: 4.50, category: "pastries", desc: "24 layers of buttery goodness.", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80" },
    { id: 4, name: "Midnight Velvet", price: 45.00, category: "cakes", desc: "Dark chocolate ganache layers.", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80" },
    { id: 5, name: "Artisan Sourdough", price: 9.00, category: "pastries", desc: "Crusty outside, airy inside.", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80" }
];

let cart = JSON.parse(localStorage.getItem('whiskCart')) || {};
let currentUser = JSON.parse(localStorage.getItem('whiskUser')) || null;

// --- 2. CORE RENDERING ---
function renderProducts(data) {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = data.map(p => `
        <div class="product-card">
            <img src="${p.img}" onclick="openQuickView(${p.id})" loading="lazy">
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <p class="price">$${p.price.toFixed(2)}</p>
            <button class="add-to-cart" onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
    `).join('');
}

// --- 3. CART ACTIONS ---
function addToCart(id) {
    const p = products.find(p => p.id === id);
    if (cart[id]) cart[id].qty++;
    else cart[id] = { ...p, qty: 1 };
    updateCartUI();
    saveCart();
    if (!document.getElementById("cartDrawer").classList.contains("open")) toggleCart();
}

function changeQty(id, delta) {
    if (cart[id]) {
        cart[id].qty += delta;
        if (cart[id].qty <= 0) delete cart[id];
        updateCartUI();
        saveCart();
    }
}

function updateCartUI() {
    const items = Object.values(cart);
    const container = document.getElementById("cartItems");
    let total = 0, count = 0;

    container.innerHTML = items.length ? items.map(item => {
        total += item.price * item.qty;
        count += item.qty;
        return `
            <div style="display:flex; justify-content:space-between; margin-bottom:15px;">
                <div><strong>${item.name}</strong><br><small>$${item.price.toFixed(2)}</small></div>
                <div>
                    <button class="qty-btn" onclick="changeQty(${item.id},-1)">-</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
                </div>
            </div>`;
    }).join('') : '<p class="empty-msg">Your basket is empty.</p>';

    document.getElementById("cartTotal").innerText = `$${total.toFixed(2)}`;
    document.getElementById("cartCount").innerText = count;
}

function saveCart() { localStorage.setItem('whiskCart', JSON.stringify(cart)); }

// --- 4. MODALS & UI ---
function openQuickView(id) {
    const p = products.find(p => p.id === id);
    document.getElementById("quickViewData").innerHTML = `
        <div style="display:flex; gap:20px;">
            <img src="${p.img}" style="width:250px; border-radius:10px;">
            <div>
                <h2>${p.name}</h2><p>${p.desc}</p>
                <p class="price">$${p.price.toFixed(2)}</p>
                <button class="add-to-cart" onclick="addToCart(${p.id})">Add to Basket</button>
            </div>
        </div>`;
    renderRelated(p.category, p.id);
    document.getElementById("quickViewModal").style.display = "block";
}

function renderRelated(cat, id) {
    const related = products.filter(p => p.category === cat && p.id !== id).slice(0, 2);
    document.getElementById("relatedProducts").innerHTML = related.map(p => `
        <div class="related-card" onclick="openQuickView(${p.id})">
            <img src="${p.img}"><p>${p.name}</p>
        </div>`).join('');
}

function closeQuickView() { document.getElementById("quickViewModal").style.display = "none"; }
function toggleCart() { document.getElementById("cartDrawer").classList.toggle("open"); }
function toggleAuthModal() { 
    const m = document.getElementById("authModal");
    m.style.display = m.style.display === "block" ? "none" : "block"; 
}

// --- 5. SEARCH/FILTER ---
document.getElementById("searchInput").addEventListener("input", e => {
    const term = e.target.value.toLowerCase();
    renderProducts(products.filter(p => p.name.toLowerCase().includes(term)));
});

function filterCategory(cat, e) {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    e.target.classList.add("active");
    renderProducts(cat === 'all' ? products : products.filter(p => p.category === cat));
}

// --- 6. CHECKOUT ---
function openCheckout() {
    const items = Object.values(cart);
    if (!items.length) return alert("Cart empty!");
    const sub = items.reduce((s, i) => s + (i.price * i.qty), 0);
    document.getElementById("summaryItems").innerHTML = items.map(i => `<div class="summary-line"><span>${i.qty}x ${i.name}</span><span>$${(i.price*i.qty).toFixed(2)}</span></div>`).join('');
    document.getElementById("subtotalVal").innerText = `$${sub.toFixed(2)}`;
    document.getElementById("grandTotalVal").innerText = `$${(sub + 5).toFixed(2)}`;
    document.getElementById("checkoutOverlay").classList.add("active");
}

function finalizeOrder() {
    if (!document.getElementById("shipName").value) return alert("Please enter your name!");
    alert("Order Placed! 🧁");
    cart = {}; saveCart(); updateCartUI(); closeCheckout();
}

function closeCheckout() { document.getElementById("checkoutOverlay").classList.remove("active"); }

// --- 7. INIT ---
window.onload = () => {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = Array(4).fill('<div class="product-card"><div class="skeleton skeleton-img"></div><div class="skeleton skeleton-text"></div></div>').join('');
    setTimeout(() => { renderProducts(products); updateCartUI(); if(currentUser) document.getElementById("welcomeMsg").innerText = `Hello, ${currentUser.name}`; }, 1500);
};

function handleAuth() {
    const name = document.getElementById("username").value;
    if(!name) return;
    currentUser = { name };
    localStorage.setItem('whiskUser', JSON.stringify(currentUser));
    location.reload();
}
