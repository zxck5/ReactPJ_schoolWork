function calc(){
    var price = document.getElementById("sweaterprice").innerHTML;
    var noTickets = document.getElementById("productQuantity").value;
    var subtotal = parseFloat(price) * noTickets
    var discount = parseFloat(price) * noTickets * 0.1
    var total = parseFloat(price) * noTickets * 0.9 + 20
    discount = Math.round(discount*100)/100;
    total = Math.round(total*100)/100;
    
    if (!isNaN(subtotal))
      document.getElementById("subtotal").innerHTML = "CAD$" + subtotal
      document.getElementById("subtotal2").innerHTML = "CAD$" + subtotal
      document.getElementById("discount").innerHTML = "-CAD$" + discount
      document.getElementById("total").innerHTML = "CAD$" + total
}

function validate(){
    var isValid=true;
    var selected_value1 = $('#deliverydestination').val()
    var selected_value2 = $('#deliverymethod').val()
    var selected_value3 = $('#Paymentmethod').val()
    
    if(selected_value1=="") { 
        document.getElementById("deliverydestinationresult").innerHTML=" *Required";
        isValid=false;
    }
    else{
        document.getElementById("deliverydestinationresult").innerHTML="";
    }

    if(selected_value2=="") { 
        document.getElementById("deliverymethodresult").innerHTML=" *Required";
        isValid=false;
    }
    else{
        document.getElementById("deliverymethodresult").innerHTML="";
    }

    if(selected_value3=="") { 
        document.getElementById("Paymentmethodresult").innerHTML=" *Required";
        isValid=false;
    }
    else{
        document.getElementById("Paymentmethodresult").innerHTML="";
    }

    if(isValid==true){
        document.getElementById("ShoppingCartForm").submit();
    }
}//end of the function
