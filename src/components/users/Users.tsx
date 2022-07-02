import axios from 'axios'
import { v1 } from 'uuid'
import { UserType } from '../redux/Users-reducer'
import s from './Users.module.css'
import userPhoto from '../../assets/images/avatarki.jpg'
import { NavLink } from 'react-router-dom'

export type UsersPropsType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  follow: (userId: string) => void
  unFollow: (userId: string) => void
  onPageChanged: (p: number) => void
}

export const Users = (props: UsersPropsType) => {
  //вычисляем количество страниц(делим общее число юзеров на количество юзеров на одной странице)
  //округляем страницы в к большему значению Math.ceil
  let pagesCount = Math.ceil(100 / props.pageSize)
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
              className={props.currentPage === p ? s.page : ''}
              onClick={() => {
                props.onPageChanged(p)
              }}
            >
              {p}
            </span>
          ) // отрисовываем страницы с юзерами
        })}
      </div>
      {props.users.map((u) => {
        return (
          <div>
            <span>
              <div>
                <NavLink to={'/profile'}>
                  <img
                    src={u.photos.small !== null ? u.photos.small : userPhoto}
                    className={s.usersPhoto}
                  />
                </NavLink>
              </div>

              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      props.unFollow(u.id)
                    }}
                  >
                    unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id)
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
