const products = [
    // --- COOKIES (12 Items) ---
    { id: 1, name: "Classic Choco Chip", price: 120, category: "cookies", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400" },
    { id: 2, name: "Dark Fudge Cookie", price: 150, category: "cookies", img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400" },
    { id: 3, name: "Oatmeal & Raisin", price: 110, category: "cookies", img: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=400" },
    { id: 4, name: "Red Velvet Softie", price: 140, category: "cookies", img: "https://images.unsplash.com/photo-1559622314-f83c65644781?w=400" },
    { id: 5, name: "Matcha Bliss", price: 160, category: "cookies", img: "https://images.unsplash.com/photo-1618923850107-d1a234d7a73a?w=400" },
    { id: 6, name: "Lemon Glaze Shortbread", price: 90, category: "cookies", img: "https://images.unsplash.com/photo-1584000344911-a7ad0238c350?w=400" },
    { id: 7, name: "White Choco Macadamia", price: 180, category: "cookies", img: "https://images.unsplash.com/photo-1551446591-142875a901a1?w=400" },
    { id: 8, name: "Peanut Butter Swirl", price: 130, category: "cookies", img: "https://images.unsplash.com/photo-1584000344911-a7ad0238c350?w=400" },
    { id: 9, name: "Coconut Crunch", price: 100, category: "cookies", img: "https://images.unsplash.com/photo-1584000344911-a7ad0238c350?w=400" },
    { id: 10, name: "Salted Caramel Cookie", price: 145, category: "cookies", img: "https://images.unsplash.com/photo-1584000344911-a7ad0238c350?w=400" },
    { id: 11, name: "Double Espresso Cookie", price: 135, category: "cookies", img: "https://images.unsplash.com/photo-1584000344911-a7ad0238c350?w=400" },
    { id: 12, name: "Vanilla Sprinkle", price: 85, category: "cookies", img: "https://images.unsplash.com/photo-1584000344911-a7ad0238c350?w=400" },

    // --- PASTRIES & BREAD (14 Items) ---
    { id: 13, name: "Buttery Croissant", price: 95, category: "pastries", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400" },
    { id: 14, name: "Pain au Chocolat", price: 125, category: "pastries", img: "https://images.unsplash.com/photo-1621075160523-b936ad96132a?w=400" },
    { id: 15, name: "Almond Danish", price: 135, category: "pastries", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },
    { id: 16, name: "Sticky Cinnamon Roll", price: 115, category: "pastries", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400" },
    { id: 17, name: "Blueberry Scone", price: 90, category: "pastries", img: "https://images.unsplash.com/photo-1551446591-142875a901a1?w=400" },
    { id: 18, name: "Cheese Sourdough", price: 280, category: "pastries", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },
    { id: 19, name: "Strawberry Tart", price: 185, category: "pastries", img: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=400" },
    { id: 20, name: "Chocolate Eclair", price: 145, category: "pastries", img: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=400" },
    { id: 21, name: "Pistachio Danish", price: 160, category: "pastries", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },
    { id: 22, name: "Apple Turnover", price: 110, category: "pastries", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400" },
    { id: 23, name: "Honey Garlic Loaf", price: 210, category: "pastries", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },
    { id: 24, name: "Focaccia Herb Bread", price: 190, category: "pastries", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },
    { id: 25, name: "Custard Brioche", price: 140, category: "pastries", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },
    { id: 26, name: "Sourdough Baguette", price: 120, category: "pastries", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },

    // --- CAKES (19 Items) ---
    { id: 27, name: "Midnight Truffle Cake", price: 850, category: "cakes", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
    { id: 28, name: "NY Berry Cheesecake", price: 1200, category: "cakes", img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400" },
    { id: 29, name: "Vanilla Funfetti", price: 750, category: "cakes", img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400" },
    { id: 30, name: "Tiramisu Gateau", price: 1400, category: "cakes", img: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=400" },
    { id: 31, name: "Red Velvet Classico", price: 950, category: "cakes", img: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=400" },
    { id: 32, name: "Mango Summer Lush", price: 1100, category: "cakes", img: "https://images.unsplash.com/photo-1519340333755-5672c7ec9cb2?w=400" },
    { id: 33, name: "Lotus Biscoff Dream", price: 1600, category: "cakes", img: "https://images.unsplash.com/photo-1519340333755-5672c7ec9cb2?w=400" },
    { id: 34, name: "Hazelnut Praline", price: 1550, category: "cakes", img: "https://images.unsplash.com/photo-1519340333755-5672c7ec9cb2?w=400" },
    { id: 35, name: "Lemon Meringue Cake", price: 800, category: "cakes", img: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400" },
    { id: 36, name: "Black Forest Special", price: 900, category: "cakes", img: "https://images.unsplash.com/photo-1519340333755-5672c7ec9cb2?w=400" },
    { id: 37, name: "Coffee Walnut Slab", price: 850, category: "cakes", img: "https://images.unsplash.com/photo-1519340333755-5672c7ec9cb2?w=400" },
    { id: 38, name: "Blueberry Bliss", price: 1150, category: "cakes", img: "https://images.unsplash.com/photo-1519340333755-5672c7ec9cb2?w=400" },
    { id: 39, name: "Pistachio Rose Cake", price: 1700, category: "cakes", img: "https://images.unsplash.com/photo-1519340333755-5672c7ec9cb2?w=400" },
    { id: 40, name: "Victoria Strawberry", price: 700, category: "cakes", img: "https://images.unsplash.com/photo-1519340333755-5672c7ec9cb2?w=400" },
    { id: 41, name: "Dark Truffle Ganache", price: 1300, category: "cakes", img: "https://images.unsplash.com/photo-1519340333755-5672c7ec9cb2?w=400" },
    { id: 42, name: "Honey Almond Sponge", price: 780, category: "cakes", img: "https://images.unsplash.com/photo-1519340333755-5672c7ec9cb2?w=400" },
    { id: 43, name: "Pineapple Upside Down", price: 650, category: "cakes", img: "https://images.unsplash.com/photo-1519340333755-5672c7ec9cb2?w=400" },
    { id: 44, name: "Opera French Cake", price: 1800, category: "cakes", img: "https://images.unsplash.com/photo-1519340333755-5672c7ec9cb2?w=400" },
    { id: 45, name: "Caramel Drip Cake", price: 1100, category: "cakes", img: "https://images.unsplash.com/photo-1519340333755-5672c7ec9cb2?w=400" }
];

// --- CORE FUNCTIONALITY ---

let cart = JSON.parse(localStorage.getItem('whiskCart')) || {};

function renderProducts(items) {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = items.map(p => `
        <div class="product-card">
            <img src="${p.img}" alt="${p.name}" loading="lazy">
            <div class="card-info">
                <h3>${p.name}</h3>
                <p class="price-tag">₹${p.price}</p>
                <button class="add-to-cart" onclick="addToCart(${p.id})">Add to Basket</button>
            </div>
        </div>
    `).join('');
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (cart[id]) {
        cart[id].qty++;
    } else {
        cart[id] = { ...product, qty: 1 };
    }
    saveCart();
    updateUI();
}

function saveCart() {
    localStorage.setItem('whiskCart', JSON.stringify(cart));
}

function updateUI() {
    // Updates cart count in navbar
    const count = Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
    document.getElementById("cartCount").innerText = count;
}

// Initial Load with Skeleton
window.onload = () => {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = Array(8).fill('<div class="skeleton"></div>').join('');
    
    setTimeout(() => {
        renderProducts(products);
        updateUI();
    }, 1200);
};

// Search Logic
document.getElementById("searchInput")?.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(term));
    renderProducts(filtered);
});
