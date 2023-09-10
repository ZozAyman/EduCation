// change background nav bar on scroll

window.addEventListener("scroll", () => {
    document.querySelector("header").classList.toggle("window-scroll", window.scrollY > 0)
})


// show & hide faqs answer
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open");

        // change icon from plus to minus
        const icons = faq.querySelector(".faqs-icon i");
        if(icons.className === "fa fa-plus") {
            icons.className = "fa fa-minus";
        } else {
            icons.className = "fa fa-plus"
        }
    });
});


// Swiper beetween testimonials
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
        }

    }
  });

//   show navbar
const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
});

// hide navbar
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener("click", closeNav);