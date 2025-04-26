// Function to open the default email client and start composing an email to the specified address
function sendEmail() {
    window.location.href="mailto: yng11@e.ntu.edu.sg";
}

// Waits for the document to load before applying a fade-in effect to skill icons
document.addEventListener("DOMContentLoaded", function () {
    // Select all skill icons inside the "skillsets-icons" container
    const skillIcons = document.querySelectorAll(".skillsets-icons img");
    // Create an Intersection Observer for skill icons    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Add 'visible' class when in view
                observer.unobserve(entry.target); // Stops observing once visible
                }
            });
        }, { threshold: 0.2 }); // Triggers when 20% of the icons are in view

    // Observe each skill icon
    skillIcons.forEach(icon => observer.observe(icon));
});
