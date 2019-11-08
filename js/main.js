$(function () {

    var header = $('.header');
    var slider = $('.slider');

    header.height($(window).height());

    $(window).resize(function () {
        header.height($(window).height());

        slider.each(function () {
            $(this).css('paddingTop', ($(window).height() - $('.slider li').height()) / 2)
        })

    });

    // Links add active Class 

    $('.links li a').on("click", function () {
        $(this).parent().addClass('active').siblings().removeClass('active')
    });


    // Adjust bxslider list items center 
    slider.each(function () {
        $(this).css('paddingTop', ($(window).height() - $('.slider li').height()) / 2.105)
    })


    // Slider 
    slider.bxSlider(function () {
        pager: false
    });

    // smooth scroll div
    $('.links li a').on("click", function () {
        $('html, body').animate({

            scrollTop: $('#' + $(this).data('value')).offset().top

        }, 1000)
    });

    // Out Own Auto slider 
    $(function autoSilder() {

        $('.slid .actv').each(function () {
            if (!$(this).is(':last-child')) {

                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('actv').next().addClass('actv').fadeIn();
                    autoSilder();
                });
            } else {

                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('actv');
                    $('.slid div').eq(0).addClass('actv').fadeIn();
                    autoSilder();
                });
            }
        })

    }());

    // Trigger MixItUp
    var mixer = mixitup('#container');

    // Adjust shufle links 
    $('.shufle li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
    });

    // Trigger Nicescroll 
    $("html").niceScroll({
        cursorcolor: "#01BAEF", 
        cursorwidth: "10px",
        background: "rgba(20,20,20,0.3)",
        cursorborder: "1px solid aquamarine",
        cursorborderradius: 5
    });
});