import { useRef, useState, memo } from 'react'
import PropTypes from 'prop-types'

const Input = ({ defaultValue, onChange }) => {
  const [value, setValue] = useState(defaultValue)
  const inputRef = useRef(null)
  console.log('render')

  return (
    <>
      <input
        ref={inputRef}
        value={value}
        onChange={({ target: { value: inputValue } }) => {
          setValue(inputValue)
          onChange(inputValue)
        }}
      />
      <button type="button" onClick={() => inputRef.current.focus()}>
        Focus
      </button>
    </>
  )
}

Input.propTypes = {
  defaultValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

Input.defaultProps = {
  defaultValue: 'elephant',
}

export default memo(Input)
