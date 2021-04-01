import { useFormik } from 'formik'
import * as Yup from 'yup'
import withCalculator from 'utils/withCalculator'

const Form = ({ calc }) => {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
    },
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .required('Please enter username')
        .min(5, 'Minimal length is 5')
        .max(15, 'Maximum length is 15'),
      password: Yup.string()
        .required('Please enter password')
        .min(8, 'Minimal length is 8')
        .max(50, 'Maximum length is 50'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Please confirm password'),
      email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
    }),
    onSubmit: async (values) => {
      setSubmitting(true)
      await new Promise((res, rej) =>
        setTimeout(() => {
          console.log('submitted')
          res()
        }, 2000),
      )
      setSubmitting(false)
    },
  })

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          autoComplete="off"
          name="username"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
          disabled={isSubmitting}
        />
        <input
          autoComplete="off"
          name="password"
          type="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          disabled={isSubmitting}
        />
        <input
          autoComplete="off"
          name="confirmPassword"
          type="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.confirmPassword}
          disabled={isSubmitting}
        />
        <input
          autoComplete="off"
          name="email"
          type="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          disabled={isSubmitting}
        />
        <br />
        {Object.keys(errors)
          .map((e) => errors[e])
          .join(',')}
        <br />
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
      <div>{calc.value}</div>
      <button onClick={() => calc.add(1)}>+</button>
      <button onClick={() => calc.minus(1)}>-</button>
    </>
  )
}

export default withCalculator(Form)
