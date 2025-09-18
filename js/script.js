(function ($) {

  "use strict";

  // init Chocolat light box
  var initChocolat = function () {
    Chocolat(document.querySelectorAll('.image-link'), {
      imageSize: 'contain',
      loop: true,
    });
  };

  $(document).ready(function () {

    /* Demo purposes only */
    $(".hover").mouseleave(function () {
      $(this).removeClass("hover");
    });

    var swiper = new Swiper(".testimonial-swiper", {
      slidesPerView: 2,
      spaceBetween: 40,
      pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {
        390: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        450: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      }
    });

    // PERBAIKAN DI SINI
    // Inisialisasi Isotope saat dokumen siap
    var $container = $('.portfolio-list').isotope({
      itemSelector: '.item',
      layoutMode: 'masonry',
      percentPosition: true
    });

    // Tangani klik tombol filter
    $('.filter-button').on('click', function(event) {
      event.preventDefault();
      
      // Kelola kelas 'active' pada tombol
      $('.filter-button').removeClass('active');
      $(this).addClass('active');
      
      // Ambil nilai filter dari data-filter
      var filterValue = $(this).attr('data-filter');
      
      // Filter item menggunakan Isotope
      $container.isotope({ filter: filterValue });
    });

    // Animate on Scroll
    AOS.init({
      duration: 600,
      once: true,
    });

    initChocolat();
  });

})(jQuery);