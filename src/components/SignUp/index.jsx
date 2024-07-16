import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';

import Container from 'src/components/ui/Container';
import Button from 'src/components/ui/Button';
import InputFiled from 'src/components/ui/InputFiled';
import TitleSection from 'src/components/ui/TitleSection';
import RadioFileds from 'src/components/ui/RadioFileds';
import UploadFiled from 'src/components/ui/UploadFiled';

import Preloader from '../Preloader';

import validationSchema from 'src/validation/validationSchemaSignUp'

import { BASE_URL } from 'src/constants';

import styles from './SignUp.module.scss';

const SignUp = () => {
  const [positionOptions , setPositionOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}positions`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();

      setPositionOptions(result.positions.map(item => ({
        label: item.name,
        value: item.id.toString()
      })));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      position_id: 0,
      photo: null
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    // Check if form has been auto-filled
    const formFields = ['name', 'email', 'phone'];
    formFields.forEach(field => {
      if (formik.values[field]) {
        formik.setFieldTouched(field, true, false);
      }
    });
  }, [formik.values]);

  return (
    <section className={styles.sign_up}>
      <Container>
        <TitleSection  mods={['modMargin2']}>Working with POST request</TitleSection>

        <form onSubmit={formik.handleSubmit}>
          <ul className={styles.sign_up__list}>
            <li className={styles.sign_up__item}>
              <InputFiled
                name="name"
                label="Your name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                errortext={formik.touched.name && formik.errors.name ? formik.errors.name : null}
              />
            </li>
            <li className={styles.sign_up__item}>
              <InputFiled
                name="email"
                type="email"
                label="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                errortext={formik.touched.email && formik.errors.email ? formik.errors.email : null}
              />
            </li>
            <li className={styles.sign_up__item}>
              <InputFiled
                name="phone"
                label="Phone"
                helptext="+38 (XXX) XXX - XX - XX"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                errortext={ formik.touched.phone && formik.errors.phone ? formik.errors.phone : null}
              />
            </li>
            <li className={styles.sign_up__item}>
              {loading && <Preloader />}
              {error && <div>Error: {error.message}</div>}
              {!loading && !error && (
                <RadioFileds
                  title="Select your position"
                  options={positionOptions}
                  name="position_id"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              )}
            </li>
            <li className={styles.sign_up__item}>
              <UploadFiled
                name="photo"
                onChange={(file) => {
                  formik.setFieldValue('photo', file);
                  formik.setFieldTouched('photo', true, false);
                }}
                errortext={formik.touched.photo && formik.errors.photo ? formik.errors.photo : null}
              />
            </li>
            <li className={styles.sign_up__item}>
              <div className={styles.sign_up__button_wrap}>
                <Button
                  type="submit"
                  mods={['modColorPrime', 'modeSize']}
                  disabled={!(formik.isValid && formik.dirty)}
                >
                  Sign up
                </Button>
              </div>
            </li>
          </ul>
        </form>
      </Container>
    </section>
  );
};

export default SignUp;
