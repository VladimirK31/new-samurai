import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { PostPropsType } from '../../../redux/Profile-reducer'
import { requiredField } from '../../../utilits/validators/Validators'
import { Post } from './post/Post'
import s from './Posts.module.css'
type PostsPropsType = {
  postData: PostPropsType[]
  newPostElement: string
  addPost: (addNewPost: string) => void
}

export const Posts = (props: PostsPropsType) => {
  let postsItem = props.postData.map((p) => (
    <Post key={p.id} id={p.id} message={p.message} likecount={p.likecount} />
  ))

  let addNewPostForm = (values: FormDataType) => {
    props.addPost(values.addNewPost)
  }

  return (
    <div className={s.posts}>
      My posts
      <AddNewPostReduxForm onSubmit={addNewPostForm} />
      <div>{postsItem}</div>
    </div>
  )
}

const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="addNewPost"
        component="textarea"
        placeholder="Enter your post"
        validate={[requiredField]}
      />
      <div>
        <button className={s.button}>add post</button>
      </div>
    </form>
  )
}

const AddNewPostReduxForm = reduxForm<FormDataType>({
  // a unique name for the form
  form: 'login',
})(AddNewPostForm)
type FormDataType = {
  addNewPost: string
}
