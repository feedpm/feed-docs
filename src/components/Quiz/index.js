/* eslint-disable no-nested-ternary */
/* eslint-disable header/header */
import React, {useState} from 'react';

import styles from './styles.module.css';
import RadioIcon from '../RadioIcon';
import CheckIcon from '../CheckIcon';
import CancelIcon from '../CancelIcon';

export default ({question, name, answer, options}) => {
  const [disabled, setdisabled] = useState(false);
  const [choosen, setChoosen] = useState();

  const onChange = e => {
    setChoosen(e.target.value);
    setdisabled(true);
  };

  const noborder = index =>
    options.length % 2 === 0 && index + 2 === options.length;

  const getIcon = option => {
    if (disabled && option === answer) return <CheckIcon />;

    if (disabled && option === choosen) return <CancelIcon />;

    return (
      <>
        <input
          type="radio"
          id={option}
          name={name}
          value={option}
          onChange={onChange}
          disabled={disabled}
        />
        <RadioIcon className={styles.input} />
      </>
    );
  };

  return (
    <form
      className={`${styles.form} ${
        disabled ? (choosen === answer ? styles.success : styles.failed) : ''
      }`}>
      <p className={styles.question}>{question}</p>
      <div className={styles.options}>
        {options.map((option, index) => (
          <div
            key={option}
            className={`${styles.option} ${
              noborder(index) ? styles.noBorderBottom : ''
            }`}>
            {getIcon(option)}
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
    </form>
  );
};
