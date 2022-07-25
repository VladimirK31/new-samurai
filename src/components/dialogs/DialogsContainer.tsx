import React from 'react'
import { connect } from 'react-redux'
import { compose, Dispatch } from 'redux'
import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from '../../redux/Dialog-reducer'
import { AppStateType } from '../../redux/Redux-store'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'
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
//HOC WithAuthRedirect оборачиваем нашу компоненту, контейнерной компонентой,для проверки залогинены мы или нет
// здесь через создание новой переменной AuthRedirectComponent
// let AuthRedirectComponent = WithAuthRedirect(Dialogs)
// export const DialogsContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AuthRedirectComponent)

export const DialogsContainer = compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(Dialogs)
