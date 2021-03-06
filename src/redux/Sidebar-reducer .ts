import { v1 } from 'uuid'
import { SideBarPagePropsType } from './Store'
export type FriendPropsType = {
  id: string
  photo: string
  name: string
}
type InitialStateType = {
  friendData: FriendPropsType[]
}
let initialState: InitialStateType = {
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
}
const sidebarReducer = (
  state: SideBarPagePropsType = initialState,
  action: any
) => {
  return state
}
export default sidebarReducer
