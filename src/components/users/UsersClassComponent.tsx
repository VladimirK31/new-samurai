import axios from 'axios'
import { v1 } from 'uuid'
import { UserType } from '../redux/Users-reducer'
import s from './Users.module.css'
import userPhoto from '../../assets/images/avatarki.jpg'
import React from 'react'

type UsersPropsType = {
  users: UserType[]
  follow: (userId: string) => void
  unFollow: (userId: string) => void
  setUser: (users: UserType[]) => void
}

export class UsersClassComponent extends React.Component<UsersPropsType> {
  constructor(props: UsersPropsType | Readonly<UsersPropsType>) {
    super(props)
    if (this.props.users.length === 0) {
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response) => {
          this.props.setUser(response.data.items)
        })
    }
  }

  render() {
    return (
      <div>
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
