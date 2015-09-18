$(document).ready(function(){

    // slider
   /* $('.header--slider').smSlider({
        transition : 'fader',
        duration : 500,
        autoPlay : false,
        autoArr : false,
        pagination : true
    });

    // fancy
    $('.fancy').fancybox();*/

        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 10000,
            values: [ 1000, 5000 ],
            create: function( event, ui ) {
                $(".ui-slider-handle").eq(0).html('<span class="dial_filter_aside">'+$( "#slider-range" ).slider( "values", 0 )+'</span>');
                $(".ui-slider-handle").eq(1).html('<span class="dial_filter_aside">'+$( "#slider-range" ).slider( "values", 1 )+'</span>');

                $(".dial_filter_aside").each(function(index){
                    var m_left = "-"+parseInt($(this).css("width"))/1.7;
                    $(this).css("margin-left", m_left+"px");

                });
            },
            slide: function( event, ui ) {

                $(".ui-slider-handle").eq(0).children("span").text(ui.values[ 0 ]);
                $(".ui-slider-handle").eq(1).children("span").text(ui.values[ 1 ]);

                $(".dial_filter_aside").each(function(index){
                    var m_left = "-"+parseInt($(this).css("width"))/1.7;
                    $(this).css("margin-left", m_left+"px");

                });
            }

        });

        $(".input-phone").mask("+7 (999) 999-9999");









});