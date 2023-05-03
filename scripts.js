const header = document.querySelector("header"); // Get the header element
const sectionOne = document.querySelector(".home-intro"); // Get the first section element

const faders = document.querySelectorAll(".fade-in"); // Get all elements with class="fade-in"
const sliders = document.querySelectorAll(".slide-in"); // Get all elements with class="slide-in"

const sectionOneOptions = { // Set the options for the IntersectionObserver
  rootMargin: "-200px 0px 0px 0px" // Set the rootMargin to -200px so that the header will appear when the top of the section is 200px below the top of the viewport
};

const sectionOneObserver = new IntersectionObserver(function ( // Create a new IntersectionObserver
    entries, // The entries parameter is an array of all the elements being observed
    sectionOneObserver // The callback function will be called whenever the target element intersects with the root element
  ) {
    entries.forEach(entry => { // Loop through all the entries
      if (!entry.isIntersecting) { // If the target element is not intersecting with the root element
        header.classList.add("nav-scrolled"); // Add the class "nav-scrolled" to the header element
      } else { // If the target element is intersecting with the root element
        header.classList.remove("nav-scrolled"); // Remove the class "nav-scrolled" from the header element
      }
    });
  },
  sectionOneOptions); // Pass the options object to the IntersectionObserver

sectionOneObserver.observe(sectionOne); // Observe the first section element

const appearOptions = { // Set the options for the IntersectionObserver
  threshold: 0, // The threshold is the percentage of the target element that must be visible before the callback function is called
  rootMargin: "0px 0px -250px 0px" // The rootMargin is the margin around the root element
};

const appearOnScroll = new IntersectionObserver(function ( // Create a new IntersectionObserver
    entries,
    appearOnScroll // The callback function will be called whenever the target element intersects with the root element
  ) {
    entries.forEach(entry => { // Loop through all the entries
      if (!entry.isIntersecting) { // If the target element is not intersecting with the root element
        return; // Exit the function
      } else { // If the target element is intersecting with the root element
        entry.target.classList.add("appear"); // Add the class "appear" to the target element
        appearOnScroll.unobserve(entry.target); // Stop observing the target element
      }
    });
  },
  appearOptions); // Pass the options object to the IntersectionObserver

faders.forEach(fader => { // Loop through all elements with class="fade-in"
  appearOnScroll.observe(fader); // Observe each element
});

sliders.forEach(slider => { // Loop through all elements with class="slide-in"
  appearOnScroll.observe(slider); // Observe each element
});

//---------------------------------------------------------------
// var myCarousel = document.querySelector('#carouselExampleIndicators')
// var carousel = new bootstrap.Carousel(myCarousel, {
//   interval: 2000,
//   wrap: false
// })