import React from 'react'
import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from '../redux/Dialog-reducer'
import { StorePropsType } from '../redux/Store'
import { Dialogs } from './Dialogs'

export type DialogsPropsType = {
  store: StorePropsType
}

export const DialogsContainer = (props: DialogsPropsType) => {
  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator())
  }
  let onMessageChange = (newMessage: string) => {
    props.store.dispatch(updateMessageTextActionCreator(newMessage))
  }

  return (
    <Dialogs
      addMessage={addMessage}
      updateMessageText={onMessageChange}
      newMessageElement={props.store.getState().dialogPage.newMessageElement}
      messageData={props.store.getState().dialogPage.messageData}
      dialogData={props.store.getState().dialogPage.dialogData}
    />
  )
}
