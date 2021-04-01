import { useState, useEffect } from 'react'
import useDataLoad from 'hooks/useDataLoad'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCounter } from 'state/counter/selectors'
import { addCounter, removeCounter, setCounter } from 'state/counter/actions'

const Hook = () => {
  const dispatch = useDispatch()
  const counter = useSelector(getCounter)
  const { id = 1 } = useParams()
  const {
    isLoading,
    setLoading,
    data,
    setData,
    error,
    setError,
  } = useDataLoad()

  const loadData = () => {
    setTimeout(
      () =>
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
          .then((response) => response.json())
          .then(setData)
          .catch((e) => setError(e.message))
          .finally(() => setLoading(false)),
      1000,
    )
  }

  useEffect(loadData, [])

  if (isLoading) return 'Loading...'
  if (error) return `Error is ${error}`

  return (
    <div>
      <div>Count is {counter}</div>
      <button onClick={() => dispatch(addCounter)}>+</button>
      <br />
      <button onClick={() => dispatch(removeCounter)}>-</button>
      <br />
      <input
        value={counter}
        onChange={({ target: { value } }) => dispatch(setCounter(+value))}
      />
      <div>{JSON.stringify(data)}</div>
    </div>
  )
}

export default Hook
