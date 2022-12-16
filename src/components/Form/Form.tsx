import { FC, ReactNode } from 'react';

type PropsType = {
  children: ReactNode
  buttonText: string
  title: string
  isFormValid: boolean
}

const Form: FC<PropsType> = ({ children, buttonText, title, isFormValid }) => {
  return (
    <form name="register" className="form">
      <h1 className="form__title">{title}</h1>
      { children }
      <button disabled={!isFormValid} className={`form__button ${isFormValid ? "" : "form__button_type_disabled"}`}>{buttonText}</button>
    </form>
  )
}

export default Form;