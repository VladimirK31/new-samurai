import { PostPropsType } from '../../../redux/Profile-reducer'
import s from './Post.module.css'

export const Post = (props: PostPropsType) => {
  return (
    <div className={s.post}>
      <img src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" />
      {props.message}
      <div>like {props.likecount}</div>
    </div>
  )
}
