$(document).ready(function() {

    // Меню услуг
    $('.service-list__item').mouseover( function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        
        $(this).closest('.service').find('.service-sublist').removeClass('active');
        $(this).closest('.service').find('.service-sublist').eq($(this).index()).addClass('active');
    });
    // Меню услуг для мобилки
    $('.service-mobile-list__item-arrow').click( function() {
        $(this).closest('.service-mobile-list__item').siblings().removeClass('active');
        $(this).closest('.service-mobile-list__item').toggleClass('active');
    });

    // Разворачивание карты в блоке контактов
    $('.js--contacts-info__item_map').click( function() {
        $(this).closest('.contacts-info').toggleClass('active');
    });

    // Табы с ценами
    $('.js--tab-list__link').click( function() {
        $(this).closest('.tab-list__item').toggleClass('active');
    });

    // Якоря
    $('a[href^=\\#]').click(function(){
        var el = $(this).attr('href');
        $('html, body').animate({scrollTop: $(el).offset().top - 180}, 1000);
        return false;
    });

    // Фильтра на странице статей
    $('.js--page-filter').click( function() {
        $(this).toggleClass('active');
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
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
        ]
    });

    // Слайдер Врачей на главной - мобилка
    $('.js--doctors-mobile-slider').slick({
        infinite: false,
        slidesToShow: 1,
        arrows: true,
        dots: false,
        slidesToScroll: 1,
        prevArrow: $('.js--doctors-mobile-slider-nav__prev'),
        nextArrow: $('.js--doctors-mobile-slider-nav__next'),
    });

    // Слайдер типовой враче
    $('.js--our-doctors-slider').slick({
        infinite: false,
        slidesToShow: 3,
        arrows: true,
        dots: false,
        slidesToScroll: 1,
        prevArrow: $('.js--our-doctors-slider__prev'),
        nextArrow: $('.js--our-doctors-slider__next'),
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
        ]
    });

    // Слайдер о клинике
    $('.js--about-clinic-slider').slick({
        infinite: false,
        slidesToShow: 1,
        arrows: true,
        dots: false,
        slidesToScroll: 1,
        prevArrow: $('.js--about-clinic-slider__prev'),
        nextArrow: $('.js--about-clinic-slider__next'),
    });

    // Слайдер наши специалисты, О нас - планшет
    $('.js--about-specialist-slider-tablet').slick({
        infinite: false,
        slidesToShow: 2,
        arrows: true,
        dots: false,
        slidesToScroll: 1,
        prevArrow: $('.js--about-specialist-slider-tablet__prev'),
        nextArrow: $('.js--about-specialist-slider-tablet__next'),
    });

    // Слайдер наши специалисты, О нас - мобилка
    $('.js--about-specialist-slider-mobile').slick({
        infinite: false,
        slidesToShow: 1,
        arrows: true,
        dots: false,
        slidesToScroll: 1,
        prevArrow: $('.js--about-specialist-slider-mobile__prev'),
        nextArrow: $('.js--about-specialist-slider-mobile__next'),
    });

    // Слайдер документов, О нас - планшет
    $('.js--document-slider').slick({
        infinite: false,
        slidesToShow: 3,
        arrows: true,
        dots: false,
        slidesToScroll: 1,
        prevArrow: $('.js--document-slider__prev'),
        nextArrow: $('.js--document-slider__next'),
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });

    // Вакансий, О нас - планшет
    $('.js--vacancy-slider').slick({
        infinite: false,
        slidesToShow: 2,
        arrows: true,
        dots: false,
        slidesToScroll: 1,
        prevArrow: $('.js--vacancy-slider__prev'),
        nextArrow: $('.js--vacancy-slider__next'),
        responsive: [
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });

    // Слайдер сертификатов, специалист - мобилка
    $('.js--specialist-certificates-slider').slick({
        infinite: false,
        slidesToShow: 2,
        arrows: true,
        dots: false,
        slidesToScroll: 1,
        prevArrow: $('.js--specialist-certificates-slider__prev'),
        nextArrow: $('.js--specialist-certificates-slider__next'),
        responsive: [
            {
                breakpoint: 421,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });

    // Слайдер сертификатов, специалист - мобилка
    $('.js--specialist-certificates-slider2').slick({
        infinite: false,
        slidesToShow: 2,
        arrows: true,
        dots: false,
        slidesToScroll: 1,
        prevArrow: $('.js--specialist-certificates-slider2__prev'),
        nextArrow: $('.js--specialist-certificates-slider2__next'),
        responsive: [
            {
                breakpoint: 421,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });

    // MMenu
    let $menu = $("#mobile-burger-menu").mmenu({
        "navbars": [
            {
                "position": "top",
                "content": [
                    `
                    <a class="mobile-menu__close js--mobile-menu__header-close" href="javascript:;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
                    </a>
                    <a class="mobile-menu__logo" href="index.html">
                        <img src="assets/img/logo-altey_small.png" alt="Логотип стоматологии Алтейдент в виде зуба, объятого лепестками">
                    </a>
                    `
                ]
            }
        ],
        "extensions": [
            "position-front",
            "position-top",
            "fullscreen",
            "border-full"
        ],
        "navbar": {
            title: "Меню"
        }
    });


    let $icon = $(".js--burger-button");
    let API = $menu.data("mmenu");
    $(document).on('click','.js--mobile-menu__header-close',function(){
        API.close();
    });

    $icon.on("click", function () {
        API.open();
    });


    API.bind("opened", function () {
        setTimeout(function () {
            $icon.addClass("is-active");
        }, 10);
        $icon.on("click", function () {
            API.close();
        });
    });

    API.bind("closed", function () {
        setTimeout(function () {
            $icon.removeClass("is-active");
        }, 10);
        $icon.on("click", function () {
            API.open();
        });
    });

    // Маска для ввода телефона в формах
    function number_format( number, decimals, dec_point, thousands_sep ) {	// Format a number with grouped thousands
	// 
	// +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
	// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	// +	 bugfix by: Michael White (http://crestidg.com)

	var i, j, kw, kd, km;

	// input sanitation & defaults
	if( isNaN(decimals = Math.abs(decimals)) ){
		decimals = 0;
	}
	if( dec_point == undefined ){
		dec_point = ",";
	}
	if( thousands_sep == undefined ){
		thousands_sep = " ";
	}

	i = parseInt(number = (+number || 0).toFixed(decimals)) + "";

	if( (j = i.length) > 3 ){
		j = j % 3;
	} else{
		j = 0;
	}

	km = (j ? i.substr(0, j) + thousands_sep : "");
	kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
	//kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).slice(2) : "");
	kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");


	return km + kw + kd;
}

    
    [].forEach.call( document.querySelectorAll('input[type="tel"]'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)
    
    });
});