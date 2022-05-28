import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { AppStateType } from '../redux/Redux-store'
import {
  followAC,
  setUsersAC,
  unFollowAC,
  UserType,
} from '../redux/Users-reducer'
import { Users } from './Users'
const mapStateToProps = (state: AppStateType) => {
  return { users: state.usersPage.users }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    follow: (userId: string) => {
      dispatch(followAC(userId))
    },
    unFollow: (userId: string) => {
      dispatch(unFollowAC(userId))
    },
    setUser: (users: UserType[]) => {
      dispatch(setUsersAC(users))
    },
  }
}
export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
