const palindromes = function (str) {
    str = Array.from(str.toLowerCase());
    let regex = /[a-z1-9]/;
    function isLetter(char){
        if(regex.test(char)) return char;
    }
    let strArr = str.filter(isLetter);
    let arrStack = [];
    let tempArr = [];
    // use push() and pop() array methods to make array behave like a stack
    for(let i = 0; i < strArr.length; ++i){
        if(i < Math.floor(strArr.length/2)){
            arrStack.push(strArr[i]);
        } else if(i >= Math.ceil(strArr.length/2)){
            if(arrStack.pop() != strArr[i]){
                
                return false;
            }
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
