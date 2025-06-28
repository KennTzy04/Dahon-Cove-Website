// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

// Spinner
var spinner = function () {
  setTimeout(function () {
    if ($("#spinner").length > 0) {
      $("#spinner").removeClass("show");
    }
  }, 1);
};
spinner(0);

// Initialize Owl Carousel for Hero Section
$(document).ready(function () {
  $(".header-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    smartSpeed: 1200, // Smooth slide speed
    navText: [
      '<span class="custom-nav"><i class="fas fa-chevron-left"></i></span>',
      '<span class="custom-nav"><i class="fas fa-chevron-right"></i></span>',
    ],
  });
});

// Bootstrap Dropdown Initialization
document.addEventListener("DOMContentLoaded", function () {
  // Initialize all dropdowns
  var dropdownElementList = [].slice.call(
    document.querySelectorAll(".dropdown-toggle")
  );
  var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new bootstrap.Dropdown(dropdownToggleEl);
  });

  // Add hover functionality for dropdowns (optional enhancement)
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("mouseenter", function () {
      const dropdownMenu = this.querySelector(".dropdown-menu");
      if (dropdownMenu) {
        dropdownMenu.classList.add("show");
      }
    });

    dropdown.addEventListener("mouseleave", function () {
      const dropdownMenu = this.querySelector(".dropdown-menu");
      if (dropdownMenu) {
        dropdownMenu.classList.remove("show");
      }
    });
  });
});

// JS Dropdown Toggle Function (Vanilla JS)
document.addEventListener("DOMContentLoaded", function () {
  const dropdownElementList = [].slice.call(
    document.querySelectorAll(".dropdown-toggle")
  );
  dropdownElementList.map(function (dropdownToggleEl) {
    return new bootstrap.Dropdown(dropdownToggleEl);
  });
});

// Dropdown Item Function - Handle all dropdown-item clicks
function handleDropdownItemClick() {
  const dropdownItems = document.querySelectorAll(".dropdown-item");

  dropdownItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      // Handles each dropdown item click
    });
  });
}

// Update active navigation highlighting
function updateActiveNavigation(sectionId) {
  // Remove active class from all nav links
  const allNavLinks = document.querySelectorAll(".navbar-nav .nav-link");
  allNavLinks.forEach((link) => link.classList.remove("active"));

  // Add active class to corresponding nav link
  const activeLink = document.querySelector(
    `.navbar-nav .nav-link[href="#${sectionId}"]`
  );
  if (activeLink) {
    activeLink.classList.add("active");
  }
}

// Add visual feedback for clicked dropdown items
function addClickFeedback(element) {
  // Add temporary highlight effect
  element.style.backgroundColor = "var(--primary-teal)";
  element.style.color = "white";

  setTimeout(() => {
    element.style.backgroundColor = "";
    element.style.color = "";
  }, 300);
}

// Initialize dropdown item functionality
document.addEventListener("DOMContentLoaded", function () {
  handleDropdownItemClick();
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle (for Bootstrap navbar)
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");

if (navbarToggler && navbarCollapse) {
  navbarToggler.addEventListener("click", function () {
    // Bootstrap handles the collapse automatically, but we can add custom behavior here
    console.log("Navbar toggler clicked");
  });
}

// Close mobile menu when clicking on a nav link
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    // Close mobile menu if it's open
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });
      bsCollapse.hide();
    }
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Active navigation link highlighting
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Gallery filter
const filterBtns = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const filter = this.getAttribute("data-filter");

    filterBtns.forEach((b) => b.classList.remove("active"));
    this.classList.add("active");

    galleryItems.forEach((item) => {
      if (filter === "all" || item.getAttribute("data-category") === filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Testimonials slider
let currentSlide = 0;
const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.getElementById("prev-testimonial");
const nextBtn = document.getElementById("next-testimonial");

function showSlide(n) {
  testimonials.forEach((testimonial) => testimonial.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  currentSlide = (n + testimonials.length) % testimonials.length;

  testimonials[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));
  nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => showSlide(index));
});

// Auto-advance testimonials
setInterval(() => showSlide(currentSlide + 1), 5000);

// Form submissions
document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Add form submission logic here
    alert("Thank you for your submission! We will get back to you soon.");
  });
});

