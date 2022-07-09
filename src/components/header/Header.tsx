import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

type HeaderPropsType = {
  isAuth: boolean
  userLogin: string | null
}
export const Header = (props: HeaderPropsType) => {
  return (
    <header className={s.header}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU" />
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
