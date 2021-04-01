import { useState, useContext } from 'react'
import TodoItem from './TodoItem/TodoItem'
import MyContext from 'contexts/MyContext'
import Modal from 'components/Modal'

const TodoList = () => {
  const [todos, setTodos] = useState([
    'make coffee',
    'go to sleep',
    'do homework',
  ])
  const { global, setGlobal } = useContext(MyContext)

  return [
    <ul>
      {todos.map((text) => (
        <TodoItem key={text} text={text} />
      ))}
    </ul>,
    <Modal>
      <button onClick={() => setTodos(todos.concat(todos.length))}>
        Do magic
      </button>
    </Modal>,
    <Modal>
      <button
        onClick={() => setGlobal({ ...global, [Math.random()]: Math.random() })}
      >
        {JSON.stringify(global)}
      </button>
    </Modal>,
  ]
}

export default TodoList
