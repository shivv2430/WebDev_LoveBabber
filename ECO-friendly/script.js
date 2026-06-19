// ============================
// DARK MODE
// ============================

const themeBtn = document.getElementById("themeBtn");

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    if (themeBtn) {
        themeBtn.innerHTML = "☀️";
    }
}

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem(
                "theme",
                "dark"
            );

            themeBtn.innerHTML = "☀️";

        } else {

            localStorage.setItem(
                "theme",
                "light"
            );

            themeBtn.innerHTML = "🌙";
        }
    });
}


// ============================
// ANIMATED COUNTERS
// ============================

const counters =
    document.querySelectorAll(".stat-card h2");

function animateCounter() {

    counters.forEach(counter => {

        const text =
            counter.innerText;

        let target =
            parseInt(text);

        if (isNaN(target)) return;

        let count = 0;

        const increment =
            Math.ceil(target / 100);

        const update = () => {

            count += increment;

            if (count >= target) {

                counter.innerText = text;
                return;
            }

            counter.innerText = count + "+";

            requestAnimationFrame(update);
        };

        update();
    });
}


// ============================
// INTERSECTION OBSERVER
// ============================

const statsSection =
    document.querySelector(".stats");

if (statsSection) {

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        animateCounter();

                        observer.unobserve(
                            statsSection
                        );
                    }
                });

            },

            {
                threshold: 0.4
            }
        );

    observer.observe(statsSection);
}


// ============================
// SCROLL REVEAL ANIMATION
// ============================

const revealElements =
    document.querySelectorAll(
        ".product-card,.step,.stat-card"
    );

const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";
                }

            });

        },

        {
            threshold: 0.2
        }

    );

revealElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform =
        "translateY(50px)";

    el.style.transition =
        "all .8s ease";

    revealObserver.observe(el);

});


// ============================
// HERO FLOAT EFFECT
// ============================

const hero =
    document.querySelector(".circle");

window.addEventListener(
    "mousemove",

    (e) => {

        if (!hero) return;

        const x =
            (e.clientX / window.innerWidth - 0.5)
            * 20;

        const y =
            (e.clientY / window.innerHeight - 0.5)
            * 20;

        hero.style.transform =
            `translate(${x}px,${y}px)`;
    }

);


// ============================
// PRODUCT DATABASE
// ============================

if (
    !localStorage.getItem("products")
) {

    const sampleProducts = [

        {
            id: 1,
            name: "Bottle Plant Pot",
            price: 199,
            material: "Plastic Bottle",
            image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600"
        },

        {
            id: 2,
            name: "CD Wall Clock",
            price: 299,
            material: "Old CD",
            image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=600"
        },

        {
            id: 3,
            name: "Desk Organizer",
            price: 149,
            material: "Cardboard",
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600"
        }

    ];

    localStorage.setItem(
        "products",
        JSON.stringify(sampleProducts)
    );

}


// ============================
// CART INITIALIZATION
// ============================

if (
    !localStorage.getItem("cart")
) {

    localStorage.setItem(
        "cart",
        JSON.stringify([])
    );

}


// ============================
// NAVBAR SHADOW ON SCROLL
// ============================

const navbar =
    document.querySelector(".navbar");

window.addEventListener(
    "scroll",

    () => {

        if (window.scrollY > 50) {

            navbar.style.boxShadow =
                "0 10px 30px rgba(0,0,0,.12)";

        }
        else {

            navbar.style.boxShadow =
                "0 5px 20px rgba(0,0,0,.05)";
        }

    }

);


// ============================
// LOADING ANIMATION
// ============================

window.addEventListener(
    "load",

    () => {

        document.body.style.opacity = "0";

        setTimeout(() => {

            document.body.style.transition =
                "opacity .8s ease";

            document.body.style.opacity = "1";

        }, 100);

    }

);


// ============================
// GREETING MESSAGE
// ============================

const hour =
    new Date().getHours();

let greeting = "";

if (hour < 12) {

    greeting = "🌞 Good Morning";

}
else if (hour < 18) {

    greeting = "🌤 Good Afternoon";

}
else {

    greeting = "🌙 Good Evening";

}

console.log(
    greeting +
    " Welcome to Waste2Wealth"
);