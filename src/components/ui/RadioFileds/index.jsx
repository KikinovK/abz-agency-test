import styles from './RadioFileds.module.scss';

const RadioFileds = ({ title, options, name, onChange, ...restProps }) => {
  return (
    <div className={styles.radio}>
      <h3 className={styles.radio__title}>{title}</h3>
        <ul className={styles.radio__list}>
          {options.map((option, index) => (
            <li key={option.value} className={styles.radio__item}>
              <input
                id={`${name}_${index}`}
                type="radio"
                name={name}
                value={option.value}
                onChange={() => onChange(option.value)}
                className={styles.radio__input}
                {...restProps}
              />
              <label
                htmlFor={`${name}_${index}`}
                className={styles.radio__label}
              >
                {option.label}
              </label>
            </li>
          ))}
        </ul>
    </div>
  );
};


export default RadioFileds;
