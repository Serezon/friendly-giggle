import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import TodoList from 'components/TodoList'
import Hook from 'components/Hook'
import Form from 'components/Form'

import styles from './App.module.sass'
import Header from 'components/Header'
import { Suspense, useState } from 'react'
import MyContext from 'contexts/MyContext'
import { Provider } from 'react-redux'
import configureStore from 'state/configureStore'
import { PersistGate } from 'redux-persist/integration/react'

const { store, persistor } = configureStore()
function App() {
  const [global, setGlobal] = useState({})

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <MyContext.Provider value={{ global, setGlobal }}>
            <Header />
            <div className={styles.app}>
              <Suspense fallback="Loading...">
                <Switch>
                  <Route path="/todolist" component={TodoList} />
                  <Route path="/hook/:id" exact component={Hook} />
                  <Route path="/form" component={Form} />
                </Switch>
              </Suspense>
            </div>
          </MyContext.Provider>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
