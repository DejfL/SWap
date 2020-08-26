$(".menuItem").click(function() {
    var $id = $(this).attr('id');
    var $headerHeight = $("#header").height();

    $(".close").click();


    if ($id == "scrol1") {
        $('html, body').animate({
            scrollTop: $("#banner").offset().top
        }, 1000);
    } else if ($id == "scrol2") {
        $('html, body').animate({
            scrollTop: $("#one").offset().top - $headerHeight
        }, 1000);
    } else if ($id == "scrol3") {
        $('html, body').animate({
            scrollTop: $("#two").offset().top - $headerHeight
        }, 1000);
    }


})