import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from '../../redux/Dialog-reducer'
import { AppStateType } from '../../redux/Redux-store'
import { Dialogs } from './Dialogs'

// export type DialogsPropsType = {
//   store: StorePropsType
// }

// export const DialogsContainer = (props: DialogsPropsType) => {
//   let addMessage = () => {
//     props.store.dispatch(addMessageActionCreator())
//   }
//   let onMessageChange = (newMessage: string) => {
//     props.store.dispatch(updateMessageTextActionCreator(newMessage))
//   }

//   return (
//     <Dialogs
//       addMessage={addMessage}
//       updateMessageText={onMessageChange}
//       newMessageElement={props.store.getState().dialogPage.newMessageElement}
//       messageData={props.store.getState().dialogPage.messageData}
//       dialogData={props.store.getState().dialogPage.dialogData}
//     />
//   )
// }
const mapStateToProps = (state: AppStateType) => {
  return {
    newMessageElement: state.dialogPage.newMessageElement,
    messageData: state.dialogPage.messageData,
    dialogData: state.dialogPage.dialogData,
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator())
    },
    updateMessageText: (newMessage: string) => {
      dispatch(updateMessageTextActionCreator(newMessage))
    },
  }
}

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs)
