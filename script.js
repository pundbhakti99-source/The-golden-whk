// 1. DATA WITH RATES IN RS (INR)
const products = [
    // --- COOKIES (1-12) ---
    { id: 1, name: "Classic Choco Chip", price: 120, category: "cookies", desc: "Signature soft-bake.", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400" },
    { id: 2, name: "Double Chocolate Fudge", price: 150, category: "cookies", desc: "Dark cocoa with lava center.", img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400" },
    { id: 3, name: "Oatmeal Raisin", price: 110, category: "cookies", desc: "Healthy oats and sun-dried raisins.", img: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=400" },
    { id: 4, name: "Red Velvet Cream", price: 140, category: "cookies", desc: "Velvety cocoa with white chips.", img: "https://images.unsplash.com/photo-1559622314-f83c65644781?w=400" },
    { id: 5, name: "Matcha Green Tea", price: 160, category: "cookies", desc: "Premium Uji matcha infusion.", img: "https://images.unsplash.com/photo-1618923850107-d1a234d7a73a?w=400" },
    { id: 6, name: "Lemon Shortbread", price: 90, category: "cookies", desc: "Buttery with a zesty glaze.", img: "https://images.unsplash.com/photo-1584000344911-a7ad0238c350?w=400" },
    { id: 7, name: "Macadamia Nut", price: 180, category: "cookies", desc: "White chocolate and roasted nuts.", img: "https://images.unsplash.com/photo-1551446591-142875a901a1?w=400" },
    { id: 8, name: "Peanut Butter Swirl", price: 130, category: "cookies", desc: "Creamy peanut butter core.", img: "https://images.unsplash.com/photo-1584000344911-a7ad0238c350?w=400" },
    { id: 9, name: "Coconut Macaroon", price: 100, category: "cookies", desc: "Toasted coconut flakes.", img: "https://images.unsplash.com/photo-1584000344911-a7ad0238c350?w=400" },
    { id: 10, name: "Salted Caramel Cookie", price: 145, category: "cookies", desc: "Gooey caramel with sea salt.", img: "https://images.unsplash.com/photo-1584000344911-a7ad0238c350?w=400" },
    { id: 11, name: "Espresso Bean", price: 135, category: "cookies", desc: "Coffee infused dark dough.", img: "https://images.unsplash.com/photo-1584000344911-a7ad0238c350?w=400" },
    { id: 12, name: "Sugar Sprinkles", price: 80, category: "cookies", desc: "Classic vanilla party cookie.", img: "https://images.unsplash.com/photo-1584000344911-a7ad0238c350?w=400" },

    // --- PASTRIES (13-26) ---
    { id: 13, name: "Classic Croissant", price: 95, category: "pastries", desc: "Buttery 24-layer pastry.", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400" },
    { id: 14, name: "Pain au Chocolat", price: 120, category: "pastries", desc: "Filled with semi-sweet chocolate.", img: "https://images.unsplash.com/photo-1621075160523-b936ad96132a?w=400" },
    { id: 15, name: "Almond Danish", price: 135, category: "pastries", desc: "Topped with sliced almonds.", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },
    { id: 16, name: "Cinnamon Roll", price: 110, category: "pastries", desc: "Gooey center with vanilla icing.", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400" },
    { id: 17, name: "Apple Turnover", price: 115, category: "pastries", desc: "Spiced apple in flaky puff.", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400" },
    { id: 18, name: "Blueberry Scone", price: 90, category: "pastries", desc: "Fresh berries with sugar crust.", img: "https://images.unsplash.com/photo-1551446591-142875a901a1?w=400" },
    { id: 19, name: "Strawberry Tart", price: 180, category: "pastries", desc: "Crème pâtissière and fresh fruit.", img: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=400" },
    { id: 20, name: "Eclair Classic", price: 140, category: "pastries", desc: "Choux pastry with chocolate.", img: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=400" },
    { id: 21, name: "Cheese Sourdough", price: 280, category: "pastries", desc: "Artisan loaf with cheddar.", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },
    { id: 22, name: "Palmier", price: 70, category: "pastries", desc: "Crunchy heart-shaped pastry.", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },
    { id: 23, name: "Apricot Danish", price: 130, category: "pastries", desc: "Glazed apricot center.", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },
    { id: 24, name: "Baklava Squares", price: 220, category: "pastries", desc: "Honey and pistachio layers.", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },
    { id: 25, name: "Quiche Lorraine", price: 190, category: "pastries", desc: "Savory egg and bacon tart.", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },
    { id: 26, name: "Pistachio Croissant", price: 165, category: "pastries", desc: "Green pistachio cream fill.", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },

    // --- CAKES (27-45) ---
    { id: 27, name: "Midnight Velvet Cake", price: 850, category: "cakes", desc: "Dark chocolate ganache layers.", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
    { id: 28, name: "Berry Cheesecake", price: 1200, category: "cakes", desc: "Creamy NY style with fresh fruit.", img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400" },
    { id: 29, name: "Birthday Funfetti", price: 950, category: "cakes", desc: "Vanilla bean with party sprinkles.", img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400" },
    { id: 30, name: "Strawberry Dream", price: 1100, category: "cakes", desc: "Light sponge with fresh cream.", img: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=400" },
    { id: 31, name: "Carrot Spice Cake", price: 800, category: "cakes", desc: "Spiced walnut and cream cheese.", img: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400" },
    { id: 32, name: "Tiramisu Classico", price: 1300, category: "cakes", desc: "Coffee-soaked Italian delicacy.", img: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=400" },
    { id: 33, name: "Salted Caramel Luxury", price: 1400, category: "cakes", desc: "Sweet and salty caramel drip.", img: "https://images.unsplash.com/photo-1519340333755-5672c7ec9cb2?w=400" },
    { id: 34, name: "Hazelnut Praline", price: 1550, category: "cakes", desc: "Crunchy hazelnut mousse.", img: "https://images.unsplash.com/photo-1519340333755-5672c7ec9cb2?w=400" },
    { id: 35, name: "Lemon Meringue", price: 750, category: "cakes", desc: "Tangy curd with toasted peak.", img: "https://images.unsplash.com/photo-1519340333755-5672c7ec9cb2?w=400" },
    { id: 36, name: "Black Forest", price: 900, category: "cakes", desc: "Cherries, cream, and chocolate.", img: "https://images.unsplash.com/photo-1519340333755-5672c7ec9cb2?w=400" },
    { id: 37, name: "Mango Summer Lush", price: 1050, category: "cakes", desc: "Seasonal mango pulp sponge.", img: "https://images.unsplash.com/photo-1519340333755-5672c7ec9cb2?w=400" },
    { id: 38, name: "Pistachio Rose Cake", price: 1600, category: "cakes", desc: "Elegant floral and nut flavors.", img: "https://images.unsplash.com/photo-1519340333755-5672c7ec9cb2?w=400" },
    { id: 39, name: "Opera Cake", price: 1800, category: "cakes", desc: "Six layers of French luxury.", img: "https://images.unsplash.com/photo-1519340333755-5672c7ec9cb2?w=400" },
    { id: 40, name: "Victoria Sponge", price: 650, category: "cakes", desc: "Classic jam and cream tea cake.", img: "https://images.unsplash.com/photo-1519340333755-5672c7ec9cb2?w=400" },
    { id: 41, name: "Coffee Walnut", price: 850, category: "cakes", desc: "Perfect with your morning brew.", img: "https://images.unsplash.com/photo-1519340333755-5672c7ec9cb2?w=400" },
    { id: 42, name: "Blueberry Bliss", price: 1100, category: "cakes", desc: "Fresh berries in every bite.", img: "https://images.unsplash.com/photo-1519340333755-5672c7ec9cb2?w=400" },
    { id: 43, name: "Dark Truffle Slab", price: 1250, category: "cakes", desc: "70% cocoa solid ganache.", img: "https://images.unsplash.com/photo-1519340333755-5672c7ec9cb2?w=400" },
    { id: 44, name: "Lotus Biscoff Cake", price: 1700, category: "cakes", desc: "Caramelized biscuit topping.", img: "https://images.unsplash.com/photo-1519340333755-5672c7ec9cb2?w=400" },
    { id: 45, name: "Honey Almond Cake", price: 780, category: "cakes", desc: "Glazed with organic honey.", img: "https://images.unsplash.com/photo-1519340333755-5672c7ec9cb2?w=400" }
];


// 2. PERSISTENCE & STATE
let cart = JSON.parse(localStorage.getItem('whiskCartINR')) || {};

window.onload = () => {
    // Skeleton Loading Effect
    const grid = document.getElementById("productGrid");
    grid.innerHTML = Array(4).fill('<div class="product-card skeleton"><div class="skeleton-img"></div><div class="skeleton-text"></div></div>').join('');
    
    setTimeout(() => {
        renderProducts(products);
        updateCartUI();
    }, 1000);
};

// 3. RENDERING
function renderProducts(items) {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = items.map(p => `
        <div class="product-card">
            <img src="${p.img}" loading="lazy">
            <h3>${p.name}</h3>
            <p class="price">₹${p.price}</p>
            <button class="add-to-cart" onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
    `).join('');
}

// 4. CART LOGIC (Grouped by Quantity)
function addToCart(id) {
    const p = products.find(item => item.id === id);
    if (cart[id]) {
        cart[id].qty++;
    } else {
        cart[id] = { ...p, qty: 1 };
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
    localStorage.setItem('whiskCartINR', JSON.stringify(cart));
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
            <div class="cart-item-row" style="display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid #eee;">
                <div><strong>${item.name}</strong><br>₹${item.price}</div>
                <div class="qty-controls">
                    <button onclick="changeQty(${item.id}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button onclick="changeQty(${item.id}, 1)">+</button>
                </div>
            </div>`;
    }).join('') : '<p>Your basket is empty.</p>';

    document.getElementById("cartTotal").innerText = `₹${total}`;
    document.getElementById("cartCount").innerText = count;
}

// 5. SEARCH & FILTER
document.getElementById("searchInput").addEventListener("input", e => {
    const term = e.target.value.toLowerCase();
    renderProducts(products.filter(p => p.name.toLowerCase().includes(term)));
});

function toggleCart() { document.getElementById("cartDrawer").classList.toggle("open"); }

// 6. CHECKOUT
function openCheckout() {
    const items = Object.values(cart);
    if (!items.length) return alert("Cart is empty!");
    const sub = items.reduce((s, i) => s + (i.price * i.qty), 0);
    document.getElementById("summaryItems").innerHTML = items.map(i => `<div>${i.name} x ${i.qty} = ₹${i.price*i.qty}</div>`).join('');
    document.getElementById("grandTotalVal").innerText = `₹${sub + 50}`; // ₹50 delivery
    document.getElementById("checkoutOverlay").classList.add("active");
}

function finalizeOrder() {
    alert("Order Received! We will deliver shortly.");
    cart = {}; saveAndRefresh();
    document.getElementById("checkoutOverlay").classList.remove("active");
}

function closeCheckout() { document.getElementById("checkoutOverlay").classList.remove("active"); }
