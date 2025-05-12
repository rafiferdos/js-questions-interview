// Task 5: Array Reduction
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumOfEvens(numberArray) {
    return numberArray.reduce((accumulator, currentValue) => {
            if (currentValue % 2 === 0) {
                        return accumulator + currentValue;
                                }
                                        return accumulator;
                                            }, 0);
                                            }

                                            const evenSum = sumOfEvens(numbers);
                                            console.log("Original Numbers:", numbers);
                                            console.log("Sum of Even Numbers:", evenSum);
                                            console.log("\n");