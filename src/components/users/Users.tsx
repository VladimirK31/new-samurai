import axios from 'axios'
import { v1 } from 'uuid'
import { UserType } from '../redux/Users-reducer'
import s from './Users.module.css'
import userPhoto from '../../assets/images/avatarki.jpg'

type UsersPropsType = {
  users: UserType[]
  follow: (userId: string) => void
  unFollow: (userId: string) => void
  setUser: (users: UserType[]) => void
}

export const Users = (props: UsersPropsType) => {
  let getUser = () => {
    if (props.users.length === 0) {
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response) => {
          props.setUser(response.data.items)
        })
    }
    // props.setUser([
    //   {
    //     id: v1(),
    //     photo:
    //       'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
    //     fullName: 'Vovka',
    //     followed: true,
    //     status: 'Im number one',
    //     location: { cityName: 'Minsk', country: 'Belarus' },
    //   },
    //   {
    //     id: v1(),
    //     photo:
    //       'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
    //     fullName: 'Sashka',
    //     followed: true,
    //     status: 'Hey,man',
    //     location: { cityName: 'Minsk', country: 'Belarus' },
    //   },
    //   {
    //     id: v1(),
    //     photo:
    //       'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
    //     fullName: 'Zhenya',
    //     followed: true,
    //     status: 'Im program man',
    //     location: { cityName: 'Minsk', country: 'Belarus' },
    //   },
    // ])
  }

  return (
    <div>
      <button onClick={getUser}>Get user</button>
      {props.users.map((u) => {
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
