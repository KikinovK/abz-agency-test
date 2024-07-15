import React, { useEffect, useState, useRef } from 'react';

import styles from './InputFiled.module.scss';

const InputFiled = ({
  label,
  helptext,
  errortext,
  onInput,
  ...restProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(false);
    onInput(value);
  }
  return (
    <div className={styles.filed}>
      <div className={`${styles.filed__wrapper} ${errortext ? styles['filed__wrapper--error'] : ''}`}>
        <input
          type="text"
          className={styles.filed__input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(e) => { setValue(e.target.value) }}
          value={value}
          {...restProps}
        />
        <label
          className={`
            ${styles.filed__label}
            ${isFocused || value ? styles['filed__label--shrink'] : ''}
            ${errortext ? styles['filed__label--error'] : ''}`
          }
        >
          {label}
        </label>
      </div>
      {helptext && !errortext && <div className={styles.filed__helptext}>{helptext}</div>}
      {errortext && <div className={styles.filed__errortext}>{errortext}</div>}
    </div>
  );
};

export default InputFiled;
