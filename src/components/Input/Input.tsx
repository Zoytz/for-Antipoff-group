import { FC, ChangeEvent } from 'react';

type PropsType = {
  type: string
  error: string
  name: string
  label: string
  value: string
  required: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<PropsType> = ({ type, error, name, label, required, onChange, value }) => {
  return (
    <label htmlFor={name} className="input__label">
      {label}
      <input value={value || ''} onChange={onChange} required={required} type={type} className="input input_type_error" name={name} />
      <span className="input__error input__error_type_visible">{error}</span>
    </label>
  )
}

export default Input;