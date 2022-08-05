import React from 'react'
import { Navigate } from 'react-router-dom'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { DialogPropsType, MessagePropsType } from '../../redux/Dialog-reducer'
import { Dialog } from './dialog/Dialog'
import s from './Dialogs.module.css'
import { Message } from './message/Message'

export type DialogsPropsType = {
  dialogData: DialogPropsType[]
  messageData: MessagePropsType[]
  newMessageElement: string
  isAuth: boolean
  addMessage: (addMessage: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {
  let dialogsItem = props.dialogData.map((d) => (
    <Dialog photo={d.photo} name={d.name} id={d.id} />
  ))
  let messagesItem = props.messageData.map((m) => (
    <Message message={m.message} id={m.id} />
  ))
  let addMessage = (values: FormDataType) => {
    props.addMessage(values.addMessage)
  }

  if (props.isAuth == false) return <Navigate to={'/login'} />
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsUser}>{dialogsItem}</div>
      <div className={s.messages}>{messagesItem}</div>
      <AddMessageReduxForm onSubmit={addMessage} />
    </div>
  )
}

type FormDataType = {
  addMessage: string
}

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="addMessage"
        component="textarea"
        placeholder="Enter your message"
      />
      <button>send message</button>
    </form>
  )
}
const AddMessageReduxForm = reduxForm<FormDataType>({
  // a unique name for the form
  form: 'dialogAddMessage',
})(AddMessageForm)

// type MessageFormType = {
//   addMessage: () => void
//   newMessageElement: string
//   updateMessageText: (newMessage: string) => void
// }
// const MessageForm = (props: MessageFormType) => {
//   let newMessageText = React.createRef<HTMLTextAreaElement>()
//   let addMessage = () => {
//     props.addMessage()
//   }
//   let onMessageChange = () => {
//     let newMessage = newMessageText.current?.value
//     if (newMessage) {
//       props.updateMessageText(newMessage)
//     }
//   }
//   return (
//     <form>
//       <Field
//         onChange={onMessageChange}
//         ref={newMessageText}
//         value={props.newMessageElement}
//       />
//       <button className={s.buttonMessage} onClick={addMessage}>
//         add message
//       </button>
//     </form>
//   )
// }
