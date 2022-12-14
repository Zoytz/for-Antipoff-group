import './App.css';
import Form from '../Form/Form';
import Input from '../Input/Input';

function App() {
  return (
    <div className="page">
      <Form buttonText="Зарегистрироваться">
        <Input label="Имя" name="name" type="text" error="error" />
        <Input label="Электронная почта" name="email" type="email" error="error" />
        <Input label="Пароль" name="password" type="password" error="error" />
        <Input label="Подтвердите пароль" name="confirm" type="password" error="error" />
      </Form>
    </div>
  );
}

export default App;
