import { v1 } from 'uuid'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

type LocationType = {
  cityName: string
  country: string
}
export type UserType = {
  id: string
  photos: { small: string }
  name: string
  followed: boolean
  status: string
  location: LocationType
}
export type InitialStateType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
}
type ActionType =
  | ReturnType<typeof follow>
  | ReturnType<typeof unFollow>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUserCount>
  | ReturnType<typeof toggleIsFetching>

let initialState: InitialStateType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 10,
  currentPage: 6,
  isFetching: false,
}
// редьюсер принимает стэйт и экшн и возвращает новый стэйт
const usersReducer = (
  state: InitialStateType = initialState,
  action: ActionType
): InitialStateType => {
  // условия при котором изменяется стэйт(соблюдать правило иммутабельности)
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: true }
          }
          return u
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: false }
          }
          return u
        }),
      }
    case SET_USERS:
      return { ...state, users: action.users }
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case SET_TOTAL_USER_COUNT:
      return { ...state, totalUsersCount: action.totalCount }
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }
    default:
      return state
  }
}
//экшн при нажатии на кнопку изменяет статус фолоу анфолоу
export const follow = (userID: string) =>
  ({
    type: FOLLOW,
    userID,
  } as const)
export const unFollow = (userID: string) =>
  ({
    type: UNFOLLOW,
    userID,
  } as const)
export const setUsers = (users: UserType[]) =>
  ({
    type: SET_USERS,
    users,
  } as const)
export const setCurrentPage = (currentPage: number) =>
  ({
    type: SET_CURRENT_PAGE,
    currentPage,
  } as const)
export const setTotalUserCount = (totalCount: number) =>
  ({
    type: SET_TOTAL_USER_COUNT,
    totalCount,
  } as const)
export const toggleIsFetching = (isFetching: boolean) =>
  ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
  } as const)

export default usersReducer
