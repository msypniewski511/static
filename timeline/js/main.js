var timelineSwiper = new Swiper(".timeline .swiper-container", {
  direction: "vertical",
  loop: false,
  speed: 1600,
  pagination: {
    el: ".swiper-pagination",
    renderBullet: function(index, className) {
      let year = document
        .querySelectorAll(".swiper-slide")
        [index].getAttribute("data-year");
      console.log(year);
      return '<span class="' + className + '">' + year + "</span>";
    }
  },
  paginationClickable: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    768: {
      direction: "horizontal"
    }
  }
});
