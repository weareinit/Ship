/*********************************************** */
//TESTING STATUS: not tested
/*********************************************** */

/**
 * returns an array sorted by time
 * @param {Array} array
 */
const sortByTime = array => {
  let newArr = array.sort((a, b) =>
    a.startTime > b.startTime
      ? 1
      : a.startTime === b.startTime
      ? a.startTime > b.startTime
        ? 1
        : -1
      : -1
  );
  return newArr;
};

/**
 * return an object of segragated period arrays
 * @param {Array} array
 */
const sortByCurrentTime = array => {
  let upcoming = [];
  let current = [];
  let past = [];

  let date = new Date();
  let timestamp = date.getTime();

  array.forEach(element => {
    if (element.startTime > timestamp) upcoming.push(element);
    else if (element.startTime <= timestamp && element.endTime > timestamp)
      current.push(element);
    else past.push(element);
  });

  return { upcoming, past, present };
};

/**
 *returns an array of given category
 *sorted by time
 * @param {Array} array
 */
const sortByCategory = (array, category) => {
  let newArr = [];

  array.forEach(element => {
    if (element.category.toLowerCase() === category.toLowerCase())
      newArr.push(element);
  });
  return sortByTime(newArr);
};

export { sortByTime, sortByCategory };
