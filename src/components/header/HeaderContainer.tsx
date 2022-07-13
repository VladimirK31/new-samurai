import React from 'react'
import { connect } from 'react-redux'
import { getAuthUserData, InitialStateType } from '../../redux/Auth-reducer'
import { AppStateType } from '../../redux/Redux-store'
import { Header } from './Header'
type HeaderContainerPropsType = MapDispatchToProps & InitialStateType

type MapDispatchToProps = {
  getAuthUserData: () => void
}
class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  componentDidMount() {
    this.props.getAuthUserData()
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

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer)
