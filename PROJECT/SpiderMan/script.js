// Scroll Progress Bar
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const percent = (scrollTop / height) * 100;

    document.getElementById("progress-bar").style.width = percent + "%";
});


// Accordion Logic
const items = document.querySelectorAll(".accordion-item");

items.forEach(item => {
    item.addEventListener("click", () => {

        // close all
        items.forEach(i => i.classList.remove("active"));

        // open clicked
        item.classList.add("active");

    });
});