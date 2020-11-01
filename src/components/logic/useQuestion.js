import { useState } from 'react';

const useQuestion = (onSubmit, nextQuestion) => {
  const [selected, setSelected] = useState('');
  const [lastQuestion, setLastQuestion] = useState(false);

  const submit = () => {
    // console.log('submitting', selected);
  };

  return { selected, setSelected, submit };
};

export default useQuestion;
