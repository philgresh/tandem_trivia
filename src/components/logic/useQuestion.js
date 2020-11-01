import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const useQuestion = (onSubmit, nextQuestion) => {
  const history = useHistory();
  const [selected, setSelected] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [lastQuestion, setLastQuestion] = useState(false);

  const onClick = () => {
    if (submitted) {
      if (lastQuestion) {
        history.push('/results');
      } else {
        setSubmitted(false);
        setSelected('');
        const nextQuestionResponse = nextQuestion();
        setLastQuestion(nextQuestionResponse);
      }
    } else {
      onSubmit(selected);
      setSubmitted(true);
    }
  };

  return { selected, submitted, lastQuestion, setSelected, onClick };
};

export default useQuestion;
