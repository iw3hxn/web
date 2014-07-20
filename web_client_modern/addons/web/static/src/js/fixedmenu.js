/* Dynamic top menu positioning
 *
 */

var num = 30; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.menu').addClass('fixedmenu');
        $('oe_secondary_menu active').addClass('fixedsecondary');
    } else {
        $('.menu').removeClass('fixedmenu');
        $('oe_secondary_menu active').removeClass('fixedsecondary');
    }
});

//USE SCROLL WHEEL FOR THIS FIDDLE DEMO