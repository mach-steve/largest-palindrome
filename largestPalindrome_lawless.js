// TODO: Given a positive integer value "N", return the largest numeric palindrome (if one exists) 
//  that can be produced by multiplying two N-digit numbers, else return 0 (if one doesn't exist)
// EXAMPLE: N=2, output should be 9009 (91*99)
// NOTE: Assume all inputs are valid (0 < N < 8)

// Directions:
//  1. Rename this file, substituting "yourname" with your name
//  2. Replace "yourname" with your name in the variable below
exports.name = "lawless";
//  3. Add optimizations to the solution below
//  4. Upload your optimized solution 


isPalindrome = (num) => {
    // determine if input value matches it's reversed value (i.e. check if it's a palindrome!)
    // strNum = num.toString();
    return num == num.toString().split("").reverse().join("");
}


exports.getLargestPalindrome = (N) => {

    let largestPalindrome = 0;
    let start = 10 ** (N - 1);
    let end = 10 ** N - 1;
    let current = start;
    
    
    // iterate through range of multiplicands
    while (current <= end) {
        for (let i = current; i <= end; i++) {
            let multiplied = i * current
            if (isPalindrome(multiplied) && (multiplied) > largestPalindrome) {
                largestPalindrome = multiplied
            }
        }
        current++
    }



    // console.log(largestPalindrome)
    return largestPalindrome;
}

// input
const N = 4;

// CHALLENGE: Can you optimize the algorithm above so that works for input values N=4, N=5, N=6 
//  in a "reasonable" amount of time?

// execution
console.time(exports.name)
exports.getLargestPalindrome(N)
console.timeEnd(exports.name)
