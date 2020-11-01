/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from './Button';

// |           Scenario           | selected | submitted || disabled |            text            |
// |:----------------------------:|:--------:|:---------:||:--------:|:--------------------------:|
// | Initial                      |   false  |   false   ||   true   | Choose the correct answer! |
// | Ready to submit              |   true   |   false   ||   false  |           Submit!          |
// | Submitted, received feedback |   false  |    true   ||   false  |       Next question!       |
// | After last question          |   false  |    true   ||   false  |        See results!
// |   (lastQuestion = true)      |          |           ||          |

const getButtonAttrs = ({ selected, submitted, lastQuestion }) => {
  let disabled = true;
  let text = 'Choose the correct answer!';
  if (selected) return { disabled: false, text: 'Submit!' };

  if (submitted) {
    disabled = false;
    if (lastQuestion) {
      text = 'See results!';
    } else text = 'Next question!';
  }

  return { disabled, text };
};

const GuessButton = ({ selected, submitted, lastQuestion, onSubmit }) => {
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
      onClick={onSubmit}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

GuessButton.propTypes = {
  onSubmit: PropTypes.func.isRequired,
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
