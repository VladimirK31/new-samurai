import { StorePropsType } from '../redux/Store'
import { Background } from './background/Background'
import { Description } from './description/Description'
import { PostsContainer } from './posts/PostsContainer'

// export type ProfilePropsType = {
//   store: StorePropsType
// }
export const Profile = () => {
  return (
    <div>
      <div>
        <Background />
        <Description />
        <PostsContainer />
      </div>
    </div>
  )
}
