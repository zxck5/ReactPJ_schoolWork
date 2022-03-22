function validate(){
    var fname=document.getElementById("firstname").value;
    var lname=document.getElementById("lastname").value;
    var phone=document.getElementById("phone").value;
    var rp_name=document.getElementById("rp_name").value;
    var rp_phone=document.getElementById("rp_phone").value;
    var address=document.getElementById("address").value;
    var city=document.getElementById("city").value;
    var zip=document.getElementById("zip").value;
    var province=document.getElementById("province").value;

    var isValid=true;

    if(fname=="") {
        document.getElementById("fnresult").innerHTML="*Required";
        isValid=false;
    }
    else{
        document.getElementById("fnresult").innerHTML="";
    }

    if(lname=="") {
        document.getElementById("lnresult").innerHTML="*Required";
        isValid=false;
    }
    else{
        document.getElementById("lnresult").innerHTML="";
    }

    if(phone=="") {
        document.getElementById("phonenum").innerHTML="*Required";
        isValid=false;
    }
    else{
        document.getElementById("phonenum").innerHTML="";
    }

    if(rp_name=="") {
        document.getElementById("recipent").innerHTML="*Required";
        isValid=false;
    }
    else{
        document.getElementById("recipent").innerHTML="";
    }

    if(rp_phone=="") {
        document.getElementById("recipentphone").innerHTML="*Required";
        isValid=false;
    }
    else{
        document.getElementById("recipentphone").innerHTML="";
    }

    if(address=="") {
        document.getElementById("addr").innerHTML="*Required";
        isValid=false;
    }
    else{
        document.getElementById("addr").innerHTML="";
    }

    if(city=="") {
        document.getElementById("cityr").innerHTML="*Required";
        isValid=false;
    }
    else{
        document.getElementById("cityr").innerHTML="";
    }

    if(zip=="") {
        document.getElementById("zipr").innerHTML="*Required";
        isValid=false;
    }
    else{
        document.getElementById("zipr").innerHTML="";
    }

    if(province=="") {
        document.getElementById("provincer").innerHTML="*Required";
        isValid=false;
    }
    else{
        document.getElementById("provincer").innerHTML="";
    }


    if(isValid==true){
        document.getElementById("f1").submit();
    }
}//end of the function