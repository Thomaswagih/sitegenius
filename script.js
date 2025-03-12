window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "#000";
    } else {
        navbar.style.background = "rgba(0,0,0,0.8)";
    }
});