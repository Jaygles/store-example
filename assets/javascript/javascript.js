$(window).scroll(function() {
    $('.nav-bar').toggleClass('scrolled', $(this).scrollTop() > 525)
});

$(window).scroll(function() {
    $('.nav-search').toggleClass('nav-scrolled', $(this).scrollTop() > 525)
});

$(window).scroll(function() {
    $('.nav-title').toggleClass('nav-title-scrolled', $(this).scrollTop() > 525)
});

$(window).scroll(function() {
    $('.shadow-wrapper').css({
        opacity: ($(this).scrollTop() / 900)
    });
});