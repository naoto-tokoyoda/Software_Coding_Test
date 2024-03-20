function StrToNum(s) {

    // Avoid invalid input
    if(typeof s != "string"){
        console.log("Input should be string");
        throw new Error();
    };
    

    // Map each Alien numeral character to its integer value
    const values = {A: 1, B: 5, Z: 10, L: 50, C: 100, D: 500, R: 1000};
    
    // Define special cases for subtraction rules where one numeral is placed before another to represent a different value
    const specialCases = {"AB": 4, "AZ": 9, "ZL": 40, "ZC": 90, "CD": 400, "CR": 900};
    
    // Initialize total to accumulate the numeric value of the numeral string
    let total = 0;
    // Initialize index variable for iterating through the string
    let i = 0;
    
    // Loop through the string until all characters are processed
    while (i < s.length) {
        // Check if the current and the next character form a special case
        if (i + 1 < s.length && specialCases[s[i] + s[i + 1]]) {
            // Add the value of the special case to the total
            total += specialCases[s[i] + s[i + 1]];
            // Increment the index by 2 to skip the next character, as it's already processed as part of a special case
            i += 2;
        } else {
            // If no special case, add the value of the current numeral to the total
            total += values[s[i]];
            // Increment the index by 1 to move to the next character
            i++;
        }
    }
    
    // Return the total value of the numeral string
    return total;
}

// Example usage of the function
console.log(StrToNum("AAA")); // Should output 3: Explained by adding three A's (1+1+1)
console.log(StrToNum("LBAAA")); // Should output 58: L (50) + B (5) + three A's (3)
console.log(StrToNum("RCRZCAB")); // Should output 1994: R (1000) + CR (900) + ZC (90) + AB (4)
