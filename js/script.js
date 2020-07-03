//focus on name field when page is loaded 
const name = document.getElementById("name")
name.focus(); 


/** job role **/
const dropTitle = document.getElementById("title");
const otherTitle = document.getElementById("other-title"); 

//when other is selected shows "your job role" field 
otherTitle.style.display = "none";
dropTitle.addEventListener("change", (e) => {
	if (e.target.value === "other") {
 		otherTitle.style.display = "block";
	} else {
		otherTitle.style.display = "none";
	}
});


/** t-shirt info **/ 
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
	


/** Activity Registration **/ 
let totalPrice = document.createElement('div'); 
let totalCost = 0; 
const activities = document.querySelector(".activities");
const checkedBox = document.querySelectorAll('.activities input');

//add Total Price
activities.appendChild(totalPrice); 

//Adding the cost of each event 
activities.addEventListener('change', (e) => {
	let check = e.target; 
	let cost = check.getAttribute('data-cost');
	cost = parseInt(cost); 
	if (check.checked) {
		totalPrice.style.color = "black"; 
		totalCost += cost; 
	} else {
		totalCost -= cost; 
	}

 	//shows total $$ on page 
	totalPrice.textContent = `Total: $${totalCost}`;  

	//checkboxes 
	for (let i = 0; i < checkedBox.length; i++) {
		let time = check.getAttribute('data-day-and-time'); 
		const session = checkedBox[i].getAttribute('data-day-and-time')
		if (time === session && check !== checkedBox[i]) {
			if (check.checked) {
				checkedBox[i].disabled = true; 
			} else {
				checkedBox[i].disabled = false; 
			}
		}
	}
});


/**payment section **/
const payment = document.getElementById("payment"); 
const cc = document.getElementById("credit-card"); 
const paypal = document.getElementById("paypal"); 
const bitcoin = document.getElementById("bitcoin"); 

//hide initially except credit card payments  
payment.removeChild(payment[0]); 
cc.style.display = "block";
paypal.style.display = "none"; 
bitcoin.style.display = "none";

//payment selection changes 
payment.addEventListener("change", (e) => {
//credit card 
	if (e.target.value === "credit card") {
		cc.style.display = "block";
		paypal.style.display = "none"; 
		bitcoin.style.display = "none"; 
	//paypal 
	} else if (e.target.value === "paypal") {
		cc.style.display = "none";
		paypal.style.display = "block"; 
		bitcoin.style.display = "none";
	//bitcoin 
	} else if (e.target.value === "bitcoin") { 
		cc.style.display = "none";
		paypal.style.display = "none"; 
		bitcoin.style.display = "block";
	} else {
		cc.style.display = "none";
		paypal.style.display = "none"; 
		bitcoin.style.display = "none";
	}
}); 


/** form validation **/
function validName() {
	const regex = /^[a-zA-Z ]{2,30}$/; 
	if (!regex.test(name.value)) {
		name.style.borderColor = 'red'; 
		return false; 
	} else {
		name.style.borderColor = 'white'; 
		return true; 
	}	
}

function validEmail() {
	const email = document.getElementById('mail'); 
	const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
	if (!regex.test(email.value)) {
		email.style.borderColor = 'red'; 
		return false; 
	} else {
		email.style.borderColor = 'white'; 
		return true; 
	}
}

function validAct() {
	const allActivities = document.querySelectorAll('.activities input');
	let checkBoxes = 0; 
	for (let i = 0; i < allActivities.length; i++) {
		if (allActivities[i].checked) {
			totalPrice.textContent = `Total: $${totalCost}`; 
			return true; 
		} else {
			totalPrice.style.color = 'red';
			totalPrice.textContent = "Please select an activity"
		}	
	} return false; 
}

function validCC() {
	const cc = document.getElementById('cc-num'); 
	const regex = /^[0-9]{13,16}$/; 
	if (!regex.test(cc.value)) {
		cc.style.borderColor = 'red'; 
		return false; 
	} else {
		cc.style.borderColor = 'white'; 
		return true; 
	}
}

function validZip() {
	const zip = document.getElementById('zip'); 
	const regex = /^\d{5}$|^\d{5}-\d{4}$/;
	if (!regex.test(zip.value)) {
		zip.style.borderColor = 'red'; 
		return false; 
	} else {
		zip.style.borderColor = 'white'; 
		return true; 
	}
}

function validCVV() {
	const cvv = document.getElementById('cvv'); 
	const regex = /^[0-9]{3}$/;
	if (!regex.test(cvv.value)) {
		cvv.style.borderColor = 'red'; 
		return false; 
	} else {
		cvv.style.borderColor = 'white'; 
		return true; 
	}
}

addEventListener("submit", (e) => {
	if (!validName()) {
		e.preventDefault(); 
	}
	if (!validEmail()) {
		e.preventDefault(); 
	}
	if (!validAct()) {
		e.preventDefault(); 
	}
	if (payment[0].selected === true) {
		if(!validCC()) {
			e.preventDefault(); 
		}
		if(!validZip()) {
			e.preventDefault(); 
		}
		if(!validCVV()) {
			e.preventDefault(); 
		}
	}
}); 

