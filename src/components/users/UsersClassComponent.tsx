import axios from 'axios'
import { v1 } from 'uuid'
import { UserType } from '../redux/Users-reducer'
import s from './Users.module.css'
import userPhoto from '../../assets/images/avatarki.jpg'
import React from 'react'
import { Users, UsersPropsType } from './Users'
import { Preloader } from '../common/preloader/Preloader'

type UsersContainerPropsType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  follow: (userId: string) => void
  unFollow: (userId: string) => void
  setUsers: (users: UserType[]) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUserCount: (totalCount: number) => void
  toggleIsFetching: (isFetching: boolean) => void
}

export class UsersClassComponent extends React.Component<UsersContainerPropsType> {
  // constructor(props: UsersPropsType | Readonly<UsersPropsType>) {
  //   super(props)
  // }
  componentDidMount() {
    this.props.toggleIsFetching(true)
    if (this.props.users.length === 0) {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        ) // после ? в запросе на сервер указываем page текущую страницу и count= количество юзеров на одной странице
        .then((response) => {
          this.props.toggleIsFetching(false)
          this.props.setUsers(response.data.items)
          this.props.setTotalUserCount(response.data.totalCount)
        })
    }
  }
  // метод для запроса на сервер,что бы добавить юзеров и изменить стэйт
  onPageChanged = (pageNumber: number) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      ) // после ? в запросе на сервер указываем page текущую страницу и count= количество юзеров на одной странице
      .then((response) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return (
      //условие появления прелоудера если фетчинг тру(запрос отправлен)
      <>
        {this.props.isFetching ? <Preloader /> : null}

        <Users
          currentPage={this.props.currentPage}
          users={this.props.users}
          totalUsersCount={this.props.totalUsersCount}
          unFollow={this.props.unFollow}
          follow={this.props.follow}
          pageSize={this.props.pageSize}
          onPageChanged={this.onPageChanged}
        />
      </>
    )
  }
}
