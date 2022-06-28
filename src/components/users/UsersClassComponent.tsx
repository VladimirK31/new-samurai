import axios from 'axios'
import { v1 } from 'uuid'
import { UserType } from '../redux/Users-reducer'
import s from './Users.module.css'
import userPhoto from '../../assets/images/avatarki.jpg'
import React from 'react'

type UsersPropsType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  follow: (userId: string) => void
  unFollow: (userId: string) => void
  setUser: (users: UserType[]) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUserCount: (totalCount: number) => void
}

export class UsersClassComponent extends React.Component<UsersPropsType> {
  // constructor(props: UsersPropsType | Readonly<UsersPropsType>) {
  //   super(props)
  // }
  componentDidMount() {
    if (this.props.users.length === 0) {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        ) // после ? в запросе на сервер указываем page текущую страницу и count= количество юзеров на одной странице
        .then((response) => {
          this.props.setUser(response.data.items)
          this.props.setTotalUserCount(response.data.totalCount)
        })
    }
  }
  // метод для запроса на сервер,что бы добавить юзеров и изменить стэйт
  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      ) // после ? в запросе на сервер указываем page текущую страницу и count= количество юзеров на одной странице
      .then((response) => {
        this.props.setUser(response.data.items)
      })
  }

  render() {
    //вычисляем количество страниц(делим общее число юзеров на количество юзеров на одной странице)
    //округляем страницы в к большему значению Math.ceil
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    //создали переменную для 1 страницы с юзерами  и заполняем ее
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
    return (
      <div>
        <div>
          {pages.map((p) => {
            return (
              <span
                className={this.props.currentPage === p ? s.page : ''}
                onClick={() => {
                  this.onPageChanged(p)
                }}
              >
                {p}
              </span>
            ) // отрисовываем страницы с юзерами
          })}
        </div>
        {this.props.users.map((u) => {
          return (
            <div key={u.id}>
              <span>
                <div>
                  <img
                    src={u.photos.small !== null ? u.photos.small : userPhoto}
                    className={s.usersPhoto}
                  />
                </div>

                <div>
                  {u.followed ? (
                    <button
                      onClick={() => {
                        this.props.unFollow(u.id)
                      }}
                    >
                      unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.follow(u.id)
                      }}
                    >
                      follow
                    </button>
                  )}
                </div>
              </span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{'u.location.cityName'}</div>
                <div>{'u.location.country'}</div>
              </span>
            </div>
          )
        })}
      </div>
    )
  }
}
