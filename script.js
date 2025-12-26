const offers = [
    "🌟 15% OFF all rooms today!",
    "🍳 Free breakfast for early bookings!",
    "🌄 Stay 2 nights, get 1 night free!",
    "👪 Family special discount!"
];

document.getElementById("daily-offer").innerText = offers[Math.floor(Math.random() * offers.length)];

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
