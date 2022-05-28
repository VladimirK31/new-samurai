import { v1 } from 'uuid'
import { UserType } from '../redux/Users-reducer'
import s from './Users.module.css'

type UsersPropsType = {
  users: UserType[]
  follow: (userId: string) => void
  unFollow: (userId: string) => void
  setUser: (users: UserType[]) => void
}

export const Users = (props: UsersPropsType) => {
  if (props.users.length === 0) {
    props.setUser([
      {
        id: v1(),
        photo:
          'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
        fullName: 'Vovka',
        followed: true,
        status: 'Im number one',
        location: { cityName: 'Minsk', country: 'Belarus' },
      },
      {
        id: v1(),
        photo:
          'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
        fullName: 'Sashka',
        followed: true,
        status: 'Hey,man',
        location: { cityName: 'Minsk', country: 'Belarus' },
      },
      {
        id: v1(),
        photo:
          'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
        fullName: 'Zhenya',
        followed: true,
        status: 'Im program man',
        location: { cityName: 'Minsk', country: 'Belarus' },
      },
    ])
  }
  return (
    <div>
      {props.users.map((u) => {
        return (
          <div key={u.id}>
            <span>
              <img src={u.photo} className={s.usersPhoto} />
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
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.cityName}</div>
              <div>{u.location.country}</div>
            </span>
          </div>
        )
      })}
    </div>
  )
}
