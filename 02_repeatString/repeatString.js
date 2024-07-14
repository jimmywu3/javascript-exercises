const repeatString = function(str, numRepeat) {
    if(numRepeat < 0) return "ERROR";
    let returnString = "";
    for(let i = 0; i < numRepeat; ++i){
        returnString = returnString.concat(str);
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
