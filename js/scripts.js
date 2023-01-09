jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 890) {
        jQuery(".header").addClass("show");
    } else {
        jQuery(".header").removeClass("show");
    }
});
