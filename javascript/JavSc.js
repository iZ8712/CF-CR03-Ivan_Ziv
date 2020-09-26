function calculateInsurance() {

	var a = document.getElementById('nameInput').value;

	var b = document.getElementById("ageInput").value;
	
	var c = document.getElementById("countryInput").value;

	var d = document.getElementById("horseInput").value;

	var output ="";

	//I did it without else and it worked.

	if (c == "austria") {

		output = Math.floor(d * 100 / b + 50);
	
	} 

	if (c == "hungary") {

		output = Math.floor(d * 120 / b + 100);
	
	} 

	if (c == "greece") {

		output = Math.floor(d * 150 / b + 50);

	}

	document.getElementById('res').innerHTML = a + ", your insurance costs " + output +" \u20AC";

}




