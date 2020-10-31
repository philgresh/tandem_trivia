import { useState } from 'react';

const useQuestion = (_onSubmit, _nextQuestion) => {
  const [selected, setSelected] = useState('');

  const submit = () => {
    // console.log('submitting', selected);
  };

  return { selected, setSelected, submit };
};

export default useQuestion;
