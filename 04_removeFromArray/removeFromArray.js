const removeFromArray = function(arr, ...args) {
    let newArr = [];
    let flag = false;
    for(let i = 0; i < arr.length; i++){
        for(const arg of args){
            if(arr[i] == arg && typeof arr[i] == typeof arg) flag = true;
        }
        if(!flag) newArr.push(arr[i])
        flag = false;
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
