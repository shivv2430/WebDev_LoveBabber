const restaurants = [
    {
        name: "Burger King",
        cuisine: "Fast Food",
        rating: "4.2",
        price: "₹350 for one",
        image: "images/BurgerKing.jpg"
    },
    {
        name: "Pizza Hut",
        cuisine: "Italian, Pizzas, Fast Food",
        rating: "4.0",
        price: "₹400 for one",
        image: "images/pizzaHut.jpg"
    },
    {
        name: "Biryani House",
        cuisine: "North Indian, Mughlai, Biryani",
        rating: "4.5",
        price: "₹250 for one",
        image: "images/Briyani House.jpg"
    },
    {
        name: "Starbucks",
        cuisine: "Cafe, Desserts, Beverages",
        rating: "4.3",
        price: "₹400 for one",
        image: "images/Starbucks.jpg"
    }
];

const container = document.getElementById("restaurantList");

function displayRestaurants(data) {
    container.innerHTML = "";
    if (data.length === 0) {
        container.innerHTML = "<p style='color: #696969; font-size: 16px;'>No restaurants found matching your search.</p>";
        return;
    }
    
    data.forEach(r => {
        const card = `
            <div class="card">
                <div class="card-img-wrap">
                    <img src="${r.image}" alt="${r.name}">
                </div>
                <div class="card-content">
                    <div class="card-header">
                        <h3>${r.name}</h3>
                        <span class="rating">${r.rating} <i class="fa-solid fa-star" style="font-size: 10px;"></i></span>
                    </div>
                    <div class="card-body">
                        <span class="cuisine">${r.cuisine}</span>
                        <span>${r.price || ''}</span>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Search functionality
document.getElementById("search").addEventListener("input", function () {
    const value = this.value.toLowerCase();
    const filtered = restaurants.filter(r => 
        r.name.toLowerCase().includes(value) || 
        r.cuisine.toLowerCase().includes(value)
    );
    displayRestaurants(filtered);
});

// Initial load
displayRestaurants(restaurants);
