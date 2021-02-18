
/**
 * FizzBuzz
 * Not a number => NaN
 * Divided by 3 => Fizz
 * Divided by 5 => Buzz
 * Divided by both 3 and 5 => FizzBuzz
 * Others => number itself, 7 => 7
 */
function fizzBuzz(input) {
  if (typeof input !== 'number') {
    return NaN;
  }

  const fizz = input % 3 === 0;
  const buzz = input % 5 === 0;

  let ret = fizz ? 'Fizz' : '';
  ret += buzz ? 'Buzz' : '';

  if (ret === '') {
    return input;
  }

  return ret;
}

/**
 *Demerit Points
 * Speed Limit 70
 * 1 point per 5km
 * Above 12 points, licence suspended 
 */
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log("OK");
    return;
  }

  const points = Math.floor((speed - speedLimit) / 5);
  if (points >= 12) {
    console.log('License Suspended.');
  } else {
    console.log('Points', points);
  }
}

/**
 * Count truthy
 */
function countTruthy(array) {
  let count = 0;
  for (const item of array) {
    if (item) {
      count += 1;
    }
  }
  return count;
}

/**
 * String Properties
 */
function showProperties(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      console.log(key, obj[key])
    }
  }
}

// Test
const obj = {
  title: 'a',
  releaseYear: 2018,
  rating: 4.5,
  director: 'b'
}
showProperties(obj)

/**
 *Prime Numbers
 * Show prime numbers under limit 
 */
function showPrimes(limit) {
  if (limit < 2) return;

  let primes = [2];

  for (let number = 3; number <= limit; number++) {
    let isPrime = true;
    for (const prime of primes) {
      if (number % prime === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(number)
    }
  }

  for (const prime of primes) {
    console.log(prime)
  }
}

// Another algorithm
function showPrimes2(limit) {
  for (let number = 2; number <= limit; number++) {
    if (isPrime(number)) {
      console.log(number)
    }
  }
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) {
      return false;
    }
  }
  return true;
}