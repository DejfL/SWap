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
    } else if ($id == "scrol4") {
        $('html, body').animate({
            scrollTop: $("#three").offset().top - $headerHeight
        }, 1000);
    }
})

$(".hovereffect").click(function() {
    var $id = $(this).attr('id');
    var $headerHeight = $("#header").height();

    if ($id == "hoverWapno1") {
        if (!$("#wapno2").hasClass("collapse")) {
            $("#wapno2").addClass("collapse");
        }

        $("#wapno1").removeClass("collapse");

        $('html, body').animate({
            scrollTop: $("#wapno1").offset().top - $headerHeight
        }, 1000);
    } else if ($id == "hoverWapno2") {
        if (!$("#wapno1").hasClass("collapse")) {
            $("#wapno1").addClass("collapse");
        }

        $("#wapno2").removeClass("collapse");

        $('html, body').animate({
            scrollTop: $("#wapno2").offset().top
        }, 1000);
    }
})