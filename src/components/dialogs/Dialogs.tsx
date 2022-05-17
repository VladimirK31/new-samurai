import React from 'react'
import { DialogPropsType, MessagePropsType } from '../redux/Dialog-reducer'
import { Dialog } from './dialog/Dialog'
import s from './Dialogs.module.css'
import { Message } from './message/Message'

export type DialogsPropsType = {
  dialogData: DialogPropsType[]
  messageData: MessagePropsType[]
  newMessageElement: string
  addMessage: () => void
  updateMessageText: (newMessage: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {
  let dialogsItem = props.dialogData.map((d) => (
    <Dialog photo={d.photo} name={d.name} id={d.id} />
  ))
  let messagesItem = props.messageData.map((m) => (
    <Message message={m.message} id={m.id} />
  ))

  let newMessageText = React.createRef<HTMLTextAreaElement>()
  let addMessage = () => {
    props.addMessage()
  }
  let onMessageChange = () => {
    let newMessage = newMessageText.current?.value
    if (newMessage) {
      props.updateMessageText(newMessage)
    }
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsUser}>{dialogsItem}</div>
      <div className={s.messages}>
        {messagesItem}
        <textarea
          onChange={onMessageChange}
          ref={newMessageText}
          value={props.newMessageElement}
        />
        <div>
          <button className={s.buttonMessage} onClick={addMessage}>
            add message
          </button>
        </div>
      </div>
    </div>
  )
}
