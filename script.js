// Check if the current page is not the index page
if (document.title !== "Home") { // Replace "Home" with the actual title of your index page
    document.addEventListener('DOMContentLoaded', function() {
        // Get the document title
        var pageTitle = document.title;

        // Set the banner title
        var bannerTitleElement = document.getElementById('page-title');
        if (bannerTitleElement) {
            bannerTitleElement.innerText = pageTitle; // Update the banner title
        }
    });
}



    let currentSlide = 0; // Start with the first slide
    const slides = document.querySelectorAll('.testimonial'); // Get all testimonials
    const totalSlides = slides.length; // Total number of testimonials

    function changeSlide(direction) {
        currentSlide += direction;

        // Loop back to the start or end
        if (currentSlide < 0) {
            currentSlide = totalSlides - 1;
        } else if (currentSlide >= totalSlides) {
            currentSlide = 0;
        }

        // Update the transform property to slide
        slides.forEach((slide) => {
            slide.style.transform = `translateX(-${currentSlide * 100}%)`;
        });
    }

    // Function to auto-slide
    function autoSlide() {
        changeSlide(1); // Move to the next slide
    }

    // Set interval for automatic sliding (e.g., every 5 seconds)
    setInterval(autoSlide, 5000); // Change slide every 5 seconds


