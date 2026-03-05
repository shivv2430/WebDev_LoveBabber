const quote = document.getElementById("quote");
const author = document.getElementById("author");

const api_url = "https://dummyjson.com/quotes/random";

async function getQuote() {
    quote.innerText = "Loading...";
    author.style.display = "Loading...";

    try {
        const response = await fetch(api_url);
        const data = await response.json();

        quote.innerText = data.quote;
        author.innerText = data.author;
        author.style.display = "block";
    } catch (error) {
        quote.innerText = "Unable to load quote 😢";
        console.error(error);
    }
}

// load on page start
getQuote();