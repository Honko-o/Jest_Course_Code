function theSum(...numbers) {
    return numbers.reduce((acc, currentVal) => acc + currentVal, 0);
}

module.exports = theSum;
