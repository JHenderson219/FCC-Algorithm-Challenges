document.addEventListener("DOMContentLoaded", function() { 	
	//Sum All Numbers in Range
	/*var anArr = [];
	function sumAll(arr) {
		
		if (arr[0]>arr[1]){
    		for(var i=arr[1]; i<arr[0]+1; i++){
    			console.log (anArr);
    			anArr.push(i);
				console.log (anArr);
    		}	
    		return anArr.reduce(function(a,b){
    			return a+b;
    		});
  		} else if (arr [1]>arr[0]){
 
    		for(var i=arr[0]; i<arr[1]+1; i++){
    			console.log (anArr);
    			anArr.push(i);
    			console.log(anArr);
    		}	
    		return anArr.reduce(function(a,b){
    			return a+b;
    		});
  		}
  			return "Failed!";
		}

	document.getElementById("#output").innerHTML = "<h3 class = 'text-center'>"+sumAll([5, 10]) + "</h3>";*/
	/*function diffArray(arr1, arr2) {
  		var newArr = [];
  		var longest;
  		debugger;
  		if (arr1.length >= arr2.length){
  			longest = arr1.length;
  		} else{
  			longest = arr2.length;
  		}
  		
  		if (arr1.length === 0){
  			return arr2;
  		} else if (arr2.length === 0){
  			return arr1;
  		}

  		for(var i = 0; i<longest; i++){
  			if (arr2.indexOf(arr1[i]) < 0){
  				newArr.push(arr1[i]);
  			} if (arr1.indexOf(arr2[i])<0) {
  				newArr.push(arr2[i]);
  			}
  		
  		console.log(newArr);
  		}	
		newArr = newArr.filter(function(val){
  			return val !== undefined;
  		});	

  		// Same, same; but different.
  		return newArr;
}


	document.getElementById("#output").innerHTML = "<h3 class = 'text-center'>"+diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]) + "</h3>";
});*/

function convertToRoman(num) {
	var romanArr= [];
	var counter = 0;
	var decrement = 1;
	debugger;
	for (var i = num; i> 0; i-decrement){
		switch(i){
			case i > 1000:
			decrement = 1000;
			romanArr.push("M");
			break;
			case i > 500:
			decrement = 500;
			romanArr.push("D");
			break;
			case i > 100:
			decrement = 100;
			romanArr.push("C");
			break;
			case i > 50:
			decrement = 50;
			romanArr.push("L");
			break;
			case i > 10:
			decrement = 10;
			romanArr.push("X");
			break;
			case i > 5:
			decrement = 5;
			romanArr.push("V");
			break;
			case i > 1:
			decrement = 1;
			romanArr.push("I");
			default:
			return "";
		}
	} console.log(romanArr)
 return romanArr;
}


document.getElementById("#output").innerHTML = "<h3 class = 'text-center'>"+convertToRoman(1001) + "</h3>";
});