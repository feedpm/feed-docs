/**
 * Use this component to create quiz
 */
import React, {useState, useMemo} from 'react';

import styles from './styles.module.css';
import RadioIcon from '../RadioIcon';
import CheckIcon from '../CheckIcon';
import CancelIcon from '../CancelIcon';

const Icon = ({
  name,
  answer,
  answers,
  isMultipleChoice,
  selection,
  isComplete,
  isCorrect,
  item,
  onChange,
}) => {
  const matchAnswer = isMultipleChoice
    ? answers.includes(item)
    : item === answer;

  const matchSelection = selection.includes(item);

  if (isComplete) {
    if (matchAnswer) {
      return <CheckIcon isCorrect />;
    } else if (!isCorrect && matchSelection) {
      return <CancelIcon />;
    }
  }

  if (matchSelection) {
    return <CheckIcon />;
  }

  return (
    <>
      <input
        type="radio"
        id={item}
        name={name}
        value={item}
        onChange={onChange}
        disabled={isComplete}
      />
      <RadioIcon className={styles.input} />
    </>
  );
};

const Quiz = ({question, name, answer, answers, choices}) => {
  const isMultipleChoice = Array.isArray(answers);
  const [userSelection, setUserSelection] = useState([]);

  const [isComplete, isCorrect] = useMemo(() => {
    const hasSelection = userSelection.length;
    const allSelected =
      isMultipleChoice && userSelection.length === answers.length;

    let isComplete = false;
    let isCorrect = false;

    if (hasSelection) {
      const allMatched = userSelection.every((item) => answers?.includes(item));

      isComplete = isMultipleChoice
        ? (allSelected && allMatched) || !allMatched
        : true;

      if (isComplete) {
        isCorrect = isMultipleChoice ? allMatched : userSelection[0] === answer;
      }
    }

    return [isComplete, isCorrect];
  }, [answers, answer, userSelection]);

  const onChange = (e) => {
    if (isMultipleChoice) {
      const uniqueItems = [...new Set([...userSelection, e.target.value])];

      console.log(uniqueItems);

      setUserSelection(uniqueItems);
    } else {
      setUserSelection([e.target.value]);
    }
  };

  const onReset = () => {
    setUserSelection([]);
  };

  const noBorder = (index) =>
    choices.length % 2 === 0 && index + 2 === choices.length;

  return (
    <form
      className={`${styles.form} ${
        isComplete ? (isCorrect ? styles.success : styles.failed) : ''
      }`}>
      <header className={styles.header}>
        <p className={styles.question}>{question}</p>
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
      </header>
      <div className={styles.choices}>
        {choices.map((choice, index) => (
          <div
            key={choice}
            className={`${styles.choice} ${
              noBorder(index) ? styles.noBorderBottom : ''
            }`}>
            <Icon
              name={name}
              answer={answer}
              answers={answers}
              isMultipleChoice={isMultipleChoice}
              selection={userSelection}
              isComplete={isComplete}
              isCorrect={isCorrect}
              item={choice}
              onChange={onChange}
            />
            <label htmlFor={choice}>{choice}</label>
          </div>
        ))}
      </div>
    </form>
  );
};

export default Quiz;
