$(document).ready(function(){

    $('#btn').on('click', function(){
        var check = true;

        alert("you have clicked the button");
        
        var ln = $('input[name=ln]').val();
        var fn = $('input[name=fn]').val();
        var pn = $('input[name=phoneNum]').val();
        var tax = 0.13;
        var product1 = parseInt($("#pdt1").val());
        var product2 =  parseInt($("#pdt2").val());
        var product3 = parseInt($("#pdt3").val());

        

        //validation
        if (ln.length < 1) {
            $('.result1').text("type something please");
            check = false;
        } else {
            $('.result1').text("");
        }
        if (fn.length < 1) {
            $('.result2').text("type something please");
            check = false;
        } else {
            $('.result2').text("");
        }
        if (pn.length < 1) {
            $('.result3').text("type something please");
            check = false;
        } else {
            $('.result3').text("");
        }
        if (product1.length < 1 || isNaN(product1)) {
            // alert("write your product1 amount");
            $('.result4').text("type your product1 please");
            check = false;
         
        } else {
            $('.result4').text("");
        }
        if (product2.length < 1 || isNaN(product2)) {
            // alert("write your product2 amount");
            $('.result5').text("type product2 please");
            check = false;
         
        } else {
            $('.result5').text("");
        }
        if (product3.length < 1 || isNaN(product3)) {
            // alert("write your product3 amount");
            $('.result6').text("type product3 please");
            check = false;
     
        } else{
            $('.result6').text("");
        }
        // if it validates all , then calculate
        if (check) {
            var total = Math.round((product1+product2+product3)*100)/100;
            // $("#c").val(total);
            

            if ($('.cal').is(':visible')) {
                $('.cal').hide();
            } else {
                $('.cal').show();
                $('input[name=phoneNum2]').attr('value',pn);
                $('input[name=fn2]').attr('value',fn);
                $('input[name=ln2]').attr('value',ln);
                $('input[name=total]').attr('value',total);
                $('input[name=tax]').attr('value',total*tax);
                $('input[name=realTotal]').attr('value',total+total*tax);
            }
        }
    });

    $('#submitBtn').on('click', function() {
        // document.getElementById("f1").submit();
        $("form[id=f1]").submit();
        
    });
    




});