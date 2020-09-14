/*!
 * Start Bootstrap - Creative v6.0.3 (https://startbootstrap.com/themes/creative)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
 */
(function ($) {
    "use strict"; // Start of use strict

    // Untuk memberitahu dimana letak kita sekarang. Efek ini akan muncul pada navbar
    $('body').scrollspy({
        target: '#mainNav',
        offset: 100
    });

    // untuk efek parallax pada katalog saat di scroll
    $(window).scroll(function () {
        var wScroll = $(this).scrollTop();

        // portfolio
        if (wScroll > $('.produk').offset().top - 400) {
            $('.produk .card').each(function (i) {
                setTimeout(function () {
                    $('.produk .card').eq(i).addClass('muncul');
                }, 300 * (i + 1));
            });
        }

        // tentang kami
        if (wScroll > $('.tentangkami').offset().top - 450) {
            $('.tentangkami .gkiri, .paragkanan').each(function (i) {
                setTimeout(function () {
                    $('.tentangkami .gkiri, .paragkanan').eq(i).addClass('pmuncul');
                }, 100);
            });
        }

        if (wScroll > $('.keuntungan').offset().top - 400) {
            $('.keuntungan .txt, .info').each(function (i) {
                setTimeout(function () {
                    $('.keuntungan .txt, .info').eq(i).addClass('muncul');
                }, 300 * (i + 1));
            });
        }
    });



})(jQuery); // End of use strict