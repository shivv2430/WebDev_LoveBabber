    // Cart functionality
    let cart = [];
    let cartCount = 0;

    function updateCartCount() {
        document.getElementById('cartCount').textContent = cartCount;
    }

    function addToCart(productName, price) {
        cart.push({ name: productName, price: parseFloat(price.replace(/,/g, '')) });
        cartCount++;
        updateCartCount();
        updateCartDisplay();
    }

    function updateCartDisplay() {
        const cartItemsList = document.getElementById('cartItemsList');
        cartItemsList.innerHTML = '';
        let subtotal = 0;
        cart.forEach(item => {
            subtotal += item.price;
            const itemDiv = document.createElement('div');
            itemDiv.textContent = `${item.name} - ₹${item.price.toLocaleString()}`;
            cartItemsList.appendChild(itemDiv);
        });
        const tax = subtotal * 0.05;
        const total = subtotal + tax;
        document.getElementById('subtotal').textContent = subtotal.toLocaleString();
        document.getElementById('tax').textContent = tax.toLocaleString();
        document.getElementById('total').textContent = total.toLocaleString();
    }

    // Navigation
    function showPage(pageId) {
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        document.querySelector(`[link="${pageId}"]`).classList.add('active');
    }

    // Event listeners
    document.addEventListener('DOMContentLoaded', () => {
        // Navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const pageId = link.getAttribute('link');
                showPage(pageId);
            });
        });

        // Add to cart buttons
        document.querySelectorAll('.cart-btn').forEach((btn, index) => {
            const productCard = btn.closest('.product-card');
            const name = productCard.querySelector('h3').textContent;
            const price = productCard.querySelector('.price').textContent.replace('₹', '');
            btn.addEventListener('click', () => addToCart(name, price));
        });

        // Buy now buttons
        document.querySelectorAll('.buy').forEach(btn => {
            btn.addEventListener('click', () => {
                const productCard = btn.closest('.product-card');
                const name = productCard.querySelector('h3').textContent;
                const price = productCard.querySelector('.price').textContent.replace('₹', '');
                document.getElementById('carName').textContent = name;
                document.getElementById('carPrice').textContent = price.replace(/,/g, '');
                document.getElementById('buyModal').style.display = 'block';
            });
        });

        // Modal close
        document.querySelector('.close').addEventListener('click', () => {
            document.getElementById('buyModal').style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target == document.getElementById('buyModal')) {
                document.getElementById('buyModal').style.display = 'none';
            }
        });
    });

    // Dummy payment processing
    function processPayment(event) {
        event.preventDefault();
        alert('Payment processed successfully!');
        // Reset cart or redirect
        cart = [];
        cartCount = 0;
        updateCartCount();
        updateCartDisplay();
        document.getElementById('buyModal').style.display = 'none';
        showPage('home');
    }