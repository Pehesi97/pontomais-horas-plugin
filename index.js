var timeLeft = "--:--";

var nav = {};

window.onload = function() {
    setTimeout(function() {
        nav = $(".navbar-main .navbar-right");        
        nav.append('<li class="pull-right"><a style="line-height: 40px">' + timeLeft + '</a></li>');        
        var times = [];
        var pontos = $(".profile-timeline .media .media-right .label:contains('hoje')").each(function(index) {
            times.push($(this).text().split(' ')[1]);
        });
        times.reverse();
        console.log(times);        
    }, 5000);
};