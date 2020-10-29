import devQuestions from '../data/questions.json';
import { shuffle, addCorrectToAnswers } from './logic';

const isDev = process.env.NODE_ENV !== 'production';

/**
 * Returns the question object of a given ID.
 * @param {Number} id The unique ID of a question.
 * @returns {Object} A question object
 */
export const fetchQuestion = (id) => {
  const questions = devQuestions;
  if (!isDev) {
    // Call remote API, reassign questions
  }
  const thisQuestion = questions[id];

  return { ...thisQuestion, id };
};

/**
 * Retrieves a number of random questions from the trivia database.
 * If in development/test mode, database is ```src/data/questions.json```.
 * @async
 * @param {Number} [num] Number of elements to retrieve (default 10)
 * @returns {Object[]} Array of length ```num``` questions with answers added.
 */
export const fetchQuestions = async (num = 10) => {
  const questions = devQuestions;
  if (!isDev) {
    // Call remote API, reassign questions
  }
  const questionsWithId = questions.map((q, i) => ({ ...q, id: i }));
  const shuffledQuestions = shuffle(questionsWithId);
  const questionsWithAnswersAdded = shuffledQuestions.map((q) => {
    const answers = addCorrectToAnswers(q);
    return { ...q, answers };
  });
  return new Promise((resolve) =>
    resolve(questionsWithAnswersAdded.slice(num)),
  );
};
