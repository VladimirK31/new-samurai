import { v1 } from 'uuid'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'

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
}
type ActionType =
  | ReturnType<typeof followAC>
  | ReturnType<typeof unFollowAC>
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof setTotalUserCountAC>

let initialState: InitialStateType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 10,
  currentPage: 6,
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
    default:
      return state
  }
}
//экшн при нажатии на кнопку изменяет статус фолоу анфолоу
export const followAC = (userID: string) =>
  ({
    type: FOLLOW,
    userID,
  } as const)
export const unFollowAC = (userID: string) =>
  ({
    type: UNFOLLOW,
    userID,
  } as const)
export const setUsersAC = (users: UserType[]) =>
  ({
    type: SET_USERS,
    users,
  } as const)
export const setCurrentPageAC = (currentPage: number) =>
  ({
    type: SET_CURRENT_PAGE,
    currentPage,
  } as const)
export const setTotalUserCountAC = (totalCount: number) =>
  ({
    type: SET_TOTAL_USER_COUNT,
    totalCount,
  } as const)

export default usersReducer
