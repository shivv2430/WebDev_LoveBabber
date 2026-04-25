const recipes = [
    {
        title: "Omelette",
        ingredients: ["egg", "salt"],
        image: "https://media.istockphoto.com/id/1345888800/photo/veggie-omelet.webp?a=1&b=1&s=612x612&w=0&k=20&c=x9VNh97EvqjWPUXxs-xFPpLaHXN60mKss9prhPuX6rY="
    },
    {
        title: "Pancakes",
        ingredients: ["milk", "egg", "flour"],
        image: "https://plus.unsplash.com/premium_photo-1672846027109-e2c91500afef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFuY2FrZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        title: "Salad",
        ingredients: ["tomato", "cucumber"],
        image: "https://images.unsplash.com/photo-1662192513841-c890cc6ff3f9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FsYWRzfGVufDB8fDB8fHww"
    },
    {
        title: "Milkshake",
        ingredients: ["milk", "banana"],
        image: "https://plus.unsplash.com/premium_photo-1695035006916-bb85c139c70c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWlsayUyMHNoYWtlfGVufDB8fDB8fHww"
    }
];

function searchRecipes() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const results = document.getElementById("results");

    results.innerHTML = "";

    if (!input) {
        results.innerHTML = `<p class="empty">Please enter ingredients</p>`;
        return;
    }

    const searchItems = input.split(",");

    const filtered = recipes.filter(recipe =>
        searchItems.some(item =>
            recipe.ingredients.includes(item.trim())
        )
    );

    if (filtered.length === 0) {
        results.innerHTML = `<p class="empty">No recipes found 😢</p>`;
        return;
    }

    filtered.forEach(recipe => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${recipe.image}">
            <h3>${recipe.title}</h3>
            <p>${recipe.ingredients.join(", ")}</p>
        `;

        results.appendChild(card);
    });
}