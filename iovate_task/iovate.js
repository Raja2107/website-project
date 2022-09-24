
function fname(){
    var fname = document.getElementById("fn").value; 
    if(fname == null || fname == "" || fname.length < 3 ){
       document.getElementById("fna").style.display="inline";
       
    }else{
        document.getElementById("fna").style.display="none";

    }
   }
function lname(){
    var lname = document.getElementById("ln").value;
    if(lname == null || lname == "" || lname.length < 1){
        document.getElementById("lna").style.display="inline";
    }
    else{
        document.getElementById("lna").style.display="none";
    }
} 
function email(){
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{3})$/;
    var mail = document.getElementById("mailid").value;
    if(mail.match(mailformat)){
        document.getElementById("mail").style.display="none";
    }
    else{
        document.getElementById("mail").style.display="inline";
    }
}
function add(){
    var add = document.getElementById("ad").value;
    if(add == null || add.length > 5){
        document.getElementById("address").style.display="none";
    }
    else{
        document.getElementById("address").style.display="inline";
        }
}
function sub(){
    var fname = document.getElementById("fn").value;
    var lname = document.getElementById("ln").value;   
    var mail = document.getElementById("mailid").value;
    var add = document.getElementById("ad").value;
    if(fname == "" || lname == "" || mail == "" || add == ""){
        alert("please fill the above details")
        
    }
    else {
        alert("the form is submitted")
        window.location.reload();
    }

}

