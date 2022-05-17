import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {
  addPostActionCreator,
  updatePostTextActionCreator,
} from '../../redux/Profile-reducer'
import { AppStateType } from '../../redux/Redux-store'
import { Posts } from './Posts'

// type PostsPropsType = {
//   store: StorePropsType
// }

// export const PostsContainer = (props: PostsPropsType) => {
//   let addPost = () => {
//     props.store.dispatch(addPostActionCreator())
//   }

//   let onPostChange = (text: string) => {
//     props.store.dispatch(updatePostTextActionCreator(text))
//   }

//   return (
//     <Posts
//       addPost={addPost}
//       onPostChange={onPostChange}
//       postData={props.store.getState().profilePage.postData}
//       newPostElement={props.store.getState().profilePage.newPostElement}
//     />
//   )
// }

const mapStateToProps = (state: AppStateType) => {
  return {
    postData: state.profilePage.postData,
    newPostElement: state.profilePage.newPostElement,
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    onPostChange: (text: string) => {
      dispatch(updatePostTextActionCreator(text))
    },
  }
}

export const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)
