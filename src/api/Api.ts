import axios from 'axios'
import { UserType } from '../redux/Users-reducer'

type CommonResponseType<T> = {
  data: T
  fieldsErrors: []
  messages: []
  resultCode: 0 | 1
}
type GetUsersType = {
  error: 0 | 1
  items: UserType[]
  totalCount: number
}
const instance = axios.create({
  withCredentials: true, //withCredentials настройка для серевера,обозначает что мы залогинены
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    'API-KEY': '4888bc93-f4c8-492a-b3e0-c91f101fe285',
  },
})

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data
      })
    // после ? в запросе на сервер указываем page текущую страницу и count= количество юзеров на одной странице
  },
  follow(userId: string) {
    return instance.post(`follow/${userId}`, {})
  },
  unFollow(userId: string) {
    return instance.delete(`follow/${userId}`)
  },
  getUserProfile(userId: string) {
    return profileAPI.getUserProfile(userId)

    // после ? в запросе на сервер указываем page текущую страницу и count= количество юзеров на одной странице
  },
}

export const profileAPI = {
  getUserProfile(userId: string) {
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId: string) {
    debugger
    return instance.get<string>(`profile/status/` + userId)
  },
  updateStatus(status: string) {
    return instance.put<CommonResponseType<{}>>(`profile/status/`, { status })
  },
}
export const authAPI = {
  me() {
    return instance.get(`/auth/me`)
  },
}
