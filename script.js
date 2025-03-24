document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

const text = "Hi! Welcome to my portfolio.";
let index = 0;
function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
window.onload = function() {
    typeEffect();
    document.querySelectorAll(".progress div").forEach(bar => {
        bar.style.width = bar.classList.contains("html") ? "90%" :
                          bar.classList.contains("css") ? "80%" :
                          "70%";
    });
};

const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
