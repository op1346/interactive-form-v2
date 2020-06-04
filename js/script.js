//focus - name input element and place focus on it 
document.getElementById("name").focus(); 

/** job role 
text field appears when other is selected **/
const dropTitle = document.getElementById("title");
const otherText = document.getElementById("other-title"); 


//add on change method 
otherText.style.display = "none";
dropTitle.addEventListener("change", (e) => {
	if (e.target.value === "other") {
 		otherText.style.display = "block";
	} else {
		otherText.style.display = "none";
	}
});


/** t-shirt info
theme selected --> color
switch themes --> changes to the correct one **/ 
const dropDesign = document.querySelector("#design");
const dropColor = document.querySelectorAll("#color option"); 
const selectColor = document.querySelector("#color")
const update = document.createElement("option"); 

//hide select theme option in the design menu
document.querySelectorAll("#design option")[0].style.display = 'none';


//update color field to read "Please select a T-Shirt theme"
update.textContent = "Please select a T-shirt theme"; 
update.setAttribute("selected", true); 
selectColor.appendChild(update); 
update.style.display = "none"; 

//hide colors in the color dropdown 
for (let i = 0; i < dropColor.length; i++) {
	dropColor[i].style.display = "none"; 
}


//theme js puns --> cornflower blue, dark slate grey and gold 
dropDesign.addEventListener("change", (e) => {
	for (let i = 0; i < dropColor.length; i++) {
		if (e.target.value === "js puns") {
			if (i >= 0 && i <= 2) {
				dropColor[i].style.display = "block";
			}
			if (i >= 3 && i <= 5) {
				dropColor[i].style.display = "none";
			}
		//theme i <3 js --> tomato, steel blue, dim grey
		} else if (e.target.value === "heart js") {
			if (i >= 0 && i <= 2) {
				dropColor[i].style.display = "none";
			} 
			if (i >= 3 && i <= 5) {
				dropColor[i].style.display = "block";
			}
		} else {
			dropColor[0].style.display = "block";
		}
	}
});
	



//register for activities 
let totalCost = 0; 
const mainConf = document.getElementsByName("all");
const totalPrice = document.createElement("LI"); 
const jsFw = document.getElementsByName("js-frameworks"); 
const express = document.getElementsByName("express"); 
const jsLibs = document.getElementsByName("js-libs"); 
const node = document.getElementsByName("node"); 
const activities = document.getElementsByClassName("activities"); 

if (mainConf.checked = true) {
	totalCost += 200; 
}
//if any of the other ones are checked add 100 use a loop 
for (let i = 1; i < activities.length; i++) {
	if (activities[i].checked = true) {
		totalCost += 100; 
	}
}

//js framework vs express 
if (jsFw.checked = true) {
	express.checked = false; 
}
if (express.checked = true) {
	jsFw.checked = false;
}
//js libs vs node 
if (jsLibs.checked = true) {
	node.checked = false; 
}
if (node.checked = true) {
	jsLibs.checked = false; 
}

//check --> disables 
//uncheck --> not disabled
//checks --> total $$$ 

//payment info
const 

addEventListener("change", (e) => {
	//credit card 
	if (e.target.value === "credit card") {
		style.display = "";
	//paypal 
	} else if (e.target.value === "paypal") {
		style.display = "";
	//bitcoin 
	} else if (e.target.value === "bitcoin") { 
		style.display = "";
	} else {

	}
)}; 
//credit card default - hide paypal and bitcoin - payment should match payment option displayed

//paypal option - credit and bitcoin hidden 

//bitcoin option - paypal and credit hidden 
//select payment method should not be selected - cannot submit without this field 

//form validation 
//name field cannot be blank 
//email field must be correctly formatted
//register activities - one must be checked
//credit card - cc number, zip code && 3 number CVV value
	//cc number - 13-16 digits 
	//zip code - 5 digits 
	//CVV - 3 digits 

//form validation messages 
//validation error - highlight area 
//name 
//email 
//register for activities 
//payment
	//credit card number 
	//zip code 
	//cvv 
//doesn't show error by default only after submission 
//empty form --> error 
