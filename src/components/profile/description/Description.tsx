import s from './Description.module.css'

export const Description = (props: any) => {
  debugger
  return (
    <div className={s.description}>
      <div>
        <img src={props.profile.photos.large} />
      </div>
      {props.profile.aboutMe}
    </div>
  )
}
