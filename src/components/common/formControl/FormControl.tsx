import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { WrappedFieldMetaProps } from 'redux-form'
import s from './FormControl.module.css'

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>
type FormsControlType = {
  meta: WrappedFieldMetaProps
  input: DefaultInputPropsType
}

export const Input: React.FC<FormsControlType> = ({
  meta,
  input,
  ...restProps
}) => {
  const hasError = meta.touched && meta.error
  const finalClass = `${hasError ? `${s.formControl} ${s.error}` : ''}`

  return (
    <div className={finalClass}>
      <div>
        <input {...input} {...restProps} />
      </div>
      {hasError && <span className={s.error}>{meta.error}</span>}
    </div>
  )
}
