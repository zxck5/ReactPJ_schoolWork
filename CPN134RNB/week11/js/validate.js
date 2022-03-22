function validate() {
    var fname= document.getElementById("t1").value;
    var lname= document.getElementById("t2").value;
    var age= document.getElementById("t3").value;
    var isValid=true;
    if (fname=="") {
        document.getElementById("t1result").innerHTML="First name is required";
        isValid = false;

    } else {
        document.getElementById("t1result").innerHTML="";
       
    }//end of fname if
     
    if (lname=="") {
        document.getElementById("t2result").innerHTML="Last name is required";
        isValid = false;

    }else {
        document.getElementById("t2result").innerHTML="";
      
    }//end of lname if
    
    if (age=="") {
        document.getElementById("t3result").innerHTML="Age is required"
        isValid = false;
    }else {
        document.getElementById("t3result").innerHTML="";
        
    }// end of function
    if (isValid) {
        document.getElementById("f1").submit();
    }
} 