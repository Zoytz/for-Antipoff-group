import { FC, ReactNode } from 'react';

type PropsType = {
  children: ReactNode
  buttonText: string
  title: string
  isFormValid: boolean
  handleSubmit: (param: any) => void
}

const Form: FC<PropsType> = ({ children, buttonText, title, isFormValid, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} name="register" className="form">
      <h1 className="form__title">{title}</h1>
      { children }
      <button disabled={!isFormValid} className={`form__button ${isFormValid ? "" : "form__button_type_disabled"}`}>{buttonText}</button>
    </form>
  )
}

export default Form;