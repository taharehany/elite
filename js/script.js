$(document).ready(function () {
    "use strict";

    //variables
    let dropdowntoggle = $("header .hamburger-menu");
    let sideWidget = $(".side-widget");

    //toggle between menue and x in navbar
    dropdowntoggle.on("click", function () {
        sideWidget.toggleClass("active");

        if (sideWidget.hasClass("active")) {
            $(this).addClass("open");
        } else {
            $(this).removeClass("open");
        }
    });

    $("section").on("click", function () {
        if (sideWidget.hasClass("active")) {
            sideWidget.removeClass("active");
            dropdowntoggle.removeClass("open");
        }
    });

    //toggle between menue and x in navbar
    $("header .navbar-toggler").on("click", function () {
        if ($(this).hasClass("collapsed")) {
            $(this).removeClass('close')
        } else {
            $(this).addClass('close')
        }
    })

    //alert warning
    $('.alert.alert-warning button.close').on('click', function () {
        $('.alert.alert-warning').fadeOut();
    });
    //alert warning

    //loading
    $('.loading').delay(500).fadeOut(500);

    //main slider swiper
    var swiper = new Swiper(".main_swiper", {
        speed: 1000,
        loop: true,
        parallax: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    //single page swiper
    var swiper = new Swiper(".single_page_swiper", {
        speed: 1000,
        loop: true,
        parallax: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    //wow
    new WOW().init();
});