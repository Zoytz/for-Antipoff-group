import Form from '../Form/Form';
import Input from '../Input/Input';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { FC, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export type MeType = {
  name: string
  email: string
  password: number
  token?: string
  id?: number
}

type PropsType = {
  handleRegisterSubmit: (param: MeType) => void
}

const RegisterForm = () => {

  const navigate = useNavigate();

  const { values, handleChange, isFormValid, resetForm, errors } = useFormWithValidation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (values.password !== values.confirm) {
      return
    } else {
      const user = {
        name: values.name,
        email: values.email,
        password: values.password,
      }
      console.log(user);
      resetForm();
      navigate('/');
    }
  }
  
  return (
    <Form handleSubmit={handleSubmit} isFormValid={isFormValid} title="Регистрация" buttonText="Зарегистрироваться" >
      <Input required={true} onChange={handleChange} value={values.name} type="text" label="Имя" error={errors.name} name="name" />
      <Input required={true} onChange={handleChange} value={values.email} type="email" label="Электронная почта" error={errors.email} name="email" />
      <Input required={true} onChange={handleChange} value={values.password} type="password" label="Пароль" error={errors.password} name="password" />
      <Input required={true} onChange={handleChange} value={values.confirm} type="password" label="Подтвердите пароль" error={errors.confirm} name="confirm" />
    </Form>
  )
};

export default RegisterForm;