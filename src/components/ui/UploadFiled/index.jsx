import React, { useEffect, useState, useRef } from 'react';

import styles from './UploadFiled.module.scss';

const UploadFiled = ({
  buttonLabel='Upload',
  id='upload',
  errortext,
  onChange,
  ...restProps
}) => {
  const [fileName, setFileName] = useState('Upload your photo');
  const [isLoader, setIsloader] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file.name);
    setIsloader(true);
    onChange(file);
  }

  return (
    <div className={styles.upload}>
      <div className={styles.upload__wrap}>
        <input
          type="file"
          id={id}
          className={styles.upload__input}
          onChange={handleFileChange}
          {...restProps}
        />
        <label
          className={`${styles.upload__button} ${errortext ? styles['upload__button--error'] : ''}`}
          htmlFor={restProps.id ? restProps.id : id}
        >
          {buttonLabel}
        </label>
        <div className={`${styles.upload__info} ${isLoader ? styles['upload__info--pre'] : ''} ${errortext ? styles['upload__info--error'] : ''}`}>
          {fileName}
        </div>
      </div>
      {errortext && <div className={styles.upload__errortext}>{errortext}</div>}
    </div>
  );
};

export default UploadFiled;
