import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

type HeaderPropsType = {
  isAuth: boolean
  userLogin: string | null
}
export const Header = (props: HeaderPropsType) => {
  return (
    <header className={s.header}>
      <div>
        <p>LOGO</p>
      </div>
      <div className={s.loginBlock}>
        {props.isAuth ? (
          props.userLogin
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </div>
    </header>
  )
}
