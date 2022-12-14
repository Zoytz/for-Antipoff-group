import { FC, ReactNode } from 'react';

type PropsType = {
  children: ReactNode
  buttonText: string
  title: string
}

const Form: FC<PropsType> = ({ children, buttonText, title }) => {
  return (
    <form name="register" className="form">
      <h1 className="form__title">{title}</h1>
      { children }
      <button className="form__button">{buttonText}</button>
    </form>
  )
}

export default Form;