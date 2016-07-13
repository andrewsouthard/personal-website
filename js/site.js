/* Set the width where the behavior will change for smaller screens. */
var minWidth = 1200;

/* Offset the scrollspy so it will correctly highlight the link in focus. */
$('body').scrollspy({ target: '#navbar', offset: $(window).height()/2, });

/* Smoothly scroll to the anchor when it is clicked. */
$("a").click(function(event) {

    /* Only run this if the link is an anchor and the screen width is large. */
    if($.attr(this, 'href').match("^#") && $(window).width() > minWidth) {

        /* Prevent the default action of going to the anchor. */
        event.preventDefault();

        /*
         * Calculate the offset from the top of the page where the top of the
         * anchor should be placed. The div should be centered vertically in
         * the window.
         */
        var offset = $(window).height()/2 - $($.attr(this, 'href')).height()/2;
        var anchor = $($.attr(this, 'href')).offset().top - offset;

        /* Scroll to the middle of the div. */
        $('html, body').animate({scrollTop: anchor}, 500);
    }
});
$(document).ready(function(){
    /* Set the top margin of the first box based on the window size. */
    if($(window).width() > minWidth) {
        $('.content-box').css({'margin-top': $(window).height()/3 });;
    }
});
