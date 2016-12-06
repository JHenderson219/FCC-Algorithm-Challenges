document.addEventListener("DOMContentLoaded", function() {  
//Factorializes a number
/*function factorialize(num){
    debugger;
    if (num===0){
        return 1;
    } else{
        return num * factorialize(num-1);
    }
}*/
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

function LetterChanges (str){
    var arr = str.split("");
    var symbols = /[-!$%#^&*()_+|~=`{}\[\]:";'<>?,.\/]/gi;
    var numbers = /\d/gi;
    var codeArr = [];
    for (var i = 0; i<arr.length-1; i++){
        if (arr[i]===symbols){
            codeArr.push(arr[i]);
        } else if (arr[i] !== numbers) {
        codeArr.push(arr[i].charCodeAt());
        }
    }
    console.log (codeArr);
    codeArr=codeArr.map(function(ind){
        return ind+1;
    });
    console.log (codeArr);

return str;
}




document.getElementById("#output").innerHTML = "<h3 class = 'text-center'>"+LetterChanges("hello*3")+"</h3>";
});