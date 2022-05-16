import { combineReducers, legacy_createStore } from 'redux'
import dialogReducer from './Dialog-reducer'
import profileReducer from './Profile-reducer'
import sidebarReducer from './Sidebar-reducer '
import { StorePropsType } from './Store'

let reducer = combineReducers({
  dialogPage: dialogReducer,
  profilePage: profileReducer,
  sidebarPage: sidebarReducer,
})
let store: StorePropsType = legacy_createStore(reducer)
export default store
