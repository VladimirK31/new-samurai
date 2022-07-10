import { v1 } from 'uuid'
import dialogReducer, {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from './Dialog-reducer'
import profileReducer, {
  addPostActionCreator,
  updatePostTextActionCreator,
} from './Profile-reducer'
import sidebarReducer from './Sidebar-reducer '

type DialogPropsType = {
  id: string
  photo: string
  name: string
}
type MessagePropsType = {
  id: string
  message: string
}
type PostDatePropsType = {
  id: string
  message: string
  likecount: number
}
export type StatePropsType = {
  store: StorePropsType
  // dispatch: (action: ActionType) => void
}
type DialogPagePropsType = {
  dialogData: DialogPropsType[]
  messageData: MessagePropsType[]
  newMessageElement: string
}
export type ProfilePagePropsType = {
  postData: PostDatePropsType[]
  newPostElement: string
}
export type FriendPropsType = {
  id: string
  photo: string
  name: string
}
export type SideBarPagePropsType = {
  friendData: FriendPropsType[]
}
export type RootStateType = {
  dialogPage: DialogPagePropsType
  profilePage: ProfilePagePropsType
  sidebarPage: SideBarPagePropsType
}
export type StorePropsType = {
  _state: RootStateType
  subscribe: (observer: () => void) => void
  _rerenderEntireTree: () => void
  getState: () => RootStateType
  dispatch: (action: ActionType) => void
}

export type ActionType =
  | ReturnType<typeof addPostActionCreator>
  | ReturnType<typeof updatePostTextActionCreator>
  | ReturnType<typeof addMessageActionCreator>
  | ReturnType<typeof updateMessageTextActionCreator>

export const store: StorePropsType = {
  _state: {
    dialogPage: {
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
    },
    profilePage: {
      postData: [
        { id: v1(), message: 'Hello,my friends!', likecount: 10 },
        {
          id: v1(),
          message: 'What are you doing,mather fucker?',
          likecount: 15,
        },
      ],
      newPostElement: 'Hello',
    },
    sidebarPage: {
      friendData: [
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
      ],
    },
  },
  _rerenderEntireTree() {},
  subscribe(observer: () => void) {
    this._rerenderEntireTree = observer
  },
  getState() {
    return this._state
  },
  dispatch(action) {
    // this._state.profilePage = profileReducer(this._state.profilePage, action)
    // this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
    this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)
    this._rerenderEntireTree()
  },
}
