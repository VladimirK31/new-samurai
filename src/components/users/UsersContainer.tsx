import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { AppStateType } from '../redux/Redux-store'
import {
  followAC,
  setCurrentPageAC,
  setTotalUserCountAC,
  setUsersAC,
  toggleIsFetchingAC,
  unFollowAC,
  UserType,
} from '../redux/Users-reducer'
import { Users } from './Users'
import { UsersClassComponent } from './UsersClassComponent'
const mapStateToProps = (state: AppStateType) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
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
    setCurrentPage: (pageNumber: number) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUserCount: (totalCount: number) => {
      dispatch(setTotalUserCountAC(totalCount))
    },
    toggleIsFetching: (isFetching: boolean) => {
      dispatch(toggleIsFetchingAC(isFetching))
    },
  }
}
export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersClassComponent)
