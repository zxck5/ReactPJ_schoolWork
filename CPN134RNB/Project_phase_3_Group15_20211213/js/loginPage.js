$(document).ready(function(){

    $('.signUpBox').on('click', function(e){
        e.preventDefault();
        
        $('.login-box').hide();
        $('.login-box2').show();   
        
      
    });
    $('.signInBox').on('click',function(e){
        e.preventDefault();
        
        $('.login-box2').hide();  
        $('.login-box').show();
        
       
        
    });


    $('input[name=pw]').keyup(function(){
        var id = $('input[name=un1]').val();
        if (!id.includes("@") || !id.includes(".com")) {
           
            $('.sp1').show();
            
        } else {
            $('.sp1').hide();
        }
    });
    $('input[name=un2]').keyup(function(){
        var fn = $('input[name=fn]').val();
        var ln = $('input[name=ln]').val();
        if (fn.length < 1) {
            
            $('.sp1_fn').show();
          
         } else {
             $('.sp1_fn').hide();
         }
         if (ln.length < 1) {
             $('.sp1_ln').show();
             
         } else {
             $('.sp1_ln').hide();
         }
    });

    $('input[name=pw2]').keyup(function(){
        var id = $('input[name=un2]').val();
        if (!id.includes("@") || !id.includes(".com")) {
            
            $('.sp1').show();
        }else{
            $('.sp1').hide();
        }
    });


    
    $('input[id=btn1]').on('click', function(e){
        e.preventDefault();
        var em = $('input[name=un1]').val();
        var pw = $('input[name=pw]').val();
        var check = true;
        // alert(em);
        // alert(pw);
        if (em.length < 1 || !em.includes('@') || !em.includes('.com')) {
            $('.sp1').show();
            check = false;
        } else {
            $('.sp1').hide();
        }
        
        if (pw.length < 6) {
            $('.sp1_pw').show();
            check = false;
        } else {
            $('.sp1_pw').hide();
        }
        
        if (check){
            $("[name=form1]").submit();
             alert("id: "+ em +"\nyour id currently logged in.");
        }
        
    });
       

    
    

    $('input[id=btn2]').on('click', function(e){
        e.preventDefault();
        var ln = $('input[name=ln]').val();
        var fn = $('input[name=fn]').val();
        var em = $('input[name=un2]').val();
        var pw = $('input[name=pw2]').val();
        var check = true;

        if (fn.length < 1) {
            
           $('.sp1_fn').show();
            check = false;
        } else {
            $('.sp1_fn').hide();
        }
        if (ln.length < 1) {
            $('.sp1_ln').show();
            check = false;
        } else {
            $('.sp1_ln').hide();
        }
        if (em.length < 1 || !em.includes('@') || !em.includes('.com')) {
            $('.sp1').show();
            check = false;
        } else {
            $('.sp1').hide();
        }
        if (pw.length < 6) {
            $('.sp1_pw').show();
            check = false;
        } else {
            $('.sp1_pw').hide();
        }
        if (check){
            $("[name=form2]").submit();
            alert("id: "+ em +"\nyour id is created.");
        }
    });
        
    
    

    
    


    
   

});