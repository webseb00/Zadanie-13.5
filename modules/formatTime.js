
function formatTime(time) {

    var hours = Math.floor(time / 3600);
    var minutes = Math.floor((time % 3600) / 60);
    var seconds = time % 60;

    if(hours < 10) {
        hours = '0' + hours;
    }
    
    if(minutes < 10) {
        minutes = '0' + minutes;
    }
    
    if(seconds < 10) {
        seconds = '0' + seconds;
    }
      
    return hours + ' godz. ' + minutes + ' min. ' + seconds + ' sek.';
    
}

exports.print = formatTime;