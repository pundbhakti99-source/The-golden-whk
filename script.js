// 1. PRODUCT DATABASE
const products = [
    { id: 1, name: "Classic Choco Chip", price: 12.00, category: "cookies", desc: "Our signature soft-bake.", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80" },
    { id: 2, name: "Red Velvet Cream", price: 14.00, category: "cookies", desc: "Velvety cocoa with white chips.", img: "https://images.unsplash.com/photo-1559622314-f83c65644781?auto=format&fit=crop&w=600&q=80" },
    { id: 3, name: "Classic Croissant", price: 4.50, category: "pastries", desc: "24 layers of buttery goodness.", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80" },
    { id: 4, name: "Midnight Velvet", price: 45.00, category: "cakes", desc: "Dark chocolate ganache layers.", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80" },
    { id: 5, name: "Artisan Sourdough", price: 9.00, category: "pastries", desc: "Crusty outside, airy inside.", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80" },
    { id: 6, name: "Berry Cheesecake", price: 38.00, category: "cakes", desc: "Creamy NY style with fresh fruit.", img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=600&q=80" }
];

// 2. STATE MANAGEMENT (LocalStorage)
let cart = JSON.parse(localStorage.getItem('whiskCart')) || {};
let currentUser = JSON.parse(localStorage.getItem('whiskUser')) || null;

// 3. INITIALIZE SITE
window.onload = () => {
    showSkeletons();
    setTimeout(() => {
        renderProducts(products);
        updateCartUI();
        updateAuthUI();
    }, 1200); // Simulated loading time
};

// 4. RENDERING LOGIC
function renderProducts(productsToDisplay) {
    const grid = document.getElementById("productGrid");
    const noResults = document.getElementById("noResults");
    grid.innerHTML = "";

    if (productsToDisplay.length === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
        productsToDisplay.forEach(p => {
            grid.innerHTML += `
                <div class="product-card">
                    <img src="${p.img}" alt="${p.name}" loading="lazy" onclick="openQuickView(${p.id})">
                    <h3>${p.name}</h3>
                    <p>${p.desc}</p>
                    <p class="price">$${p.price.toFixed(2)}</p>
                    <button class="add-to-cart" onclick="addToCart(${p.id})">Add to Cart</button>
                </div>`;
        });
    }
}

function showSkeletons() {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = Array(4).fill(0).map(() => `
        <div class="product-card">
            <div class="skeleton skeleton-img"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text" style="width:50%"></div>
        </div>`).join('');
}

// 5. CART & QUANTITY LOGIC
function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (cart[id]) {
        cart[id].qty++;
    } else {
        cart[id] = { ...product, qty: 1 };
    }
    saveAndRefresh();
    if (!document.getElementById("cartDrawer").classList.contains("open")) toggleCart();
}

function changeQty(id, delta) {
    if (cart[id]) {
        cart[id].qty += delta;
        if (cart[id].qty <= 0) delete cart[id];
        saveAndRefresh();
    }
}

function saveAndRefresh() {
    localStorage.setItem('whiskCart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const container = document.getElementById("cartItems");
    const items = Object.values(cart);
    let total = 0, count = 0;

    container.innerHTML = items.length ? items.map(item => {
        total += item.price * item.qty;
        count += item.qty;
        return `
            <div class="cart-item-row">
                <div><strong>${item.name}</strong><br>$${item.price.toFixed(2)}</div>
                <div class="qty-controls">
                    <button onclick="changeQty(${item.id}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button onclick="changeQty(${item.id}, 1)">+</button>
                </div>
            </div>`;
    }).join('') : '<p class="empty-msg">Your basket is empty.</p>';

    document.getElementById("cartTotal").innerText = `$${total.toFixed(2)}`;
    document.getElementById("cartCount").innerText = count;
}

// 6. QUICK VIEW & RELATED
function openQuickView(id) {
    const p = products.find(p => p.id === id);
    document.getElementById("quickViewData").innerHTML = `
        <div class="qv-flex">
            <img src="${p.img}" style="width:100%; max-width:250px; border-radius:10px;">
            <div>
                <h2>${p.name}</h2>
                <p>${p.desc}</p>
                <p class="price">$${p.price.toFixed(2)}</p>
                <button class="add-to-cart" onclick="addToCart(${p.id})">Add to Basket</button>
            </div>
        </div>`;
    
    // Related items logic
    const related = products.filter(item => item.category === p.category && item.id !== id).slice(0, 2);
    document.getElementById("relatedProducts").innerHTML = related.map(r => `
        <div class="related-card" onclick="openQuickView(${r.id})">
            <img src="${r.img}">
            <p>${r.name}</p>
        </div>`).join('');
    
    document.getElementById("quickViewModal").style.display = "block";
}

function closeQuickView() { document.getElementById("quickViewModal").style.display = "none"; }
function toggleCart() { document.getElementById("cartDrawer").classList.toggle("open"); }

// 7. SEARCH & FILTERS
document.getElementById("searchInput").addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    renderProducts(products.filter(p => p.name.toLowerCase().includes(term)));
});

function filterCategory(cat, e) {
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");
    renderProducts(cat === 'all' ? products : products.filter(p => p.category === cat));
}

// 8. CHECKOUT & AUTH
function openCheckout() {
    if (Object.keys(cart).length === 0) return alert("Basket is empty!");
    const sub = Object.values(cart).reduce((s, i) => s + (i.price * i.qty), 0);
    document.getElementById("subtotalVal").innerText = `$${sub.toFixed(2)}`;
    document.getElementById("grandTotalVal").innerText = `$${(sub + 5).toFixed(2)}`;
    document.getElementById("checkoutOverlay").classList.add("active");
}

function finalizeOrder() {
    if(!document.getElementById("shipName").value) return alert("Please enter your name!");
    alert("Thank you! Your order has been placed.");
    cart = {}; saveAndRefresh();
    document.getElementById("checkoutOverlay").classList.remove("active");
}

function handleAuth() {
    const name = document.getElementById("username").value;
    if(!name) return;
    localStorage.setItem('whiskUser', JSON.stringify({ name }));
    location.reload();
}

function updateAuthUI() {
    if(currentUser) document.getElementById("welcomeMsg").innerText = `Hello, ${currentUser.name}!`;
}
