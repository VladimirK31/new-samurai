import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    'API-KEY': '4888bc93-f4c8-492a-b3e0-c91f101fe285',
  },
})

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
      })
      .then((response) => {
        return response.data
      })
    // после ? в запросе на сервер указываем page текущую страницу и count= количество юзеров на одной странице
  },
  follow(userId: string) {
    return instance.post(`/follow/${userId}`, {})
  },
  unFollow(userId: string) {
    return instance.delete(`follow/${userId}`)
  },
}
