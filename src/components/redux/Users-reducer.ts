import { v1 } from 'uuid'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

type LocationType = {
  cityName: string
  country: string
}
export type UserType = {
  id: string
  photo: string
  fullName: string
  followed: boolean
  status: string
  location: LocationType
}
export type InitialStateType = {
  users: UserType[]
}
type ActionType =
  | ReturnType<typeof followAC>
  | ReturnType<typeof unFollowAC>
  | ReturnType<typeof setUsersAC>

let initialState: InitialStateType = {
  users: [],
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
      return { ...state, users: [...state.users, ...action.users] }
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

export default usersReducer
