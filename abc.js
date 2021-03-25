
var pnrD
function push(){
    var pnr = document.getElementById("pnr");
    var li =document.createElement("li");
    li.appendChild(document.createTextNode(pnrD))
    pnr.appendChild(li);
}
function addList(){
    
    // var trvaleDate = document.getElementById("trvaleDate");
    // var source = document.getElementById("source");
    // var destination = document.getElementById("destination");
    // var seatPreference = document.getElementById("seatPreference");
    // var seatPrmealPreferenceeference = document.getElementById("mealPreference");
    
    var passId = document.getElementById("passId").value;
// var userName = document.getElementById("userName").value;
// var email=document.getElementById("email").value;
// var pass=document.getElementById("password").value;
// var address=document.getElementById("address").value;
// var contact =document.getElementById("contact").value;
// var meal =document.getElementById("meal").value;

pnrD=passId;
console.log(pnrD);

   

    // var li =document.createElement("li");
    // li.appendChild(document.createTextNode(passId))
    // pnr.appendChild(li);
    // passId="";

}



function verify(){
    var user=document.getElementById("userName").value;
var useLen=user.length;
var password =document.getElementById("password").value;
var passLen=password.length;





    if(passLen===0 && useLen===0 ){
        document.getElementById("msgUser").innerHTML="Username required *"
        document.getElementById("msgPass").innerHTML="Password required *"
    }
    else if(passLen===0 ){
        document.getElementById("msgPass").innerHTML="Password required *"

    }else if(useLen===0){
        document.getElementById("msgUser").innerHTML="Username required *"

    }

    else if(passLen!==0 || useLen!==0)
    {
        console.log("Error from ||")

        document.getElementById("msgPass").innerHTML=" ";
        document.getElementById("msgUser").innerHTML=" "


    }
   
    else{
        console.log("noError")
    }
   
   
}

function regs(){

    
var passId = document.getElementById("passId").value;
var userName = document.getElementById("userName").value;
var email=document.getElementById("email").value;
var pass=document.getElementById("password").value;
var address=document.getElementById("address").value;
var contact =document.getElementById("contact").value;
// var meal =document.getElementById("meal").value;


var msgPass = document.getElementById("passenger");
var msgName = document.getElementById("nameMsg");
var msgEmail=document.getElementById("emailMsg");
var msgPassword=document.getElementById("passwordMsg");
var msgAddress=document.getElementById("addressMsg");
var msgContact =document.getElementById("contactMsg");
// var msgMeal =document.getElementById("mealMsg");

  if(passId.length==0 && userName.length==0 && email.length==0 && pass.length==0 && address.length==0 && contact.length==0  )
  {
      msgName.innerHTML="Name Required *"
      msgPass.innerHTML="Passenger ID Required *"
      msgEmail.innerHTML="Email Required *"
      msgPassword.innerHTML="Password Required *"
      msgAddress.innerHTML="Address Required *"
      msgContact.innerHTML="Contact Required *"
  }
  var submit = true;
 
   
      if(userName.length==null || userName=="" ){
      msgName.innerHTML="Name Required *"
      submit = false;
    } 
     if(passId==null || passId==""){
        msgPass.innerHTML="Passenger ID Required *"

        submit = false
    }
     if(email==null || email==""){
      msgEmail.innerHTML="Email Required *"
      submit = false
    }
     if(pass==null || pass==""){
      msgPassword.innerHTML="Password Required *"
      submit = false
    }

    
     if(address==null|| address==""){
      msgAddress.innerHTML="Address Required *"
      submit = false
    }
   
    
     if(contact== null || contact==""){
      msgContact.innerHTML="Contact  Required *"
      submit = false
    }
    //  if (meal== null || meal=="" ){
    //     msgMeal.innerHTML="Meal Preference Required"
    //     submit = false;
    //     }//from here
  return submit;     
    
    
   
 }

 function book()
{
    var passId = document.getElementById("passId").value;
var userName = document.getElementById("userName").value;
var email=document.getElementById("email").value;
var pass=document.getElementById("password").value;
var address=document.getElementById("address").value;
var contact =document.getElementById("contact").value;
var meal =document.getElementById("meal").value;
    



var msgPass = document.getElementById("passenger");
var msgName = document.getElementById("nameMsg");
var msgEmail=document.getElementById("emailMsg");
var msgPassword=document.getElementById("passwordMsg");
var msgAddress=document.getElementById("addressMsg");
var msgContact =document.getElementById("contactMsg");
var msgMeal =document.getElementById("mealMsg");

var submit = true;
 
   
      if(userName.length==null || userName=="" ){
        msgName.innerHTML="Travel Date Required"
         submit = false
    } 
     if(passId==null || passId==""){
        msgPass.innerHTML="PNR Number Required"

        submit = false
    }
     if(email==null || email==""){
        msgEmail.innerHTML="Source  Required"
        submit = false
    }
     if(pass==null || pass==""){
        msgPassword.innerHTML="Destination  Required"
        submit = false
    }

    
     if(address==null|| address==""){
        msgAddress.innerHTML="Ticket Status Required"
        submit = false
    }
   
    
     if(contact== null || contact==""){
        msgContact.innerHTML="Seat Preference Required"
        submit = false
    }
     if (meal== null || meal=="" ){
        msgMeal.innerHTML="Meal Preference Required"
        submit = false;
        }//from here
  return submit;     

} 

// function removeWarning() {
//     document.getElementById(this.id + "_error").innerHTML = "";
// }

// msgPass.onkeyup = removeWarning;
// msgName.onkeyup = removeWarning;
// msgEmail.onkeyup = removeWarning;
// msgPassword.onkeyup = removeWarning;
// msgAddress.onkeyup = removeWarning;
// msgContact.onkeyup = removeWarning;
// msgMeal.onkeyup = removeWarning;
