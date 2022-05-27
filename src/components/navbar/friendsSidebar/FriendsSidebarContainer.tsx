import { connect } from 'react-redux'
import { AppStateType } from '../../redux/Redux-store'
import { FriendsSidebar } from './FriendsSidebar'

const mapStateToProps = (state: AppStateType) => {
  return { friendData: state.sidebarPage.friendData }
}

export const FriendsSidebarContainer = connect(mapStateToProps)(FriendsSidebar)
