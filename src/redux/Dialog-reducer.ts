import { v1 } from 'uuid'

const ADD_MESSAGE = 'ADD-MESSAGE'

export type DialogPropsType = {
  id: string
  photo: string
  name: string
}
export type MessagePropsType = {
  id: string
  message: string
}
export type InitialStateType = {
  dialogData: DialogPropsType[]
  messageData: MessagePropsType[]
  newMessageElement: string
}

export type DialogActionType = ReturnType<typeof addMessageActionCreator>

let initialState: InitialStateType = {
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
  state: InitialStateType = initialState,
  action: DialogActionType
): InitialStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage: MessagePropsType = {
        id: v1(),
        message: action.addMessage,
      }
      return {
        ...state,
        messageData: [...state.messageData, newMessage],
      }
    default:
      return state
  }
}

export const addMessageActionCreator = (addMessage: string) =>
  ({
    type: ADD_MESSAGE,
    addMessage,
  } as const)

export default dialogReducer
