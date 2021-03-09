import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([
    "make coffee",
    "go to sleep",
    "do homework",
  ]);

  return [
    <ul>
      {todos.map((text) => (
        <TodoItem key={text} text={text} />
      ))}
    </ul>,
    <button onClick={() => setTodos(todos.concat(todos.length))}>
      Do magic
    </button>,
  ];
};

export default TodoList;
