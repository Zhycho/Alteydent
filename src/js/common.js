$(document).ready(function() {

    // Меню услуг
    $('.service-list__item').mouseover( function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        
        $(this).closest('.service').find('.service-sublist').removeClass('active');
        $(this).closest('.service').find('.service-sublist').eq($(this).index()).addClass('active');
    });

    // Разворачивание карты в блоке контактов
    $('.js--contacts-info__item_map').click( function() {
        $(this).closest('.contacts-info').toggleClass('active');
    });

    // Кнопка наверх
    var btn = $('.js--to-top');  
    $(window).scroll(function() {     
        if ($(window).scrollTop() > 700) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
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