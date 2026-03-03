
document.addEventListener("DOMContentLoaded", function() {
    // Select all navigation links that point to an anchor (start with '#')
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            // Prevent the default sudden jump
            e.preventDefault();

            // Get the target section's ID from the href attribute
            const targetId = this.getAttribute("href");
            
            // Skip if the href is just "#"
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);

            // If the element exists, scroll to it smoothly
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start" // Aligns the element to the top of the viewport
                });
            }
        });
    });
});
