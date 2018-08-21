var posicaoInicial = $('body').position().top;
$(document).scroll(function () { // oscultador de scroll
    var posicaoScroll = $(document).scrollTop(); // obtem a quantidade de scroll no momento
    //  if (posicaoInicial < posicaoScroll) $('#meuobjeto_id').animate({'opacity': 1}, 500);
    if(posicaoScroll>100){
       $('.nav-bar').css('background-color', "rgba(0, 0, 0, 0.8)");
       $('.nav-bar').css('transition', "0.5s");  
       $('.imgdevs').attr('src', "img/fonte branca-min-min.png");  
    }
    else{
       $('.nav-bar').css('background-color', "rgba(0, 0, 0, 0.2)");
       $('.imgdevs').attr('src', "img/fonte-branca2-min.png");6
       $('.navegacao a').css('color', "#fff");
  

    }

});

// NAV-BAR MOMBILE
$(document).ready(function() {
    
    $("[data-toggle]").click(function() {
    var toggle_el = $(this).data("toggle");
    $(toggle_el).toggleClass("open-sidebar");
    $('#sidebar').toggleClass('change-sidebar');
    $('.igff').attr("src","img/flavia-min.png");
    

    
    });

    });
    // SLIDE SCROLL
    $('a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
