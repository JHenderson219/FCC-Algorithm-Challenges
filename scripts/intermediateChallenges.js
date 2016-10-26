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
	function diffArray(arr1, arr2) {
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
});