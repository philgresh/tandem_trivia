/* eslint-disable no-param-reassign */

/**
 * Shuffles an array in-place
 * @param {Any} array Any array of elements
 * @returns {Array} The shuffled array
 * @link https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 */
export const shuffleBang = (array) => {
  const arrLength = array.length;
  if (arrLength <= 1) return array;

  for (let i = arrLength - 1; i >= 1; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

/**
 * Returns an array of shuffled elements
 * @param {Any} array Any array of elements
 * @returns {Array} A new shuffled array
 */
export const shuffle = (array) => {
  const arrLength = array.length;
  if (arrLength <= 1) return array;

  const newArr = array.slice();
  shuffleBang(newArr);

  return newArr;
};

/**
 *
 * @param {Object} question A question object
 * @param {String[]} question.incorrect An array of incorrect answers
 * @param {String} question.correct The correct answer
 * @returns {String[]} A shuffled array of answers
 * @example addCorrectToAnswers({incorrect: ["M", "Z", "X"], correct: "Q"})
 * // returns ["Z", "Q", "M", "X"]
 */
export const addCorrectToAnswers = ({ incorrect, correct }) => {
  const answers = [...incorrect, correct];
  return shuffleBang(answers);
};
