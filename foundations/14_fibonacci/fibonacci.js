const fibonacci = function (num) {
    if (num === 0 || num === 1) {
        return num;
    }
    else if (num < 0) {
        return "OOPS"
    }
    else if (typeof num === "string") {
        Number(num);
    }
    let a = 0;
    let b = 1;
    for (let i = 0; i < num; i++) {
        let c = a + b;
        a = b;
        b = c;

    }
    return a;
};

// Do not edit below this line
module.exports = fibonacci;
