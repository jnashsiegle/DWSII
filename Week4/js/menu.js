$(document).ready(function() {  
    var pull        = $('#pull');   
    var menu        = $('nav ul'); // don't miss the var
    var menuHeight  = menu.height();  // don't miss the var

    $(pull).on('click', function(e) {  
        e.preventDefault();  
        menu.slideToggle();  
    });  

    $(window).resize(function(){  
        var w = $(window).width();  
        if(w > 320 && menu.is(':hidden')) {  
            menu.removeAttr('style');  
        }  
    });
}); // close