const getTheTitles = function (books) {
    let newBooks = books.map(function (item) {
        return item.title;
    })
    return newBooks;
};

// Do not edit below this line
module.exports = getTheTitles;
