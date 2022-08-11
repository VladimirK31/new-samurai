import { Dispatch } from 'redux'
import { v1 } from 'uuid'
import { authAPI } from '../api/Api'
const SET_USER_DATA = 'SET_USER_DATA'
const SET_AUTH_STATUS = 'SET_AUTH_STATUS'

export type InitialStateType = {
  id: string | null
  email: string | null
  login: string | null
  isAuth: boolean
}
type ActionType =
  | ReturnType<typeof setAuthUserData>
  | ReturnType<typeof setAuthStatus>
let initialState: InitialStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
}

const authReducer = (
  state: InitialStateType = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }
    case SET_AUTH_STATUS:
      return {
        ...state,
        isAuth: action.isAuth,
      }
    default:
      return state
  }
}

export const setAuthUserData = (payload: InitialStateType) =>
  ({ type: SET_USER_DATA, payload } as const)
export const setAuthStatus = (isAuth: boolean) =>
  ({ type: SET_AUTH_STATUS, isAuth } as const)

export const getAuthUserData = () => (dispatch: Dispatch) => {
  authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(response.data.data))
      dispatch(setAuthStatus(true))
    }
  })
}
export const login =
  (email: string, password: string, rememberMe: boolean) =>
  (dispatch: Dispatch) => {
    authAPI.login(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
      }
    })
  }
export default authReducer
