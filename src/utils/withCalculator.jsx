import { useState } from 'react'

const withCalculator = (WrappedComponent) => (props) => {
  const [value, setValue] = useState(0)

  const add = (n) => setValue((v) => v + n)
  const minus = (n) => setValue((v) => v - n)

  const calc = {
    value,
    add,
    minus,
  }

  return <WrappedComponent calc={calc} {...props} />
}

export default withCalculator
