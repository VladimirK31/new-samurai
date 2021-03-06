import { Navigate } from 'react-router-dom'
import { AppStateType } from '../../redux/Redux-store'
import { Background } from './background/Background'
import { Description } from './description/Description'
import { PostsContainer } from './posts/PostsContainer'

export const Profile = (props: any) => {
  return (
    <div>
      <div>
        <Background />
        <Description profile={props.profile} status={props.profile.status} />
        <PostsContainer />
      </div>
    </div>
  )
}
