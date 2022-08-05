import { Dispatch } from 'redux'
import { v1 } from 'uuid'
import { profileAPI, usersAPI } from '../api/Api'

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

export type PostPropsType = {
  id: string
  message: string
  likecount: number
}
export type Photos = {
  large: string
  small: string
}
export type ProfileAPIType = {
  contacts?: {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
  }
  lookingForAJob?: boolean
  lookingForAJobDescription?: string
  userId: string
  fullName: string
  aboutMe: string
  photos: Photos
  status: string
}

export type InitialStateType = {
  postData: PostPropsType[]
  newPostElement: string
  profile: ProfileAPIType
  myStatus: string
}

export type ActionPostsType =
  | ReturnType<typeof addPostActionCreator>
  | ReturnType<typeof setUsersProfile>
  | ReturnType<typeof setStatus>

let initialState: InitialStateType = {
  postData: [
    { id: v1(), message: 'Hello,my friends!', likecount: 10 },
    {
      id: v1(),
      message: 'What are you doing,mather fucker?',
      likecount: 15,
    },
  ],
  newPostElement: 'Hello',
  profile: {
    fullName: '',
    aboutMe: '',
    photos: {
      large: '',
      small: '',
    },
    status: '',
    userId: '',
  },
  myStatus: '',
}

const profileReducer = (
  state: InitialStateType = initialState,
  action: ActionPostsType
): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      const newPost: PostPropsType = {
        id: v1(),
        message: action.addNewPost,
        likecount: 0,
      }
      return {
        ...state,
        newPostElement: '',
        postData: [newPost, ...state.postData],
      }

    case SET_STATUS:
      return {
        ...state,
        profile: { ...state.profile, status: action.status },
      }
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile }
    default:
      return state
  }
}
export const addPostActionCreator = (addNewPost: string) =>
  ({
    type: ADD_POST,
    addNewPost,
  } as const)

export const setUsersProfile = (profile: ProfileAPIType) =>
  ({
    type: SET_USER_PROFILE,
    profile,
  } as const)
export const setStatus = (status: string) =>
  ({
    type: SET_STATUS,
    status,
  } as const)

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
  usersAPI.getUserProfile(userId).then((response) => {
    dispatch(setUsersProfile(response.data))
  })
}
export const getStatus = (userId: string) => (dispatch: Dispatch) => {
  debugger
  profileAPI.getStatus(userId).then((response) => {
    debugger
    dispatch(setStatus(response.data))
  })
}

export default profileReducer
