const removeFromArray = function (arr, ...num) {
    new_arr = arr.filter((item) => !num.includes(item))
    return new_arr;
};

// Do not edit below this line
module.exports = removeFromArray;
