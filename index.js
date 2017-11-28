var timeLeft = "--:--";

var nav = {};

// trabalho: 0
// descanso: 1

const TYPE_TRABALHO = 0, TYPE_SAIDA = 1;

setTimeout(function() {
    nav = $(".navbar-main .navbar-right");        
    nav.append('<li class="pull-right"><a style="line-height: 40px">' + timeLeft + '</a></li>');    

    var times = [];
    var pontos = $(".profile-timeline .media .media-right .label:contains('hoje')").each(function(index) {
        times.push({ 
            time: $(this).text().split(' ')[1], 
            type: (index % 2 == 0) ? TYPE_TRABALHO : TYPE_SAIDA
        });
    });
    times.reverse();
    
    
}, 5000);