const findTheOldest = function(arr) {
    let rtn = arr.reduce((currentOldest, currentPerson) => {
        if(currentOldest.yearOfDeath === undefined || currentPerson.yearOfDeath === undefined){
            console.log(currentOldest.name+"hi");
            return (currentOldest.yearOfBirth > currentPerson.yearOfBirth)?  currentPerson : currentOldest ;
        } else {
            let currentOldestAge = currentOldest.yearOfDeath - currentOldest.yearOfBirth;
            let currentPersonAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
            if(currentPersonAge > currentOldestAge) currentOldest = currentPerson;
            return currentOldest;
        }
    });
    return rtn;
};

// Do not edit below this line
module.exports = findTheOldest;
