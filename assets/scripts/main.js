// Select all navigation links and sections on the page
const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll('section');

// Add click event listeners to navigation links
links.forEach((link) => {
    link.addEventListener("click", () => {
        // Check if the navigation menu is open
        const nav = document.querySelector("#nav-toggle");
        if (nav.checked) {
            // If open, close the navigation menu
            nav.checked = false;
        }
    });
});

// Add a scroll event listener to handle the active navigation link
window.onscroll = () => {
    // Iterate through each section on the page
    sections.forEach(section => {
        // Get the current vertical scroll position
        let top = window.scrollY;
        // Get the offset of the section from the top of the page
        let offset = section.offsetTop;
        // Get the height of the section
        let height = section.offsetHeight;
        // Get the id attribute of the section
        let id = section.getAttribute('id');

        // Check if the section is currently in the viewport
        if (top >= offset && top < offset + height) {
            // Remove the "active" class from all navigation links
            links.forEach(link => {
                link.classList.remove('active');
            });

            // Select the navigation link corresponding to the current section
            // using the link's href attribute
            let linkToActivate = document.querySelector('nav a[href="#' + id + '"]');
            if (linkToActivate) {
                // Add the "active" class to the selected navigation link
                linkToActivate.classList.add('active');
            }
        }
    });
};
