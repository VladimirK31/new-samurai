import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { setUsersProfile } from '../redux/Profile-reducer'
import { AppStateType } from '../redux/Redux-store'
import { Profile } from './Profile'

class ProfileContainer extends React.Component<any, any> {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`) // после ? в запросе на сервер указываем page текущую страницу и count= количество юзеров на одной странице
      .then((response) => {
        debugger

        this.props.setUsersProfile(response.data)
      })
  }
  render() {
    return (
      <div>
        <div>
          <Profile {...this.props} />
        </div>
      </div>
    )
  }
}
let mapStateToProps = (state: AppStateType) => ({
  profile: state.profilePage.profile,
})
export default connect(mapStateToProps, { setUsersProfile })(ProfileContainer)
