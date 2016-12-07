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
function gap (g, m, n){
    
}
document.getElementById("#output").innerHTML = "<h3 class = 'text-center'>"+gap(2,100,110)+"</h3>";
});