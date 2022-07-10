import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import {
  InitialStateType,
  setAuthStatus,
  setAuthUserData,
} from '../../redux/Auth-reducer'
import { AppStateType } from '../../redux/Redux-store'
import { Header } from './Header'
import s from './Header.module.css'
type HeaderContainerPropsType = MapDispatchToProps & InitialStateType

type MapDispatchToProps = {
  setAuthUserData: (userData: InitialStateType) => void
  setAuthStatus: (isAuthStatus: boolean) => void
}
class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      }) //withCredentials настройка для серевера,обозначает что мы залогинены
      .then((response) => {
        if (response.data.resultCode === 0) {
          this.props.setAuthUserData(response.data.data)
          this.props.setAuthStatus(true)
        }
      })
  }
  render() {
    return <Header userLogin={this.props.login} isAuth={this.props.isAuth} />
  }
}
const mapStateToProps = (state: AppStateType): InitialStateType => {
  return {
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  }
}

export default connect(mapStateToProps, { setAuthUserData, setAuthStatus })(
  HeaderContainer
)
