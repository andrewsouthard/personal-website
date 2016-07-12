/*
 * Offset the scrollspy so it will correctly highlight the link in focus. 
 */
$('body').scrollspy({ target: '#navbar', offset: 400, })

/*
 * Smoothly scroll to the anchor when it is clicked.
 */
$("a").click(function(event) {
    if($.attr(this, 'href').match("^#")) {
        var offset = 210;
        event.preventDefault();
        var anchor = $($.attr(this, 'href')).offset().top - offset;
        if(anchor < 200) {
            anchor = 0;
        }
        $('html, body').animate({scrollTop: anchor}, 500);
    }
});
