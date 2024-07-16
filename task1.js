function findMax(numbers) {
  if (numbers.length === 0) {
    return null;
  }

  let maxNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }
  
  return maxNumber;
}

// Example usage:
const nums = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log(findMax(nums)); // Output: 9

const emptyArray = [];
console.log(findMax(emptyArray)); // Output: null
