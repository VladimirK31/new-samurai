import axios from 'axios'
import { v1 } from 'uuid'
import { UserType } from '../../redux/Users-reducer'
import s from './Users.module.css'
import userPhoto from '../../assets/images/avatarki.jpg'
import React from 'react'
import { Users, UsersPropsType } from './Users'
import { Preloader } from '../common/preloader/Preloader'
import { usersAPI } from '../../api/Api'

type UsersContainerPropsType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: string[]

  setCurrentPage: (pageNumber: number) => void

  getUsers: (currentPage: number, pageSize: number) => void
  follow: (userId: string) => void
  unFollow: (userId: string) => void
}

export class UsersClassComponent extends React.Component<UsersContainerPropsType> {
  // constructor(props: UsersPropsType | Readonly<UsersPropsType>) {
  //   super(props)
  // }
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
    // this.props.toggleIsFetching(true)
    // if (this.props.users.length === 0) {
    //   usersAPI
    //     .getUsers(this.props.currentPage, this.props.pageSize)
    //     .then((data: { items: UserType[]; totalCount: number }) => {
    //       this.props.toggleIsFetching(false)
    //       this.props.setUsers(data.items)
    //       this.props.setTotalUserCount(data.totalCount)
    //     })
    // }
  }
  // метод для запроса на сервер,что бы добавить юзеров и изменить стэйт
  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    this.props.getUsers(pageNumber, this.props.pageSize)

    // this.props.toggleIsFetching(true)
    // this.props.setCurrentPage(pageNumber)
    // usersAPI
    //   .getUsers(pageNumber, this.props.pageSize)
    //   .then((data: { items: UserType[] }) => {
    //     this.props.toggleIsFetching(false)
    //     this.props.setUsers(data.items)
    //   })
  }

  render() {
    return (
      //условие появления прелоудера если фетчинг тру(запрос отправлен)
      <>
        {this.props.isFetching ? <Preloader /> : null}

        <Users
          follow={this.props.follow}
          unFollow={this.props.unFollow}
          currentPage={this.props.currentPage}
          users={this.props.users}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          onPageChanged={this.onPageChanged}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    )
  }
}
