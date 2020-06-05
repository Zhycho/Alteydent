$(document).ready(function() {

    // $(document).on('mouseover', 'service-list__item', function(){
    //     $(this).siblings().removeClass('active');
    // });

    $('.service-list__item').mouseover( function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        
        $(this).closest('.service').find('.service-sublist').removeClass('active');
        $(this).closest('.service').find('.service-sublist').eq($(this).index()).addClass('active');
    });

    // Слайдер Врачей на главной
    $('.js--about-doctors-slider').slick({
        infinite: false,
        slidesToShow: 4,
        arrows: true,
        dots: false,
        slidesToScroll: 1,
        prevArrow: $('.js--about-doctors-slider__prev'),
        nextArrow: $('.js--about-doctors-slider__next'),
    });
});