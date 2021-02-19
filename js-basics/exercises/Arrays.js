
/**
 * Moving an Element
 */
function move(array, index, offset) {
  const newIndex = index + offset;
  
  if (newIndex < 0 || newIndex >= array.length) {
    console.error('Invalid offset');
    return;
  }

  let output = [...array];
  const element = output.splice(index, 1);
  output.splice(newIndex, 0, element);

  return output;
}
// Test
// let numbers = [1, 2, 3, 4];
// const output = move(numbers, 1, 2);
// console.log(output);

/**
 * Count Occurrences
 */
function countOccurrences(array, searchElement) {
  return array.reduce((accumulator, currentValue) => {
    const occurrence = currentValue === searchElement ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}
// Test
numbers = [1, 2, 3, 4, 1, 1];
console.log(countOccurrences(numbers, 1));

/**
 * Get Max
 */
function getMax(array) {
  if (array.length === 0) return undefined
  return array.reduce((a, b) => a > b ? a : b);
}

/**
 * Movies
 */
function getTheMovie(array) {
  return array.filter(movie => movie.year === 2018 && movie.rating > 4)
    .sort((a, b) => b.rating - a.rating)
    .map(movie => movie.title);
}
// Test
const movies = [
  { title: 'a', year: 2018, rating: 4.5 },
  { title: 'b', year: 2018, rating: 4.7 },
  { title: 'c', year: 2018, rating: 3 },
  { title: 'd', year: 2021, rating: 4.5 },
]
console.log(getTheMovie(movies));