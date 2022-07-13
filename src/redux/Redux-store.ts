import { combineReducers, legacy_createStore, applyMiddleware } from 'redux'
import authReducer from './Auth-reducer'
import dialogReducer from './Dialog-reducer'
import profileReducer from './Profile-reducer'
import sidebarReducer from './Sidebar-reducer '
import usersReducer from './Users-reducer'
import thunkMiddleware from 'redux-thunk'

export const rootReducer = combineReducers({
  dialogPage: dialogReducer,
  profilePage: profileReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
export let store: any = legacy_createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
)
