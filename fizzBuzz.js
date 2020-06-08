const fizzBuzz = (i) => {
    if (i % 15 === 0) {
        return "FIZZBUZZ";
    } else if (i % 3 === 0) {
        return "FIZZ";
    } else if (i % 5 === 0) {
        return "BUZZ";
    } else {
        return i
    } 
}

module.exports = fizzBuzz;