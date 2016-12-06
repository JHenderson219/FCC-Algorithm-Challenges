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
            mod = String.fromCharCode(mod);

            if (vowels.test(mod)){
                mod.toUpperCase();
            }

            codeArr.push(String.fromCharCode(mod));
        }
    }

return codeArr.join("");
}




document.getElementById("#output").innerHTML = "<h3 class = 'text-center'>"+LetterChanges("hello*3z")+"</h3>";
});