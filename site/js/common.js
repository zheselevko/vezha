$(document).ready(function() {
	
$(document).ready(function () {
    $('.reviews__list').bxSlider({
        nextSelector: '#slider-next',
        prevSelector: '#slider-prev',
        controls: true,
        pager: false,
        nextText: '<img src="img/arr_r.png" height="36" width="36"/>',
        prevText: '<img src="img/arr_l.png" height="36" width="36"/>'
    });
});
});
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
       $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top -59)
            }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});