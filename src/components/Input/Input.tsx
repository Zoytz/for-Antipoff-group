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

const emailPattern = '\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*\\.\\w{2,4}';

const Input: FC<PropsType> = ({ type, error, name, label, required, onChange, value }) => {
  return (

    <label htmlFor={name} className="input__label">
      {label}
      {type === "email" ?
        <input pattern={emailPattern} value={value || ''} onChange={onChange} required={required} type={type} className={`input ${error ? "input_type_error" : ""}`} name={name} />
        :
        <input value={value || ''} onChange={onChange} required={required} type={type} className={`input ${error ? "input_type_error" : ""}`} name={name} />
      }
      <span className={`input__error ${error ? "input__error_type_visible" : ""}`}>{error === "Введите данные в указанном формате." ? "Введите данные в формате example@example.ru." : error}</span>
    </label>
  )
}

export default Input;