$(document).ready(function(){

    

    $('#btn_left').hover(function(){
        $(this).css('color','white');
        $(this).css('background-color','skyblue');
    }, function(){
        $(this).css('color','skyblue');
        $(this).css('background-color', 'rgba(0,0,0,0)');
    }
    );
    $('#btn_right').hover(function(){
        $(this).css('color','white');
        $(this).css('background-color','skyblue');
    }, function(){
        $(this).css('color','skyblue');
        $(this).css('background-color', 'rgba(0,0,0,0)');
    });


    $('#sel_id1').on("change", function(){
        if ($('#sel_id1').val() == 'mocha') {
    
            
            $('#title1').text("Funnel Neck Cape Wool Sweater");
            $('#price_tag').text("$168");
            $('input[name=quantity]').val("1");
            $('#img').attr('src',arr[0]);
    
        } else if ($('#sel_id1').val() == 'ivory') {
    
            
            $('#title1').text("Funnel Neck Cape Wool Sweater (ivory)");
            $('#price_tag').text("$378");
            $('input[name=quantity]').val("1");
            $('#img').attr('src',arr[2]);
        }

    });

    



    var arr = ["../picture/FunnelNeckCapeWoolSweater_mocha_1.jpg","../picture/FunnelNeckCapeWoolSweater_mocha_2.jpg","../picture/FunnelNeckCapeWoolSweater_ivory_1.jpg", "../picture/FunnelNeckCapeWoolSweater_ivory_2.jpg","../picture/ScubaComfySuitPants_white_1.jpg","../picture/BasicCottonPlainTee_White_1.jpg"];
    var idx = 0;

    // scuba -> 4 cotton plain -> 5
    $('.ch').on('click',function(e){
        if ($(this).attr('id') == 'img') {
            e.preventDefault();
            idx ++;
            idx %= arr.length;
    
            $('#img').attr('src',arr[idx]);
    
            mochaInfo(arr);
        } else if ($(this).attr('id') == 'btn_left') {
            e.preventDefault();
            idx --;
            if (idx < 0) {
               
                idx = arr.length-1;
            }
            
            $('#img').attr('src',arr[idx]);
    
            mochaInfo(arr);

        } else if ($(this).attr('id') == 'btn_right') {
            e.preventDefault();
            idx ++;
            idx %= arr.length;
    
            $('#img').attr('src',arr[idx]);
    
            mochaInfo(arr);
    

        }
    });
});

function mochaInfo(arr) {
    $('#sel_id1 .opt_h').show();
    if ($('#img').attr('src') == arr[0] || $('#img').attr('src') == arr[1]) {

        $('#sel_id1').val('mocha').prop("selected", true);
        $('#title1').text("Funnel Neck Cape Wool Sweater");
        $('#price_tag').text("$168");
        $('input[name=quantity]').val("1");
    }

    if ($('#img').attr('src') == arr[2] || $('#img').attr('src') == arr[3]) {
            
        $('#sel_id1').val('ivory').prop("selected", true);
        $('#title1').text("Funnel Neck Cape Wool Sweater (ivory)");
        $('#price_tag').text("$378");
        $('input[name=quantity]').val("1");
    }
    if ($('#img').attr('src') == arr[4]) {
            
        $('#sel_id1 .opt_h').hide();
        $('#sel_id1').val('default').prop("selected", true);

        $('#title1').text("Scuba Comfy Suit Pants");
        $('#price_tag').text("$138");
        $('input[name=quantity]').val("1");
    }
    if ($('#img').attr('src') == arr[5]) {
         $('#sel_id1 .opt_h').hide();
        $('#sel_id1').val('default').prop("selected", true);

        $('#title1').text("Basic Cotton Plain Tee");
        $('#price_tag').text("$148");
        $('input[name=quantity]').val("1");
    }

}

