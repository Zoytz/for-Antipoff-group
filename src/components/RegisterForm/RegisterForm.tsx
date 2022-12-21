import Form from '../Form/Form';
import Input from '../Input/Input';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { FormEvent, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { userRegisterFailure } from '../../store/reducers/userSlice';
import { registerUser } from '../../store/reducers/actionCreators';
import { RootState } from '../../store';

export type MeType = {
  name: string
  email: string
  password: string
  token?: string
  id?: number
}

const RegisterForm = () => {

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { registerError, isLoggedIn } = useAppSelector((state: RootState) => state.user);

  useLayoutEffect(() => {
    if (!isLoggedIn) {
      return
    } else {
      navigate('/');
    }
  }, [isLoggedIn]);

  const { values, handleChange, isFormValid, resetForm, errors } = useFormWithValidation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Number(values.password) !== Number(values.confirm)) {
      dispatch(userRegisterFailure("Пароли не совпадают"));
      setTimeout(() => {
        dispatch(userRegisterFailure(""));
        resetForm({ ...values, password: "", confirm: "" });
      }, 2000);
    } else {
      const user = {
        name: values.name,
        email: "eve.holt@reqres.in",
        password: "pistol",
      }
      resetForm();
      dispatch(registerUser(user));
    }
  }

  return (
    <Form handleSubmit={handleSubmit} isFormValid={isFormValid} title="Регистрация" buttonText={`${registerError ? registerError : "Зарегистрироваться"}`} >
      <Input required={true} onChange={handleChange} value={values.name} type="text" label="Имя" error={errors.name} name="name" />
      <Input required={true} onChange={handleChange} value={values.email} type="email" label="Электронная почта" error={errors.email} name="email" />
      <Input required={true} onChange={handleChange} value={values.password} type="password" label="Пароль" error={errors.password} name="password" />
      <Input required={true} onChange={handleChange} value={values.confirm} type="password" label="Подтвердите пароль" error={errors.confirm} name="confirm" />
    </Form>
  )
};

export default RegisterForm;