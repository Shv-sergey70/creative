$(document).ready(function(){
    new WOW().init();
    //Bootstrap scrollspy
    $('body').scrollspy({
        target: '#navigation'
    });
    //Scroll animation
    $('.js-scrollspy-item').on('click', function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).position().top
        }, 1000);
    });
    //Show top-menu
    var $navigation = $('#navigation');
    function showWhiteNavbar($nav) {
        $nav.addClass('navbar-light');
        $nav.addClass('bg-white');
        $nav.removeClass('navbar-dark');
        $nav.removeClass('bg-transparent');
    }
    function showTransparentNavbar($nav) {
        $nav.removeClass('navbar-light');
        $nav.removeClass('bg-white');
        $nav.addClass('navbar-dark');
        $nav.addClass('bg-transparent');
    }
    function checkNavbar($nav) {
        if (window.screen.width >= 992) {
            if (window.scrollY >= 100) {
                showWhiteNavbar($nav);
            } else {
                showTransparentNavbar($nav);
            }
        } else {
            showWhiteNavbar($nav);
        }
    }
    $(window).on('scroll', function() {
        checkNavbar($navigation);
    });
    $(window).on('resize', function() {
        checkNavbar($navigation);
    });
});