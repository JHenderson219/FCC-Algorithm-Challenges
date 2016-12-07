document.addEventListener("DOMContentLoaded", function() {  
//Factorializes a number
function factorialize(num){
    debugger;
    if (num===0){
        return 1;
    } else{
        return num * factorialize(num-1);
    }
}

//Finds longest word in a string
function longestWord (sen){
    var currentLongest = "";
    var currentLength = 0;
    var punc = /[-!$%#^&*()_+|~=`{}\[\]:";'<>?,.\/]/gi;
    var arr = sen.split(" ");
    var noPuncArr = [];
    for (var i = 0; i<arr.length;i++){
        noPuncArr.push(arr[i].replace(punc,""));
    }
    for (var j=0; j<noPuncArr.length-1;j++){
        if (noPuncArr[j].length>currentLength){
            currentLongest=noPuncArr[j];
            currentLength=noPuncArr[j].length;
        }
    }
    return currentLongest;
}
//Shifts letters by one place, ignoring symbols and space. Then, capitalizes new vowels.
function LetterChanges (str){
    var arr = str.toLowerCase().split("");
    var symbols = /[-!\s$%#^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
    var numbers = /[\d]/;
    var vowels = /[aeiou]/;
    var codeArr = [];
    debugger;
    for (var i = 0; i<arr.length; i++){
        if (symbols.test(arr[i]) || numbers.test(arr[i])){
            codeArr.push(arr[i]);
        } else {
            var mod = arr[i].charCodeAt()+1;
            mod = String.fromCharCode(mod);
            if (mod === "{"){
                mod = "A";
            } else if (vowels.test(mod)){
              mod = mod.toUpperCase();
            }
            codeArr.push(mod);
        }
    }
return codeArr.join("");
}
//Adds all numbers from 1 to given number (max 1000).
function SimpleAdding (num){
    if (num === 1){
        return 1;
    } else {
        return num + SimpleAdding(num-1);
    }
}
//Capitalizes first letters of each word
function LetterCapitalize (str){
    var arr = str.split(" ");
    var finalArr = [];
    for (var i=0; i<arr.length;i++){
        var splitWord = arr[i].split("");
        splitWord[0] = splitWord[0].toUpperCase();
        finalArr.push(splitWord.join(""));
    }
    return finalArr.join(" ");
}

function SimpleSymbols (str){
    debugger;
    var letters = /[a-zA-Z]/;
    var arr = str.split("");
    for (var i=0;i<arr.length;i++){
        var targetIndex;
        var targetArr;
        var isValid;
        if (letters.test(arr[i])){
            targetIndex = i;
            if (targetIndex==0){
                return "false";
            }
            targetArr = arr.splice(i-1,i+2); //add something for edge case when letter is index 0
            if (targetArr[0]!="+"||targetArr[2]!="+"){
                return "false";
            }
        }
    }
    return "true";
}
//Checks if num2 > num 1; returns -1 if equal
function CheckNums(num1,num2){
    if (num1<num2){
        return "true";
    } else if (num1=num2){
        return "-1";
    } else{
        return "false";
    }
}
//Converts minutes to hours and minutes
function TimeConvert (num){
    var hours = 0;
    var minutes = 0;
    while (num>0){
        if (num>=60){
            hours++;
            num -= 60;
        } else {
            minutes++;
            num--;
        }
    }

    return hours+":"+minutes;
}
//Alphabetizes a string
function AlphabetSoup (str){
var arr = str.split("")
var codeArr = arr.map(function(val){
    return val.charCodeAt();
    });
codeArr = codeArr.sort(function(a,b){
     return a-b;
    });
var finalArr = codeArr.map(function(ind){
    return String.fromCharCode(ind);
    });
return finalArr.join("")
}

//
function ABCheck(str){

}

document.getElementById("#output").innerHTML = "<h3 class = 'text-center'>"+ABCheck("coderbyte")+"</h3>";
});