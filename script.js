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



    
   // Get the current page's file name (e.g., "contact.html")
const currentPage = window.location.pathname.split("/").pop();

// Get all the navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Loop through the links to find the matching page
navLinks.forEach(link => {
    if(link.getAttribute('href') === currentPage) {
        link.classList.add('active'); // Add 'active' class to the matching link
    }
});

navLinks.forEach(link => {
    if(link.getAttribute('href') === currentPage) {
        link.classList.add('active'); // Add 'active' class
        console.log(link); // Log the link to check if it's working
    }
});





// Get the toggle button and mobile navigation
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const mobileNav = document.querySelector('.mobile-nav');

// Function to handle mobile nav toggle
mobileNavToggle.addEventListener('click', () => {
    if (mobileNav.classList.contains('active')) {
        // Remove the active class to trigger slide out
        mobileNav.classList.remove('active');

        // Listen for the animation end event to hide the nav
        mobileNav.addEventListener('transitionend', () => {
            mobileNav.style.display = 'none'; // Hide it after animation ends
        }, { once: true }); // Ensure it only runs once
    } else {
        mobileNav.style.display = 'block'; // Show the nav before adding the active class
        // Allow the display to take effect before transitioning
        setTimeout(() => {
            mobileNav.classList.add('active'); // Add active class to trigger slide in
        }, 10); // Short delay to allow the display block to take effect
    }
});


