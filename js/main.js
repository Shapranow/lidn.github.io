$(function () {


// ============== menu ========================================
    $(".header__burger").on("click", function (event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.services-nav__sort').on('click', function () {
        $('.products__inner-sort').slideToggle();
    });
// ============== bg ========================================
    function ibg() {
        $.each($('.ibg'), function (index, val) {
            if ($(this).find('img').length > 0) {
                $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
            }
        });
    }

    ibg();
 // ============== wish ========================================
    $(".product-page__wish-button").on("click", function (event) {
        $('.product-page__wish-button').toggleClass('active');
    });

// ============== slick ========================================
    $('.slider__inner').slick({
        dots: true,
        infinite: false,
        speed: 500,
        cssEase: 'linear',
        autoplaySpeed: 2000,
    });
    $('.slider-active').slick({
        slidesToShow: 1,
        dots: false,
        arrows: true,
        appendArrows: $('.services-nav__arrow'),
        fade: true,
        infinite: false,
        swipe:false,
        draggable:false,
        // cssEase: 'linear',
        touchMove:false,
        swipeToSlide:false,
        adaptiveHeight: true
    });
    
    $('.services-slider__for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.services-slider__nav',
        speed: 700,
        cssEase: 'linear',
        autoplaySpeed: 2000,
        autoplay: true,
        infinite: false,
    });

    $('.services-slider__nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.services-slider__for',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        speed: 700,
        cssEase: 'linear',
        autoplaySpeed: 2000,
        autoplay: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 1150,
                settings: 'unslick'
            }
        ]
    });
// ============== mixitup ========================================
    var mixer = mixitup('.products__inner, .product-page__inner');
    var mixer = mixitup(containerEl);
    var mixer = mixitup(containerEl, {
        selectors: {
            target: '.products__items'
        },
        animation: {
            duration: 900
        }
    });
});