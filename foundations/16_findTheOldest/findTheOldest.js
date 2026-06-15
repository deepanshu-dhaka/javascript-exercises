const findTheOldest = function (people) {
    let max = 0;
    return people.reduce(function (acc, curr) {
        if (!curr.yearOfDeath) {
            const d = new Date();
            yearOfDeath = d.getFullYear();
            age = yearOfDeath - curr.yearOfBirth;

        } else age = curr.yearOfDeath - curr.yearOfBirth;
        if (max < age) {
            max = age;
            acc = curr;
        }
        return acc;
    }, 0)
};

// Do not edit below this line
module.exports = findTheOldest;
