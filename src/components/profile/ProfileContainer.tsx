import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { ProfileAPIType, setUsersProfile } from '../redux/Profile-reducer'
import { AppStateType } from '../redux/Redux-store'
import { Profile } from './Profile'

const mapStateToProps = (state: AppStateType) => {
  return {
    profile: state.profilePage.profile,
  }
}
type PathParamsType = {
  userId: string
}
type CommonPropsType = Component<PathParamsType> & PropsType
export type MapStateToPropsType = {
  profile: ProfileAPIType
}
type RouterType = {
  router: {
    params: { userId: string }
    navigate: any
    location: any
  }
}
export type MapDispatchToProps = {
  setUsersProfile: (profile: ProfileAPIType) => void
}
export type PropsType = MapStateToPropsType & MapDispatchToProps & RouterType

function withRouter(Component: typeof React.Component) {
  debugger
  return (props: object) => {
    let params = useParams()
    let navigate = useNavigate()
    let location = useLocation()
    return <Component {...props} router={{ params, navigate, location }} />
  }
}
export class ProfileContainer extends React.Component<CommonPropsType> {
  componentDidMount() {
    debugger
    let userId = this.props.router.params.userId
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      // после ? в запросе на сервер указываем page текущую страницу и count= количество юзеров на одной странице
      .then((response) => {
        this.props.setUsersProfile(response.data)
      })
  }
  render() {
    return (
      <div>
        <div>
          <Profile {...this.props} profile={this.props.profile} />
        </div>
      </div>
    )
  }
}
const ProfileContainerURL = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUsersProfile })(
  ProfileContainerURL
)
