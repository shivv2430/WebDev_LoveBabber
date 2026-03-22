const restaurants = [
    {
        name: "Burger King",
        cuisine: "Fast Food",
        rating: "4.2",
        image: "images/BurgerKin.jpg"
    },
    {
        name: "Pizza Hut",
        cuisine: "Italian",
        rating: "4.0",
        image: "images/pizzaHut.jpg"
    },
    {
        name: "Biryani House",
        cuisine: "Indian",
        rating: "4.5",
        image: "images/Briyani House.jpg"
    },
    {
        name: "Starbucks",
        cuisine: "Cafe",
        rating: "4.3",
        image: "images/Starbucks.jpg"
    }
];

const container = document.getElementById("restaurantList");

function displayRestaurants(data){
    container.innerHTML = "";
    data.forEach(r => {
        const card = `
            <div class="card">
                <img src="${r.image}" alt="">
                <div class="card-content">
                    <h3>${r.name}</h3>
                    <p>${r.cuisine}</p>
                    <span class="rating">${r.rating} ★</span>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Search functionality

document.getElementById("search").addEventListener("input", function(){
    const value = this.value.toLowerCase();
    const filtered = restaurants.filter(r => r.name.toLowerCase().includes(value));
    displayRestaurants(filtered);
});

// Initial load

displayRestaurants(restaurants);

