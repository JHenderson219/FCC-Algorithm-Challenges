document.addEventListener("DOMContentLoaded", function() { 	
function telephoneCheck(str){
	var validFirst = /[\d()]/gi;
	var validChars = /[-\d\w]/gi;
	var invalidChars =/[-\d\w]/gi;
	debugger;
	for(var i = 0; i<str.length; i++){
		if (str[i] != validChars){
			console.log("Invalid Characters Detected! Returned False!");
			return false;
		}
	}
console.log("Returned True!");
return true;
}

document.getElementById("#output").innerHTML = "<h3 class = 'text-center'>"
+telephoneCheck("555 555 5555");
+ "</h3>";
});