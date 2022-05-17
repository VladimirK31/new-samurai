import { v1 } from 'uuid'

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

export type PostPropsType = {
  id: string
  message: string
  likecount: number
}
export type InitialStateType = {
  postData: PostPropsType[]
  newPostElement: string
}
export type ActionPostsType =
  | ReturnType<typeof addPostActionCreator>
  | ReturnType<typeof updatePostTextActionCreator>

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
      state.postData.push(newPost)
      state.newPostElement = ''
      return state
    case UPDATE_POST_TEXT:
      state.newPostElement = action.newText
      return state
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
export default profileReducer
