const getTheTitles = function(arr) {
    let rtnArr = []
    arr.forEach((item) => {
        rtnArr.push(item.title);
    });
    return rtnArr;
};

// Do not edit below this line
module.exports = getTheTitles;
