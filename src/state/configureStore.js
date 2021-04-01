import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from '.'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['counter'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = () => {
  const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
  const persistor = persistStore(store)
  return { store, persistor }
}

export default configureStore
