import { Preloader } from '../../common/preloader/Preloader'
import s from './Description.module.css'

export const Description = (props: any) => {
  if (!props.profile) {
    return <Preloader />
  } else {
    return (
      <div className={s.description}>
        <div>
          <h1>{props.profile.fullName}</h1>
        </div>
        <div>
          <img src={props.profile.photos.small} />
        </div>
        <div>
          <span>
            <b>About me: </b> {props.profile.aboutMe}
          </span>
          <br />
          <span>
            <b>Status: </b>
            {props.profile.status}
          </span>
        </div>
      </div>
    )
  }
}
