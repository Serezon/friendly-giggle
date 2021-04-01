import * as types from './types'
import { createAction } from 'redux-actions'

export const addCounter = {
  type: types.ADD_COUNTER,
}
export const removeCounter = {
  type: types.REMOVE_COUNTER,
}
export const setCounter = createAction(types.SET_COUNTER)
