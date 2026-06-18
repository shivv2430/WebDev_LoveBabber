// Data for Waste Items and Ideas
const wasteData = [
    {
        id: 'plastic-bottles',
        title: 'Plastic Bottles',
        icon: '🍾',
        desc: 'Bottles, caps, and containers',
        ideas: [
            { name: 'Self-watering Planter', desc: 'Cut the bottle in half, invert the top part into the bottom part with water, and use a string as a wick for soil.' },
            { name: 'Bird Feeder', desc: 'Poke holes, insert wooden spoons as perches, and fill with birdseed. Hang it outside.' },
            { name: 'Pencil Organizer', desc: 'Cut the bottom half of several bottles, paint them, and glue them together for a desk organizer.' }
        ]
    },
    {
        id: 'cardboard',
        title: 'Cardboard Boxes',
        icon: '📦',
        desc: 'Shipping boxes, shoe boxes',
        ideas: [
            { name: 'Drawer Dividers', desc: 'Cut strips of cardboard to the length and width of your drawers, slot them together to organize clothes or utensils.' },
            { name: 'Cat Scratching Pad', desc: 'Cut cardboard into identical strips and glue them tightly together side-by-side to make a durable scratcher.' },
            { name: 'Decorative Storage Bins', desc: 'Wrap an old shoe box in fabric, twine, or wrapping paper to create stylish storage.' }
        ]
    },
    {
        id: 'glass-jars',
        title: 'Glass Jars',
        icon: '🫙',
        desc: 'Jam, pasta sauce, or pickle jars',
        ideas: [
            { name: 'Terrarium', desc: 'Layer pebbles, charcoal, soil, and small plants inside a clean jar for a mini indoor garden.' },
            { name: 'Pantry Storage', desc: 'Clean thoroughly, remove labels, and use for storing grains, spices, or pasta.' },
            { name: 'Lanterns', desc: 'Place a tealight or fairy lights inside. Decorate the outside with frosted glass spray or twine.' }
        ]
    },
    {
        id: 'old-clothes',
        title: 'Old Clothes',
        icon: '👕',
        desc: 'Worn out t-shirts, jeans, etc.',
        ideas: [
            { name: 'T-Shirt Tote Bag', desc: 'Cut the sleeves and neck off an old t-shirt, cut fringes at the bottom and tie them together to make a no-sew bag.' },
            { name: 'Cleaning Rags', desc: 'Cut unwearable cotton clothes into squares to use as reusable dusting and cleaning cloths.' },
            { name: 'Braided Rug', desc: 'Cut old clothes into long strips, braid them together, and coil them into a colorful rug.' }
        ]
    },
    {
        id: 'tin-cans',
        title: 'Tin Cans',
        icon: '🥫',
        desc: 'Soup, beans, or coffee cans',
        ideas: [
            { name: 'Herb Garden Planters', desc: 'Poke drainage holes in the bottom, paint the outside, and plant your favorite herbs.' },
            { name: 'Wind Chimes', desc: 'Paint cans of different sizes and hang them together using string and washers so they clink in the wind.' },
            { name: 'Desk Caddy', desc: 'Wrap cans in decorative paper or cork and use them to hold pens, scissors, and rulers.' }
        ]
    },
    {
        id: 'cd-dvd',
        title: 'Old CDs/DVDs',
        icon: '💿',
        desc: 'Scratched or obsolete discs',
        ideas: [
            { name: 'Mosaic Coasters', desc: 'Cut CDs into small pieces and glue them onto a circular base for a shiny, mosaic effect.' },
            { name: 'Sun Catchers', desc: 'Paint mandalas on the shiny side and hang them in the window.' },
            { name: 'Bird Repellent', desc: 'Hang them in your garden; the reflective surface scares away birds from your crops.' }
        ]
    }
];

// DOM Elements
const materialsGrid = document.getElementById('materialsGrid');
const settingsBtn = document.getElementById('settingsBtn');
const settingsModal = document.getElementById('settingsModal');
const closeSettingsBtn = document.getElementById('closeSettingsBtn');
const themeToggle = document.getElementById('themeToggle');

const ideaModal = document.getElementById('ideaModal');
const closeIdeaBtn = document.getElementById('closeIdeaBtn');
const ideaModalTitle = document.getElementById('ideaModalTitle');
const ideaModalIcon = document.getElementById('ideaModalIcon');
const ideaList = document.getElementById('ideaList');

// Initialize App
function init() {
    renderGrid();
    initTheme();
    setupEventListeners();
}

// Render the grid of waste items
function renderGrid() {
    materialsGrid.innerHTML = '';
    wasteData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-icon">${item.icon}</div>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        `;
        card.addEventListener('click', () => openIdeaModal(item));
        materialsGrid.appendChild(card);
    });
}

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.checked = savedTheme === 'dark';
}

function toggleTheme(e) {
    const newTheme = e.target.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Modal Management
function openModal(modalElement) {
    modalElement.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal(modalElement) {
    modalElement.classList.remove('active');
    document.body.style.overflow = '';
}

function openIdeaModal(item) {
    ideaModalTitle.textContent = item.title;
    ideaModalIcon.textContent = item.icon;
    
    ideaList.innerHTML = '';
    item.ideas.forEach(idea => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h4>${idea.name}</h4>
            <p>${idea.desc}</p>
        `;
        ideaList.appendChild(li);
    });
    
    openModal(ideaModal);
}

// Event Listeners
function setupEventListeners() {
    // Settings Modal
    settingsBtn.addEventListener('click', () => openModal(settingsModal));
    closeSettingsBtn.addEventListener('click', () => closeModal(settingsModal));
    
    // Idea Modal
    closeIdeaBtn.addEventListener('click', () => closeModal(ideaModal));
    
    // Close modals on clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === settingsModal) closeModal(settingsModal);
        if (e.target === ideaModal) closeModal(ideaModal);
    });
    
    // Theme toggle
    themeToggle.addEventListener('change', toggleTheme);
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
