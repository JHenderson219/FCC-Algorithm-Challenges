document.addEventListener("DOMContentLoaded", function() {  
//returns longest set of k consecutive strings in a given array (strarr)
function longestConsec (strarr, k){
    var n = strarr.length;
    var longest=0;
    var targetIndex=0;
    var calcArr=[];
    var calc=0;
    var result;
    if(k>n || n===0 || k<=0){
        return "";
    } else{
    var arrLengths = [];
    for (var i=0;i<strarr.length;i++){
        arrLengths.push(strarr[i].length);
    }
    debugger;
    for (var j=0;j<arrLengths.length;j++){
        calcArr = arrLengths.slice(j,j+k);
        calc = calcArr.reduce(function(a,b){
            return a+b;
        },0);
        if (calc>longest){
            targetIndex = j;
            longest=calc;
        }
    }
    console.log (targetIndex+k-1);
    result = strarr.slice(targetIndex,targetIndex+k)
    result = result.join("");
    return result;
    }
}
function abbreviate(str) {
  var seperators = /[-\s]/;
  var symbols = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/gi;
  var arr = str.split(seperators);
  var symCount= 0;
  var deleteCount=0;
  var wordLength=0;
  var finalArr=[];
  debugger;
  for (var i=0; i<arr.length; i++){
    var symArr = arr[i].match(symbols);
    if (symArr){
    symCount = symArr.length;
    } else{
        symCount = 0;
    }
    wordLength = arr[i].length;
    if(wordLength-symCount>3){
        deleteCount = wordLength-2;
        var wordArr=arr[i].split("");
        var firstLetter= wordArr[0];
        var lastLetter= wordArr[wordArr.length-1];
        var modArr=[firstLetter,deleteCount.toString(),lastLetter];
        finalArr.push(modArr.join(""));
    } else {
        finalArr.push(arr[i]);
    }
  }
  return finalArr.join(" ");
}
document.getElementById("#output").innerHTML = "<h3 class = 'text-center'>"+abbreviate("elephant-rides are really fun!")+"</h3>";
});