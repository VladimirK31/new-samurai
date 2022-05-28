import { combineReducers, legacy_createStore } from 'redux'
import dialogReducer from './Dialog-reducer'
import profileReducer from './Profile-reducer'
import sidebarReducer from './Sidebar-reducer '
import usersReducer from './Users-reducer'

export const rootReducer = combineReducers({
  dialogPage: dialogReducer,
  profilePage: profileReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = legacy_createStore(rootReducer)
