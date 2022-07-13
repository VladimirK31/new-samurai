import { connect } from 'react-redux'
import { AppStateType } from '../../redux/Redux-store'
import {
  follow,
  getUsers,
  InitialStateType,
  setCurrentPage,
  unFollow,
} from '../../redux/Users-reducer'
import { UsersClassComponent } from './UsersClassComponent'

const mapStateToProps = (state: AppStateType): InitialStateType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}
//избавляемся от функции
// const mapDispatchToProps = (dispatch: Dispatch) => {
//   return {
//     follow: (userId: string) => {
//       dispatch(follow(userId))
//     },
//     unFollow: (userId: string) => {
//       dispatch(unFollow(userId))
//     },
//     setUser: (users: UserType[]) => {
//       dispatch(setUsers(users))
//     },
//     setCurrentPage: (pageNumber: number) => {
//       dispatch(setCurrentPage(pageNumber))
//     },
//     setTotalUserCount: (totalCount: number) => {
//       dispatch(setTotalUserCount(totalCount))
//     },
//     toggleIsFetching: (isFetching: boolean) => {
//       dispatch(toggleIsFetching(isFetching))
//     },
//   }
// }
export const UsersContainer = connect(mapStateToProps, {
  follow,
  unFollow,
  setCurrentPage,
  getUsers,
})(UsersClassComponent)
