jQuery(document).ready(function($){
    //circus height control
    $('.one_half_box, .one_eighth_box').each(function(index, el){
        $(el).css('min-height', $(el).width() + 'px');
    });
    $('.one_fourth_box.v_half').each(function(index, el){
        $(el).css('min-height', ( $(el).width()/2 ) + 'px');
    });
    $('.one_fourth_box.h_half').each(function(index, el){
        $(el).css('min-height', ( $(el).width()*2 ) + 'px');
    });

    $(window).on('resize', function(){
        $('.one_half_box, .one_eighth_box').each(function(index, el){
            $(el).css('min-height', $(el).width() + 'px');
        });
        $('.one_fourth_box.h_half').each(function(index, el){
            $(el).css('min-height', ($(el).width()*2) + 'px');
        });
        $('.one_fourth_box.v_half').each(function(index, el){
            $(el).css('min-height', ($(el).width()/2) + 'px');
        });
    });
});
