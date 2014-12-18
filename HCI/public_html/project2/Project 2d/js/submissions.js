var fName = false;
var lName = false;
var email = false;
var phone = false;
var ta = false;
function validateFirstName() {
	fName = false;
	var item = document.getElementById("fname");
	if(item.value.length == 0 || item.value=="First Name")
		document.getElementById("fname_error").innerHTML = "*First name is required.";
	else if(item.value.length > 35)
		document.getElementById("fname_error").innerHTML = "*This field cannot exceed 35 characters.";
	else {
		fName = true;
		document.getElementById("fname_error").innerHTML = "";
	}
}
function validateLastName() {
	lName = false;
	var item = document.getElementById("lname");
	if(item.value.length == 0 || item.value=="Last Name")
		document.getElementById("lname_error").innerHTML = "*Last name is required.";
	else if(item.value.length > 35)
		document.getElementById("lname_error").innerHTML = "*This field cannot exceed 35 characters.";
	else {
		lName = true;
		document.getElementById("lname_error").innerHTML = "";
	}
}
function validateEmail() {
	email = false;
	var item = document.getElementById("email");
	var regexPattern = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)\b$/;
	if(item.value.match(regexPattern) == null)
		document.getElementById("email_error").innerHTML = "*Please enter a valid email address.";
	else if(item.value.length > 50)
		document.getElementById("email_error").innerHTML = "*This field cannot exceed 50 characters.";
	else {
		email = true;
		document.getElementById("email_error").innerHTML = "";
	}
}
function validatePhone() {
    phone = false;
	var item = document.getElementById("phone");
	
    var stripped = item.value.replace(/[\(\)\.\-\ ]/g, '');    

   if (item.value == "") {
        document.getElementById("phone_error").innerHTML = "*You didn't enter a phone number.";
       
    } else if (isNaN(parseInt(stripped))) {
        document.getElementById("phone_error").innerHTML = "*The phone number contains illegal characters.";
        
    } else if (!(stripped.length == 10)) {
        document.getElementById("phone_error").innerHTML = "*The phone number is the wrong length. Make sure you included an area code.";
        
    }
      else{
		  phone = true;
		  document.getElementById("phone_error").innerHTML = "";
	  }
}

function validateTextArea(areaName,counter,limit)
{
	ta=false;
	limit=10000;
if (areaName.value.length>limit){

document.getElementById("ta_error").innerHTML = "*You cannot go over 10,000 characters.";
}
else if(areaName.value.length==0){
	document.getElementById("ta_error").innerHTML = "*You need to type something in. This field is required.";
}

else{
counter.value = limit - areaName.value.length;
document.getElementById("ta_error").innerHTML = "";
ta=true;
}
}

function clearFields() {
	document.getElementById("fname").value = "";
	document.getElementById("lname").value = "";
	document.getElementById("email").value = "";
	document.getElementById("phone").value = "";
	document.getElementById("ta").value = "";

}
function canSubmit() {
	if(fName == false || lName == false || email == false || phone == false || ta == false)
	{
		alert("You need to fill out all of the required field. Please try again.");
		
		return false;
			}
	else
	{
		
	validateFirstName();
	validateLastName();
	validateEmail();
	validatePhone();
	validateTextArea();
	
	return (fName && lName && email && phone && ta);
	window.location ="../thankyou.html";
	}
}