jQuery(function($) {'use strict',

    //#main-slider
    $(function(){
        $('#main-slider.carousel').carousel({
            interval: 8000
        });
    });

    // accordian
    $('.accordion-toggle').on('click', function(){
        $(this).closest('.panel-group').children().each(function(){
            $(this).find('>.panel-heading').removeClass('active');
        });

        $(this).closest('.panel-heading').toggleClass('active');
    });

    //Initiat WOW JS
    new WOW().init();
    

});
