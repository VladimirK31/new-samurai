import React from 'react'
import {
  addPostActionCreator,
  updatePostTextActionCreator,
} from '../../redux/Profile-reducer'
import { StorePropsType } from '../../redux/Store'
import { Posts } from './Posts'

type PostsPropsType = {
  store: StorePropsType
}

export const PostsContainer = (props: PostsPropsType) => {
  let addPost = () => {
    props.store.dispatch(addPostActionCreator())
  }

  let onPostChange = (text: string) => {
    props.store.dispatch(updatePostTextActionCreator(text))
  }

  return (
    <Posts
      addPost={addPost}
      onPostChange={onPostChange}
      postData={props.store.getState().profilePage.postData}
      newPostElement={props.store.getState().profilePage.newPostElement}
    />
  )
}
