import { FC } from 'react';

type PropsType = {
  type: string
  error: string
  name: string
  label: string
}


const Input: FC<PropsType> = ({ type, error, name, label }) => {
  return (
    <label htmlFor={name} className="input__label">
      {label}
      <input type={type} className="input input_type_error" name={name} />
      <span className="input__error input__error_type_visible">{error}</span>
    </label>
  )
}

export default Input;