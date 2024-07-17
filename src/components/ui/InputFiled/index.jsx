import { useState } from 'react';

import styles from './InputFiled.module.scss';

const InputFiled = ({
  id,
  label,
  helptext,
  errortext,
  onBlur,
  onChange,
  ...restProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  const handleFocus = () => setIsFocused(true);
  const handleChange = (e) => {
    setValue(e.target.value);
    onChange(e);
  }
  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur(e);
  }
  return (
    <div className={styles.filed}>
      <div className={`${styles.filed__wrapper} ${errortext ? styles['filed__wrapper--error'] : ''}`}>
        <input
          id={id}
          type="text"
          className={styles.filed__input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          value={value}
          {...restProps}
        />
        <label
          htmlFor={id}
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
