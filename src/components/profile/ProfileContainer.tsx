import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import { getUserProfile, ProfileAPIType } from '../../redux/Profile-reducer'
import { AppStateType } from '../../redux/Redux-store'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'
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
  isAuth: boolean
}
type RouterType = {
  router: {
    params: { userId: string }
    navigate: any
    location: any
  }
}
export type MapDispatchToProps = {
  getUserProfile: (userId: string) => void
}
export type PropsType = MapStateToPropsType & MapDispatchToProps & RouterType

function withRouter(Component: typeof React.Component) {
  return (props: object) => {
    let params = useParams()
    let navigate = useNavigate()
    let location = useLocation()
    return <Component {...props} router={{ params, navigate, location }} />
  }
}
export class ProfileContainer extends React.Component<CommonPropsType> {
  componentDidMount() {
    let userId = this.props.router.params.userId
    // if (!userId) {
    //   userId = ''
    // }
    this.props.getUserProfile(userId)
  }
  render() {
    //(!this.props.isAuth)return то же самое что и this.props.isAuth == false

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
//HOC WithAuthRedirect оборачиваем нашу компоненту, контейнерной компонентой,для проверки залогинены
//мы или нет и делает редирект
export default WithAuthRedirect(
  connect(mapStateToProps, { getUserProfile })(ProfileContainerURL)
)
