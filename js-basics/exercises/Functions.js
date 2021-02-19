
/**
 * Sum of Arguments
 */
function sum(...numbers) {
  // let nums = numbers;
  // if (Array.isArray(numbers[0])) {
  //   nums = numbers[0];
  // }
  if (numbers.length === 1 && Array.isArray(numbers[0])) {
    numbers = [...numbers[0]];
  }
  return numbers.reduce((accumulator, current) => accumulator + current);
}
// Test
console.log(sum([1, 2, 3]))
console.log(sum(1, 2, 3))

/**
 * Area of Circle
 */
const circle = {
  radius: 1,
  get area() {
    return this.radius * this.radius * Math.PI;
  }
}

/**
 * Error Handling, original code is in Arrays.js: Count Occurrences
 */
function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) {
    throw new Error("Invalid array.");
  }

  return array.reduce((accumulator, currentValue) => {
    const occurrence = currentValue === searchElement ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}
// Test
numbers = [1, 2, 3, 4, 1, 1];
console.log(countOccurrences(numbers, 1));

try {
  console.log(countOccurrences(undefined, 2));
} catch (e) { 
  console.log(e.message);
  alert(e);
}