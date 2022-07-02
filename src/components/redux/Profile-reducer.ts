import { v1 } from 'uuid'

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

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
  | ReturnType<typeof updatePostTextActionCreator>
  | ReturnType<typeof setUsersProfile>

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
        message: state.newPostElement,
        likecount: 0,
      }
      return {
        ...state,
        newPostElement: '',
        postData: [...state.postData, newPost],
      }

    case UPDATE_POST_TEXT:
      return {
        ...state,
        newPostElement: action.newText,
      }
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile }
    default:
      return state
  }
}
export const addPostActionCreator = () =>
  ({
    type: ADD_POST,
  } as const)
export const updatePostTextActionCreator = (text: string) =>
  ({
    type: UPDATE_POST_TEXT,
    newText: text,
  } as const)
export const setUsersProfile = (profile: any) =>
  ({
    type: SET_USER_PROFILE,
    profile,
  } as const)

export default profileReducer
