$(document).ready(function(){
    var idx = 1;
    setInterval(function(){
        idx ++;
        if (idx > 5) {
            idx =1;
        }
        $("#banner").attr("src","../picture/MainpageWelcomingBanner_" + idx + ".jpg");
       
    }, 2000);

});