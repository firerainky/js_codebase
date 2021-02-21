
/**
 * Stopwatch
 */
function Stopwatch() {
  let timePassed = 0;
  Object.defineProperty(this, 'duration', {
    get: function() {
      return timePassed;
    }
  });

  let date;

  this.start = function() {
    if (date !== undefined) {
      throw new Error('Stopwatch has already started.');
    }
    date = new Date();
  }

  this.stop = function() {
    if (date === undefined) {
      throw new Error('Stopwatch is not started.');
    }
    const stopDate = new Date()
    timePassed = (stopDate - date) / 1000;
  }

  this.reset = function() {
    timePassed = 0;
    date = undefined;
  }
}