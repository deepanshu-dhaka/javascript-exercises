const palindromes = function (str) {
    let new_str = str.replaceAll(" ", "").replaceAll(",", "").replaceAll(".", "").replaceAll("!", "").toLowerCase();
    let reversedStr = new_str.split('').reverse().join('').toLowerCase();

    console.log(reversedStr);
    console.log(new_str)

    if (new_str === reversedStr) {
        return true
    }
    else return false;

};

// Do not edit below this line
module.exports = palindromes;
