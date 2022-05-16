import { FriendPropsType } from '../../redux/Store'
import s from './FriendsSidebar.module.css'

export const FriendsSidebar = (props: FriendPropsType) => {
  return (
    <div className={s.sidebarFriends}>
      <div>
        <img src={props.photo} />
      </div>
      {props.name}
    </div>
  )
}
