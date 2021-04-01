import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/todolist">TodoList</Link>
        </li>
        <li>
          <Link to="/hook">Hook</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
