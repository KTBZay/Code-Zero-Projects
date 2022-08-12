const czerror = function (message) {
    var error = new Error(message);

    throw error;
}

module.exports = {
    czerror
}