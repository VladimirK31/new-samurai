import { NavLink } from 'react-router-dom'
import { DialogPropsType } from '../../../redux/Dialog-reducer'

import s from './Dialog.module.css'

export const Dialog = (props: DialogPropsType) => {
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={'/dialogs/' + props.id}>
        <div>
          <img src={props.photo} className={s.photo} />
          {props.name}
        </div>
      </NavLink>
    </div>
  )
}