// Social media button hover effects
document.querySelectorAll(".btn-square").forEach((btn) => {
  btn.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-3px) scale(1.1)";
    this.style.transition = "all 0.3s ease";
  });

  btn.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Get Started button click handler
document.querySelectorAll('.btn-primary[href="#"]').forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    // Scroll to booking section or show booking modal
    const bookingSection = document.querySelector("#booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.querySelector(".nav-link.dropdown-toggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  // Toggle dropdown on click
  dropdownToggle.addEventListener("click", function (e) {
    e.preventDefault();
    dropdownMenu.classList.toggle("show");
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", function (e) {
    if (
      !dropdownMenu.contains(e.target) &&
      !dropdownToggle.contains(e.target)
    ) {
      dropdownMenu.classList.remove("show");
    }
  });
});

// DATE
document.getElementById("year").textContent = new Date().getFullYear();

//----------------------------------- blog slider -----------------------------------//

  const carousel = document.querySelector(".blog-cards");
  const cards = document.querySelectorAll(".blog-card");
  const cardWidth = 350 + 30; // card width + margin
  let currentIndex = 0;
  let autoSlideInterval;

  // --- Setup Carousel Width for Infinite Loop ---
  const totalCards = cards.length;

  // Clone first & last cards for infinite effect
  const firstClone = cards[0].cloneNode(true);
  const lastClone = cards[totalCards - 1].cloneNode(true);
  carousel.appendChild(firstClone);
  carousel.insertBefore(lastClone, cards[0]);

  let scrollPosition = cardWidth;

  // Initial transform (shift to real first)
  carousel.style.transform = `translateX(-${scrollPosition}px)`;

  // --- Slide to Index ---
  function slideTo(index) {
    scrollPosition = (index + 1) * cardWidth;
    carousel.style.transition = "transform 0.5s ease-in-out";
    carousel.style.transform = `translateX(-${scrollPosition}px)`;
    currentIndex = index;
  }

  // --- Handle infinite loop when transition ends ---
  carousel.addEventListener("transitionend", () => {
    if (currentIndex >= totalCards) {
      carousel.style.transition = "none";
      currentIndex = 0;
      scrollPosition = cardWidth;
      carousel.style.transform = `translateX(-${scrollPosition}px)`;
    }
    if (currentIndex < 0) {
      carousel.style.transition = "none";
      currentIndex = totalCards - 1;
      scrollPosition = totalCards * cardWidth;
      carousel.style.transform = `translateX(-${scrollPosition}px)`;
    }
  });

  // --- Next Button ---
  document.getElementById("nextButton").addEventListener("click", () => {
    slideTo(currentIndex + 1);
    resetAutoplay();
  });

  // --- Prev Button (optional) ---
  const prevButton = document.getElementById("prevButton");
  if (prevButton) {
    prevButton.addEventListener("click", () => {
      slideTo(currentIndex - 1);
      resetAutoplay();
    });
  }

  carousel.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    carousel.style.cursor = "grabbing";
    clearInterval(autoSlideInterval);
  });

  window.addEventListener("mouseup", (e) => {
    if (!isDragging) return;
    isDragging = false;
    carousel.style.cursor = "grab";
    if (deltaX < -50) {
      slideTo(currentIndex + 1);
    } else if (deltaX > 50) {
      slideTo(currentIndex - 1);
    } else {
      slideTo(currentIndex);
    }
    deltaX = 0;
    startAutoplay();
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    deltaX = e.clientX - startX;
    carousel.style.transform = `translateX(-${scrollPosition - deltaX}px)`;
  });

  