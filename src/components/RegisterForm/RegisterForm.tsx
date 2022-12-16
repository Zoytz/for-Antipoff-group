import Form from '../Form/Form';
import Input from '../Input/Input';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

const RegisterForm = () => {

  const { values, handleChange, isFormValid, resetForm, errors } = useFormWithValidation();
  
  return (
    <Form isFormValid={isFormValid} title="Регистрация" buttonText="Зарегистрироваться" >
      <Input required={true} onChange={handleChange} value={values.name} type="text" label="Имя" error={errors.name} name="name" />
      <Input required={true} onChange={handleChange} value={values.email} type="email" label="Электронная почта" error={errors.email} name="email" />
      <Input required={true} onChange={handleChange} value={values.password} type="password" label="Пароль" error={errors.password} name="password" />
      <Input required={true} onChange={handleChange} value={values.confirm} type="password" label="Подтвердите пароль" error={errors.confirm} name="confirm" />
    </Form>
  )
};

export default RegisterForm;