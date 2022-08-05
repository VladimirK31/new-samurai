import { Field, InjectedFormProps, reduxForm } from 'redux-form'

type FormDataType = {
  login: string
  password: string
  rememberMe: boolean
}
//Field спец.компонента из редакс-форм
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder="Login" name={'login'} component={'input'} />
      </div>
      <div>
        <Field placeholder="Password" name={'password'} component={'input'} />
      </div>
      <div>
        <Field type={'checkbox'} name={'rememberMe'} component={'input'} />
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginREduxForm = reduxForm<FormDataType>({
  // a unique name for the form
  form: 'login',
})(LoginForm)

export const Login = () => {
  const onSubmit = (formData: FormDataType) => {
    console.log(formData)
  }
  return (
    <>
      <h1>LOGIN</h1>
      <LoginREduxForm onSubmit={onSubmit} />
    </>
  )
}
