document.addEventListener("DOMContentLoaded", function() {  
//
function longestConsec (strarr, k){
    var n = strarr.length;
    debugger;
    if(k>n || n===0 || k<=0){
        return "";
    } else{
    var arrLengths = [];
    for (var i=0;i<strarr.length;i++){
        arrLengths.push(strarr[i].length);
    }
    console.log(arrLengths);
    return strarr;
    }
}

document.getElementById("#output").innerHTML = "<h3 class = 'text-center'>"+longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)+"</h3>";
});