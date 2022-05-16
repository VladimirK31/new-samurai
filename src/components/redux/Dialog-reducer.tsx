import { v1 } from 'uuid'
import { ActionType, DialogPagePropsType, MessagePropsType } from './Store'

const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
  dialogData: [
    {
      id: v1(),
      photo:
        'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
      name: 'Vovka',
    },
    {
      id: v1(),
      photo:
        'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
      name: 'Sashka',
    },
    {
      id: v1(),
      photo:
        'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
      name: 'Evgeniy',
    },
    {
      id: v1(),
      photo:
        'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
      name: 'Artiom',
    },
  ],
  messageData: [
    { id: v1(), message: 'Hi' },
    { id: v1(), message: 'kokoko' },
    { id: v1(), message: 'How are you?' },
  ],
  newMessageElement: 'Hello',
}
const dialogReducer = (
  state: DialogPagePropsType = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage: MessagePropsType = {
        id: v1(),
        message: state.newMessageElement,
      }
      state.messageData.push(newMessage)
      state.newMessageElement = ''
      return state
    case UPDATE_MESSAGE_TEXT:
      state.newMessageElement = action.newMessageText
      return state
    default:
      return state
  }
}

export const addMessageActionCreator = () =>
  ({
    type: ADD_MESSAGE,
  } as const)
export const updateMessageTextActionCreator = (newMessage: string) =>
  ({
    type: UPDATE_MESSAGE_TEXT,
    newMessageText: newMessage,
  } as const)

export default dialogReducer
