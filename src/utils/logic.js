/* eslint-disable no-param-reassign */

/**
 * Returns an array of shuffled elements
 * @param {Any} array Any array of elements
 * @returns {Array} A new shuffled array
 */
export const shuffle = (array) => {
  const arrLength = array.length;
  if (arrLength <= 1) return array;

  const newArr = array.slice();
  for (let i = arrLength - 1; i >= 1; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = newArr[i];
    newArr[i] = newArr[j];
    newArr[j] = temp;
  }

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
  return shuffle(answers);
};
