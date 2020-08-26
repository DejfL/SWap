/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

    var $window = $(window),
        $body = $('body');
    $header = $('#header');
    $header2 = $('#header2');
    $banner = $("#banner");
    // Breakpoints.
    breakpoints({
        xlarge: ['1141px', '1680px'],
        large: ['981px', '1140px'],
        medium: ['737px', '980px'],
        small: ['481px', '736px'],
        xsmall: ['321px', '480px'],
        xxsmall: [null, '320px']
    });

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 200);
    });

    // Scrolly.
    $('.scrolly').scrolly();

    // Mobile?
    if (browser.mobile)
        $body.addClass('is-mobile');
    else {

        breakpoints.on('>medium', function() {
            $body.removeClass('is-mobile');
        });

        breakpoints.on('<=medium', function() {
            $body.addClass('is-mobile');
        });

    }

    // Scrolly.
    $('.scrolly')
        .scrolly({
            speed: 1500,
            offset: $header.outerHeight()
        });

    // Menu.
    $('#menu')
        .append('<a href="#menu" class="close"></a>')
        .appendTo($body)
        .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'right',
            target: $body,
            visibleClass: 'is-menu-visible'
        });

    // Header.
    if ($banner.length > 0 &&
        $header.hasClass('alt')) {

        $window.on('resize', function() { $window.trigger('scroll'); });

        $banner.scrollex({
            bottom: $header.outerHeight() + 1,
            terminate: function() { $header.removeClass('alt'); },
            enter: function() { $header.addClass('alt'); },
            leave: function() { $header.removeClass('alt'); }
        });

    }

})(jQuery);