import { combineReducers, legacy_createStore } from 'redux'
import dialogReducer from './Dialog-reducer'
import profileReducer from './Profile-reducer'
import sidebarReducer from './Sidebar-reducer '

export const rootReducer = combineReducers({
  dialogPage: dialogReducer,
  profilePage: profileReducer,
  sidebarPage: sidebarReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = legacy_createStore(rootReducer)
