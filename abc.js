
function addList() {


    var pnrNo = document.getElementById("passId").value;
    var travelDate = document.getElementById("userName").value;
    var source = document.getElementById("email").value;
    var destination = document.getElementById("password").value;
    var ticketStatus = document.getElementById("address").value;
    var seatPref = document.getElementById("contact").value;
    var meal = document.getElementById("meal").value;

    var msgPnr = document.getElementById("passenger");
    var msgName = document.getElementById("nameMsg");
    var msgEmail = document.getElementById("emailMsg");
    var msgPassword = document.getElementById("passwordMsg");
    var msgAddress = document.getElementById("addressMsg");
    var msgContact = document.getElementById("contactMsg");
    // var msgMeal =document.getElementById("mealMsg");

    var submit = true;

    if(pnrNo== null|| pnrNo==""){
        msgPnr.innerHTML="PNR Requried*";
        submit=false;
    }
    if (travelDate == null || travelDate == "") {
        msgName.innerHTML = "Travel Date Required"
        submit = false
    }
    if (passId == null || passId == "") {
        msgPass.innerHTML = "PNR Number Required"

        submit = false
    }
    if (source == null || source == "") {
        msgEmail.innerHTML = "Source  Required"
        submit = false
    }
    if (destination == null || destination == "") {
        msgPassword.innerHTML = "Destination  Required"
        submit = false
    }


    if (ticketStatus == null || ticketStatus == "") {
        msgAddress.innerHTML = "Ticket Status Required"
        submit = false
    }


    if (seatPref == null || seatPref == "") {
        msgContact.innerHTML = "Seat Preference Required"
        submit = false
    }
    if (meal == null || meal == "") {
        msgMeal.innerHTML = "Meal Preference Required"
        submit = false;
    }
    return submit;





}



function verify() {
    var user = document.getElementById("userName").value;
    var useLen = user.length;
    var password = document.getElementById("password").value;
    var passLen = password.length;


    if (passLen === 0 && useLen === 0) {
        document.getElementById("msgUser").innerHTML = "Username required *"
        document.getElementById("msgPass").innerHTML = "Password required *"
    }
    else if (passLen === 0) {
        document.getElementById("msgPass").innerHTML = "Password required *"

    } else if (useLen === 0) {
        document.getElementById("msgUser").innerHTML = "Username required *"

    }
    else {
        document.getElementById("submitButton").setAttribute("href", "passengerPage.html");
    }


}

function regs() {


    var passId = document.getElementById("passId").value;
    var userName = document.getElementById("userName").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var address = document.getElementById("address").value;
    var contact = document.getElementById("contact").value;
    // var meal =document.getElementById("meal").value;


    var msgPass = document.getElementById("passenger");
    var msgName = document.getElementById("nameMsg");
    var msgEmail = document.getElementById("emailMsg");
    var msgPassword = document.getElementById("passwordMsg");
    var msgAddress = document.getElementById("addressMsg");
    var msgContact = document.getElementById("contactMsg");
    // var msgMeal =document.getElementById("mealMsg");

    if (passId.length == 0 && userName.length == 0 && email.length == 0 && pass.length == 0 && address.length == 0 && contact.length == 0) {
        msgName.innerHTML = "Name Required *"
        msgPass.innerHTML = "ID Required *"
        msgEmail.innerHTML = "Email Required *"
        msgPassword.innerHTML = "Password Required *"
        msgAddress.innerHTML = "Address Required *"
        msgContact.innerHTML = "Contact Required *"
    }
    if (passId.length !== 0 && userName.length !== 0 && email.length !== 0 && pass.length !== 0 && address.length !== 0 && contact.length !== 0) {
        document.getElementById("registerConfirm").setAttribute("href", "passengerRegSuccess.html")

    }
    var submit = true;


    if (userName.length == null || userName == "") {
        msgName.innerHTML = "Name Required *"
        submit = false;
    }
    if (passId == null || passId == "") {
        msgPass.innerHTML = "ID Required *"

        submit = false
    }
    if (email == null || email == "") {
        msgEmail.innerHTML = "Email Required*"
        submit = false
    }
    if (pass == null || pass == "") {
        msgPassword.innerHTML = "Password Required*"
        submit = false
    }


    if (address == null || address == "") {
        msgAddress.innerHTML = "Address Required*"
        submit = false
    }


    if (contact == null || contact == "") {
        msgContact.innerHTML = "Contact  Required*"
        submit = false
    }
    //  if (meal== null || meal=="" ){
    //     msgMeal.innerHTML="Meal Preference Required"
    //     submit = false;
    //     }//from here
    return submit;



}

function book() {
    var passId = document.getElementById("passId").value;
    var userName = document.getElementById("userName").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var address = document.getElementById("address").value;
    var contact = document.getElementById("contact").value;
    var meal = document.getElementById("meal").value;

    var msgPass = document.getElementById("passenger");
    var msgName = document.getElementById("nameMsg");
    var msgEmail = document.getElementById("emailMsg");
    var msgPassword = document.getElementById("passwordMsg");
    var msgAddress = document.getElementById("addressMsg");
    var msgContact = document.getElementById("contactMsg");
    var msgMeal = document.getElementById("mealMsg");

    var submit = true;
    
    if (passId.length !== 0 && userName.length !== 0 && email.length !== 0 && pass.length !== 0 && address.length !== 0 && contact.length !== 0 && meal.length!==0) {
        document.getElementById("ticketConfirm").setAttribute("href", "ticketConfirm.html");

    }
    if (userName == null || userName == "") {
        msgName.innerHTML = "Travel Date Required"
        submit = false
    }
    if (passId == null || passId == "") {
        msgPass.innerHTML = "PNR Number Required"

        submit = false
    }
    if (email == null || email == "") {
        msgEmail.innerHTML = "Source  Required"
        submit = false
    }
    if (pass == null || pass == "") {
        msgPassword.innerHTML = "Destination  Required"
        submit = false
    }


    if (address == null || address == "") {
        msgAddress.innerHTML = "Ticket Status Required"
        submit = false
    }


    if (contact == null || contact == "") {
        msgContact.innerHTML = "Seat Preference Required"
        submit = false
    }
    if (meal == null || meal == "") {
        msgMeal.innerHTML = "Meal Preference Required"
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
