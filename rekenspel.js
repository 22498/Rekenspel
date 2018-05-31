window.addEventListener("load",loaded,false);

function loaded(){
	var som = document.getElementById("som");
	var invoer = document.getElementById("invoer");
	var img = document.getElementById("antwoord");
	var opgave;
	var zien;

	function randomNumbers(){
		var a = Math.floor(Math.random()*9+1);
		var b = Math.floor(Math.random()*9+1);
		var operators = [" - ", " + ", " / ", " * "];
		var randomOperator = operators[Math.floor(Math.random() * operators.length)];

		if(randomOperator == " - " && a < b) {
			opgave = b + randomOperator + a;
			zien = b + randomOperator + a;

		} else if(randomOperator == " * ") {
			opgave = a + randomOperator + b;
			zien = a + " x " + b;
		} else {
			opgave = a + randomOperator + b;
			zien = a + randomOperator + b;
		}
		som.innerHTML = zien;
		invoer.focus();
	}
	function resetall(){
		img.src = "placeholder.png";
		document.getElementById("was").innerHTML = "";
		invoer.value ="";
		randomNumbers();
	}

	randomNumbers();
	invoer.addEventListener("keydown",key,false);

	function key(e){
		var code = 13;
		if(e.keyCode == code)
		{

			if(eval(opgave) == invoer.value){
				img.src = "goed.png";
			} else {
				document.getElementById("was").innerHTML = "Dit is het antwoord: " + eval(opgave);
				img.src = "fout.png";
			}
			window.setTimeout(resetall,1500);
		}
	}

}
