$(document).ready(function () {
    $("#navbar-toggle").click(function () {
        $("#responsive-menu").slideToggle();
    })

    $(".re-icon").click(function () {
        $("ul.sub-menu").slideToggle();
        $(this).toggleClass("open");
    })

    $(window).resize(function () {
        $("#responsive-menu").slideUp();
        $("ul.sub-menu").slideUp();
        $("#responsive-menu i").removeClass("open");
    })
})