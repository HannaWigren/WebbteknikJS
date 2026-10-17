// Uppgift 1: Hello JavaScript!
function showMessage() {
    alert("Hello, JavaScript!");
}

// Uppgift 2: Randomizer (Dagens Pizza)
function showRandomPizza() {
    const pizzas = [
        { name: "Margherita", img: "margherita.avif" },
        { name: "Vesuvio", img: "vesuvio.avif" },
        { name: "Hawaii", img: "hawaii.avif" },
        { name: "Capricciosa", img: "capricciosa.avif" }
    ];
    
    const randomIndex = Math.floor(Math.random() * pizzas.length);
    const container = document.getElementById("random-pizza-container");
    
    if (container) {
        container.innerHTML = `
            <h2>Dagens tips!</h2>
            <p>Vi rekommenderar: <strong>${pizzas[randomIndex].name}</strong></p>
            <img src="${pizzas[randomIndex].img}" alt="${pizzas[randomIndex].name}" style="width:100%; border-radius:8px;">
        `;
    }
}

window.addEventListener("load", showRandomPizza);

// Uppgift 3.1: DOM Hover-effekt pa navigation
function highlightNav(element) {
    element.style.color = "#f1c40f";
}
function unhighlightNav(element) {
    element.style.color = "white";
}

// Uppgift 3.2: DOM Fokus-effekt i formular
function focusInput(element) {
    element.style.backgroundColor = "#e8f0fe";
    element.style.border = "2px solid #2c3e50";
}
function blurInput(element) {
    element.style.backgroundColor = "white";
    element.style.border = "1px solid #ccc";
}

// Uppgift 4: jQuery-funktioner
$(document).ready(function() { 
    // 4.1: fadeTo()
    $(".pizza-image").hover(
        function() {
            $(this).fadeTo("fast", 0.6);
        },
        function() {
            $(this).fadeTo("fast", 1.0);
        }
    );

    // 4.2: slideToggle()
    $(".menu-column h2").css({ "cursor": "pointer", "text-decoration": "underline" });
    
    $(".menu-column h2").click(function() {
        $(this).next("ul").slideToggle("fast");
    });
});
