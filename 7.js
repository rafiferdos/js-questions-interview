// Task 7: Unique Values
const duplicateNumbers = [1, 5, 2, 8, 5, 1, 9, 4, 2, 10];

function getUniqueNumbers(numberArray) {
    return [...new Set(numberArray)];
    }

    const uniqueNumbers = getUniqueNumbers(duplicateNumbers);
    console.log("Original Numbers with Duplicates:", duplicateNumbers);
    console.log("Unique Numbers:", uniqueNumbers);
console.log("\n");