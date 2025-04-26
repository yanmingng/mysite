// Waits for the document to fully load before executing the script
document.addEventListener("DOMContentLoaded", function () {
    // Selects the hero section
    const heroSection = document.querySelector("#hero");
    // Creates an Intersection Observer to detect when the hero section enters the viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heroSection.classList.add("show"); // 'show' class to trigger animation
                observer.unobserve(heroSection); // Stop observing after it's visible
                }
            });
}, { threshold: 0.3 }); // Trigger when 30% of the section is visible

observer.observe(heroSection);
});

// Waits for the document to load before applying the fade-in effect to project cards
document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the class "project-card"    
    const projectCards = document.querySelectorAll(".project-card");
    // Create an Intersection Observer for project cards    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Add 'visible' class when in view
                observer.unobserve(entry.target); // Stops observing once visible
                }
            });
        }, { threshold: 0.2 }); // Triggers when 20% of the card is in view

    // Observe each project card
    projectCards.forEach(card => observer.observe(card));
});


// Waits for the document to load before applying a fade-in effect to sections and sidebars
document.addEventListener("DOMContentLoaded", function () {
    // Select all sections inside an article and any aside elements    
    const sections = document.querySelectorAll("article section, aside");
    // Create an Intersection Observer for sections and sidebars
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in"); // Add 'fade-in' class when in view
                observer.unobserve(entry.target); // Stop observing after it becomes visible
            }
        });
    }, { threshold: 0.01 }); // Triggers when 1% of the element is in view

    // Observe each section and sidebar
    sections.forEach(section => observer.observe(section));
});

// Waits for the document to load before applying a fade-in effect to the about section
document.addEventListener("DOMContentLoaded", function () {
    // Select the about section container
    const aboutSection = document.querySelector(".about-container");
    // Create an Intersection Observer for the about section
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add("visible"); // Add 'visible' class when in view
                observer.unobserve(entry.target); // Stop observing after it becomes visible
            }
        });
    }, { threshold: 0.3 }); // Triggers when 30% of the section is in view
    // Observe the about section
    observer.observe(aboutSection);
});