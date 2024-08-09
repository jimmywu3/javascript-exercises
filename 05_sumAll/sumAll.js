const sumAll = function(num1, num2) {
    if(num1 < 0 || num2 < 0) return "ERROR";
    if(typeof num1 != "number" || typeof num2 != "number") return "ERROR";
    return ((Math.abs(num1 - num2)+1) * (num1 + num2)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
