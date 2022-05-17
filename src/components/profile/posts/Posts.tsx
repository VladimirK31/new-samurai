import React from 'react'
import { PostPropsType } from '../../redux/Profile-reducer'
import { Post } from './post/Post'
import s from './Posts.module.css'
type PostsPropsType = {
  postData: PostPropsType[]
  newPostElement: string
  addPost: () => void
  onPostChange: (text: string) => void
}

export const Posts = (props: PostsPropsType) => {
  let postsItem = props.postData.map((p) => (
    <Post id={p.id} message={p.message} likecount={p.likecount} />
  ))

  let newPostText = React.createRef<HTMLTextAreaElement>()

  let addPost = () => {
    props.addPost()
  }

  let onPostChange = () => {
    let text = newPostText.current?.value
    if (text) {
      props.onPostChange(text)
    }
  }

  return (
    <div className={s.posts}>
      <div>My posts</div>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostText}
          value={props.newPostElement}
        />
        <div>
          <button onClick={addPost} className={s.button}>
            add post
          </button>
        </div>
      </div>

      <div>{postsItem}</div>
    </div>
  )
}
