$(function()    {


/*  Slider  */

    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });


    /*  Smooth scroll   */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });


/*  Filter  */


    let filter = $("[data-filter]");

    filter.on("click", function(event) {
        event.preventDefault();

       let cat = $(this).data('filter');   

        if(cat == 'all') {
            $("[data-cat").removeClass('hide');
        } else {
            $("[data-cat").each(function() {
                let workCat = $(this).data('cat');

                if(workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            }); 
        }
    });



 /*  Mobile__Nav */

    const navToggle = $("#navToggle");
    const nav = $("#nav");

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");


    });

});