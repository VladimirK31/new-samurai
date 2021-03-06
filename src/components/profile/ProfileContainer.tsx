import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import {
  getStatus,
  getUserProfile,
  ProfileAPIType,
} from '../../redux/Profile-reducer'
import { AppStateType } from '../../redux/Redux-store'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'
import { Profile } from './Profile'
import { compose } from 'redux'

const mapStateToProps = (state: AppStateType) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.profile.status,
  }
}
type PathParamsType = {
  userId: string
}
type CommonPropsType = Component<PathParamsType> & PropsType
export type MapStateToPropsType = {
  profile: ProfileAPIType
  isAuth: boolean
  status: string
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
  getStatus: (status: string) => void
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
    //  userId=24109
    // }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }
  render() {
    //(!this.props.isAuth)return то же самое что и this.props.isAuth == false

    return (
      <div>
        <div>
          <Profile
            {...this.props}
            profile={this.props.profile}
            status={this.props.profile.status}
          />
        </div>
      </div>
    )
  }
}
// const ProfileContainerURL = withRouter(ProfileContainer)
//HOC WithAuthRedirect оборачиваем нашу компоненту, контейнерной компонентой,для проверки залогинены
//мы или нет и делает редирект
// export default WithAuthRedirect(withRouter(connect(mapStateToProps, { getUserProfile })(ProfileContainer)))

// применяем функцию compose  принимает нашу компоненту во вторые скобки и в первых мы перечисляем наши контейнеры
export default compose<React.ComponentType>(
  connect(mapStateToProps, { getUserProfile, getStatus }),
  withRouter,
  WithAuthRedirect
)(ProfileContainer)
