import { FriendPropsType } from '../../redux/Store'
import s from './FriendsSidebar.module.css'
type FriendsSidebarType = {
  friendData: FriendPropsType[]
}
export const FriendsSidebar = (props: FriendsSidebarType) => {
  let friendsSidebarItem = props.friendData.map((el) => {
    return (
      <div className={s.sidebarFriends}>
        <div>
          <img src={el.photo} />
        </div>
        {el.name}
      </div>
    )
  })
  return (
    <div className={s.sidebar}>
      <h3 className={s.title}>FRIENDS</h3>
      {friendsSidebarItem}
    </div>
  )
}
