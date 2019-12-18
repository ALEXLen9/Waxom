$(function()    {


/*  Slider  */

    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        //dots: boolean,
        slidesToShow: 1,
        slidesToScroll: 1
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