/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from './Button';

export const TEXT_INITIAL = 'Choose the correct answer!';
export const TEXT_READY_TO_SUBMIT = 'Submit!';
export const TEXT_SUBMITTED = 'Next question!';
export const TEXT_AFTER_LAST_QUESTION = 'See results!';

// |           Scenario           | selected | submitted || disabled |            text            |
// |:----------------------------:|:--------:|:---------:||:--------:|:--------------------------:|
// | Initial                      |   false  |   false   ||   true   | Choose the correct answer! |
// | Ready to submit              |   true   |   false   ||   false  |           Submit!          |
// | Submitted, received feedback |   true   |    true   ||   false  |       Next question!       |
// | After last question          |   true   |    true   ||   false  |        See results!
// |   (lastQuestion = true)      |          |           ||          |

export const getButtonAttrs = ({ selected, submitted, lastQuestion }) => {
  let disabled = true;
  let text = TEXT_INITIAL;
  if (!selected) return { disabled, text };

  disabled = false;
  if (submitted) {
    if (lastQuestion) {
      text = TEXT_AFTER_LAST_QUESTION;
    } else text = TEXT_SUBMITTED;
  } else text = TEXT_READY_TO_SUBMIT;

  return { disabled, text };
};

const GuessButton = ({ selected, submitted, lastQuestion, onClick }) => {
  const classes = clsx(
    'guess-button',
    submitted && 'submitted',
    lastQuestion && 'last-question',
  );
  const { text, disabled } = getButtonAttrs({
    selected,
    submitted,
    lastQuestion,
  });
  return (
    <Button
      dataTestId="guess-button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

GuessButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  submitted: PropTypes.bool,
  lastQuestion: PropTypes.bool,
  selected: PropTypes.bool,
};

GuessButton.defaultProps = {
  submitted: false,
  lastQuestion: false,
  selected: false,
};

export default GuessButton;
