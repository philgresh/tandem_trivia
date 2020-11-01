import { useState } from 'react';

const useQuestion = (onSubmit, nextQuestion) => {
  const [selected, setSelected] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [lastQuestion, setLastQuestion] = useState(false);

  const onClick = () => {
    if (submitted) {
      nextQuestion();
      setSubmitted(false);
    } else {
      onSubmit(selected);
      setSubmitted(true);
    }
  };

  return { selected, submitted, setSelected, onClick };
};

export default useQuestion;
