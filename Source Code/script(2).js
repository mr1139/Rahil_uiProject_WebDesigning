//form validation 
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const order =document.getElementById("order");

function formValidation()
{
	if (name.value.length < 5 || name.value.length > 20) {
    alert("Name length should be more than 5 and less than 21");
    name.focus();
    return false; }
	
	if (!phone.value.match(/^[1-9][0-9]{9}$/)) {
    alert("Phone number must be 10 characters long number and first digit can't be 0!");
    phone.focus();
    return false; }
	
	if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    alert("Please enter a valid email!");
    email.focus();
    return false; }
	
	if (order.value.length < 10 || order.value.length > 50) {
    alert("Please dont order single item ,*max. length is 50 ");
    order.focus();
    return false;
  }
  
  	else {
		//alert("Thanks for submitting");
		swal({
		title: "Good Job!" , 
		text : "Your have Successfully Submitted Your Order.." ,
		icon : "success" 
	});
	}
  
}