import { FC, ReactNode } from 'react';

type PropsType = {
  children: ReactNode
}

const Form: FC<PropsType> = ({ children }) => {
  return (
    <form name="register" className="form">
      <h1 className="form__title">Register</h1>
      { children }
    </form>
  )
}

export default Form;