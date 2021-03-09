import styles from "./App.module.sass";
import TodoList from "./TodoList/TodoList";

function App() {
  return (
    <div className={styles.app}>
      <TodoList />
    </div>
  );
}

export default App;
