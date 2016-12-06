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
    var arr = str.toLowerCase().split("");
    var symbols = /[-!$%#^&*()_+|~=`{}\[\]:";'<>?,.\/]/g;
    var numbers = /[\d]/g;
    var vowels = /[aeiou]/g;
    var codeArr = [];
    debugger;
    for (var i = 0; i<arr.length; i++){
        if (symbols.test(arr[i]) || numbers.test(arr[i])){
            codeArr.push(arr[i]);
        } else {
            var mod = arr[i].charCodeAt()+1;
            codeArr.push(mod);
        }
    }
    var convertArr = codeArr.map(function(ind){
        return String.fromCharCode(ind);
    });
    for (var j=0;j<convertArr.length;j++){
        if (convertArr[j]==vowels){
            convertArr[j].toUpperCase();
        }
    }
    var newStr = convertArr.join("");
return newStr;
}




document.getElementById("#output").innerHTML = "<h3 class = 'text-center'>"+LetterChanges("hello*3z")+"</h3>";
});