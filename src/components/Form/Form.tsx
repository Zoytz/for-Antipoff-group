import { FC, ReactNode } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { RootState } from '../../store';

type PropsType = {
  children: ReactNode
  buttonText: string
  title: string
  isFormValid: boolean
  handleSubmit: (param: any) => void
}

const Form: FC<PropsType> = ({ children, buttonText, title, isFormValid, handleSubmit }) => {
  const { registerError } = useAppSelector((state: RootState) => state.user);
  return (
    <form onSubmit={handleSubmit} name="register" className="form">
      <h1 className="form__title">{title}</h1>
      { children }
      <button disabled={isFormValid ? registerError ? true : !isFormValid : !isFormValid} className={`form__button ${isFormValid ? registerError ? "form__button_type_disabled" : "" : "form__button_type_disabled"}`}>{buttonText}</button>
    </form>
  )
}

export default Form;