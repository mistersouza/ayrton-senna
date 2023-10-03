const links = document.querySelectorAll("nav a");

links.forEach((link) => {
    link.addEventListener("click", () => {
        const navToggle = document.getElementById("nav-toggle");
        if (navToggle.checked) {
            navToggle.checked = false;
        }
    });
});