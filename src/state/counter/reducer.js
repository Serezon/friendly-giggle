import * as types from './types'
import { handleActions } from 'redux-actions'

const initialState = {
  counter: 0,
}

export default handleActions(
  {
    [types.ADD_COUNTER]: (state) => ({ ...state, counter: state.counter + 1 }),
    [types.REMOVE_COUNTER]: (state) => ({
      ...state,
      counter: state.counter - 1,
    }),
    [types.SET_COUNTER]: (state, { payload }) => ({
      ...state,
      counter: payload,
    }),
  },
  initialState,
)
