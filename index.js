var timeLeft = "--:--";

var nav = {};

Date.prototype.getMinutesTime = function() {
    return this.getHours() * 60 + this.getMinutes();
}

var now = new Date();

// trabalho: 0
// descanso: 1

const TYPE_TRABALHO = 0, TYPE_SAIDA = 1;

var interval = setInterval(function() {
    nav = $(".profile-tabset .nav.nav-tabs");
    if(nav.length) {
        calculateHours();
        clearInterval(interval);
    }  
}, 1000);

var calculateHours = function() {
    nav.append('<li class="pull-right"><a><span>' + timeLeft + '</span></a></li>');
    
    var times = [], time = {};
    var pontos = $(".profile-timeline .media .media-right .label:contains('hoje')").each(function(index) {
        time = $(this).text().split(' ')[1].split(':');

        times.push({
            timeson: time[0] * 60 + time[1],
            type: (index % 2 == 0) ? TYPE_TRABALHO : TYPE_SAIDA
        });
    });
    times.reverse();

    if(times.length == 1) {
        var left = 8 * 60 + times[0] - now.getMinutesTime();
        var m = left % 60;
        var mf = (m > 10) ? m : "0" + m, h = "0" + Math.floor(left / 60);
        
        timeLeft = h + ":" + mf;
    } else if(!(times.length % 2)) {

    }
};