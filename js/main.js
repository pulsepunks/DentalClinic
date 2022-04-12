// ----------Slicker----------
$(function () {
    $('.promotions__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        prevArrow:
            '<button type="button" class="promotions-arrow__btn-left promotions-arrow__btn"><img class="promotions__arrow promotions__arrow-left" src="/img/promotion/arrow-left.svg" alt="Arrow left"></button>',
        nextArrow:
            '<button type="button" class="promotions-arrow__btn-right promotions-arrow__btn"><img class="promotions__arrow promotions__arrow-right" src="/img/promotion/arrow-right.svg" alt="Arrow right"></button>',
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                },
            },
        ],
    });
    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        prevArrow:
            '<button type="button" class="reviews-arrow__btn-left reviews-arrow__btn"><img class="reviews__arrow reviews__arrow-left" src="/img/reviews/arrow-left.svg" alt="Arrow left"></button>',
        nextArrow:
            '<button type="button" class="reviews-arrow__btn-right reviews-arrow__btn"><img class="reviews__arrow reviews__arrow-right" src="/img/reviews/arrow-right.svg" alt="Arrow right"></button>',
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
    $('.technology__popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false,
    });
    $('.technology__popup-label').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false,
    });
    $('.awards__slider-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true,
        },
    });
    $('.awards__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        prevArrow:
            '<button type="button" class="awards-arrow__btn-left awards-arrow__btn"><img class="awards__arrow awards__arrow-left" src="/img/awards/arrow-left.svg" alt="Arrow left"></button>',
        nextArrow:
            '<button type="button" class="awards-arrow__btn-right awards-arrow__btn"><img class="awards__arrow awards__arrow-right" src="/img/awards/arrow-right.svg" alt="Arrow right"></button>',
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 424,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
    $('.about__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        prevArrow:
            '<button type="button" class="about-arrow__btn-left about-arrow__btn"><img class="about__arrow about__arrow-left" src="/img/about/arrow-left.svg" alt="Arrow left"></button>',
        nextArrow:
            '<button type="button" class="about-arrow__btn-right about-arrow__btn"><img class="about__arrow about__arrow-right" src="/img/about/arrow-right.svg" alt="Arrow right"></button>',
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 424,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
    $('.about__slider-popup').magnificPopup({
        type: 'image',
        closeBtnInside: false,
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true,
        },
    });

    $('.doctors-right__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.doctors-left__slider',
        infinite: true,
        fade: true,
        prevArrow:
            '<button type="button" class="doctors-arrow__btn-left doctors-arrow__btn"><img class="doctors__arrow doctors__arrow-left" src="/img/doctors/arrow-left.svg" alt="Arrow left"></button>',
        nextArrow:
            '<button type="button" class="doctors-arrow__btn-right doctors-arrow__btn"><img class="doctors__arrow doctors__arrow-right" src="/img/doctors/arrow-right.svg" alt="Arrow right"></button>',
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    arrows: false,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: true,
                },
            },
        ],
    });
    $('.doctors-left__slider').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        asNavFor: '.doctors-right__slider',
        vertical: true,
        focusOnSelect: true,
        infinite: false,
        swipe: true,
        verticalSwiping: true,
    });

    $('.burger').on('click', function () {
        $('.burger__line').toggleClass('active');
        $('.header__menu').toggleClass('active');
        $('.footer__menu').toggleClass('active');
    });

    $('.promotions__slider-link').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: false,
    });
    $('.promotions__subtitle-link').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: false,
    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
    $('.services__btn-popup').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: false,
    });

    var contactsMargin =
        parseInt($('.container-reference').css('margin-left')) + 20;
    $('.container-contacts').css('left', contactsMargin + 'px');
});
