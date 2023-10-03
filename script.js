const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll('section');

links.forEach((link) => {
    link.addEventListener("click", () => {
        const nav = document.querySelector("#nav-toggle");
        if (nav.checked) nav.checked = false;
    });
});


window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            links.forEach(link => {
                link.classList.remove('active');
            });

            // Use document.querySelector to select the link by href attribute
            let linkToActivate = document.querySelector('nav a[href="#' + id + '"]');
            if (linkToActivate) linkToActivate.classList.add('active');
        }
    });
};
