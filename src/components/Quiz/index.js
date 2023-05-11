/**
 * Use this component to create quiz
 */
import React, {useState} from 'react';

import styles from './styles.module.css';
import RadioIcon from '../RadioIcon';
import CheckIcon from '../CheckIcon';
import CancelIcon from '../CancelIcon';

export default ({question, name, answer, answers, choices}) => {
  const isMultipleChoice = Array.isArray(answers);
  const [isComplete, setIsComplete] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [chosen, setChosen] = useState([]);

  const onChange = (e) => {
    if (isMultipleChoice) {
      const uniqueItems = [...new Set([...chosen, e.target.value])];

      setChosen(uniqueItems);
      setStatus(uniqueItems);
    } else {
      setChosen([e.target.value]);
      setStatus(e.target.value);
    }
  };

  const noBorder = (index) =>
    choices.length % 2 === 0 && index + 2 === choices.length;

  const getIcon = (option) => {
    const matchAnswer = isMultipleChoice
      ? answers.includes(option)
      : option === answer;
    const matchChosen = isMultipleChoice
      ? Boolean(chosen.find((item) => option === item))
      : option === chosen[0];

    if (isComplete && matchAnswer) {
      return <CheckIcon isCorrect />;
    }

    if (isComplete && !isCorrect && matchChosen) {
      return <CancelIcon />;
    } else if (isMultipleChoice && matchChosen) {
      return <CheckIcon />;
    }

    return (
      <>
        <input
          type="radio"
          id={option}
          name={name}
          value={option}
          onChange={onChange}
          disabled={isComplete}
        />
        <RadioIcon className={styles.input} />
      </>
    );
  };

  const setStatus = (value) => {
    const selectedItems = value ?? chosen;

    if (isMultipleChoice) {
      for (let i = 0, j = selectedItems.length; i < j; i++) {
        const item = selectedItems[i];

        if (!answers.includes(item)) {
          setIsComplete(true);
          setIsCorrect(false);
          break;
        }

        if (i + 1 === j) {
          if (j === answers.length) {
            setIsComplete(true);
            setIsCorrect(true);
          } else {
            setIsComplete(false);
          }
        }
      }
    } else {
      setIsComplete(true);
      setIsCorrect(selectedItems === answer);
    }
  };

  const onReset = () => {
    setIsComplete(false);
    setIsCorrect(false);
    setChosen([]);
  };

  return (
    <form
      className={`${styles.form} ${
        isComplete ? (isCorrect ? styles.success : styles.failed) : ''
      }`}>
      <p className={styles.question}>
        {question}
        {isMultipleChoice ? <small>Choose multiple</small> : null}
      </p>
      {isComplete ? (
        <button
          className={`${styles.info} ${styles.action}`}
          type="button"
          onClick={onReset}>
          Reset
        </button>
      ) : (
        <small className={styles.info}>
          {isMultipleChoice ? 'Multiple' : 'Single'}
        </small>
      )}
      <div className={styles.choices}>
        {choices.map((choice, index) => (
          <div
            key={choice}
            className={`${styles.choice} ${
              noBorder(index) ? styles.noBorderBottom : ''
            }`}>
            {getIcon(choice)}
            <label htmlFor={choice}>{choice}</label>
          </div>
        ))}
      </div>
    </form>
  );
};
