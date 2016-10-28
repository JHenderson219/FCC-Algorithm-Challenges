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

//Diff Two Arrays
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
//Roman Numeral Converter
/*function convertToRoman(num) {
	var romanArr= [];
	var counter = 0;
	var numStrArr = num.toString().split('');
	console.log(numStrArr);
	var romanOnes= ["","I","II","III","IV","V","VI","VII","VIII","IX"];
	var romanTens= ["", "X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
	var romanHundreds = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
	var romanThousands = ["","M","MM","MMM","MMMM"];
	debugger;
	console.log(numStrArr.length);
	switch (numStrArr.length){

		case 1:
		romanArr.push(romanOnes[numStrArr[0]]);
		break;
		case 2:
		romanArr.push(romanTens[numStrArr[0]]);
		romanArr.push(romanOnes[numStrArr[1]]);
		break;
		case 3:
		romanArr.push(romanHundreds[numStrArr[0]]);
		romanArr.push(romanTens[numStrArr[1]]);
		romanArr.push(romanOnes[numStrArr[2]]);
		break;
		
		case 4:
		romanArr.push(romanThousands[numStrArr[0]]);
		romanArr.push(romanHundreds[numStrArr[1]]);
		romanArr.push(romanTens[numStrArr[2]]);
		romanArr.push(romanOnes[numStrArr[3]]);
		break;

		default:
		alert('Unexpected input!');
		break;
	}
 return romanArr.join('');
}


document.getElementById("#output").innerHTML = "<h3 class = 'text-center'>"+convertToRoman(649) + "</h3>";
});*/
	//Wherefore Art Thou
	/*function whatIsInAName(collection, source) {
  // What's in a name?
  		var arr = [];
  // Only change code below this line
	var srcKeys = Object.keys(source);
	return collection.filter(function(obj){
		for (var i=0; i < srcKeys.length; i++){
			if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]){
				return false;
			}
		}
		return true;
	});
  //console.log(Object.keys(collection[0])); //get this, loop using 0 to get number of keys 
  //console.log(source[targets[0]]); // get this, loop using 0 to check all values
  
  
  // Only change code above this line
  		return arr;
	}
document.getElementById("#output").innerHTML = "<h3 class = 'text-center'>"+
whatIsInAName(
			[{ first: "Romeo", last: "Montague" }, 
				{ first: "Mercutio", last: null }, 
				{ first: "Tybalt", last: "Capulet" }, 
				{ first: "Juliet", last: "Capulet" }],
				{ first: "Juliet", last: "Capulet" }) 
+ "</h3>";
});*/
//Search and Replace

/*function myReplace(str, before, after) {
  var target = str.indexOf(before); //strArr.indexOf(before)
  var length = before.length;
  var newAfter;
  if (before[0] === before[0].toUpperCase()){
  	newAfter = after[0].toUpperCase()+after.slice(1, after.length);
  	console.log(after[0]);
  }
  if (before[0] === before[0].toLowerCase()){
  	newAfter = after[0].toLowerCase()+after.slice(1, after.length);
  }
  strArr = str.split(' ');
  console.log(before[0]);
  strArr.splice(strArr.indexOf(before),1,newAfter);
  newStr = strArr.join(" ");
  console.log(strArr);
  return newStr;
}*/



document.getElementById("#output").innerHTML = "<h3 class = 'text-center'>"
+myReplace("His name is Tom", "Tom", "john") 
+ "</h3>";
});