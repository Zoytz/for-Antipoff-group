import './App.css';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Main from '../Main/Main';
import UserPage from '../UserPage/UserPage';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path='/register' element={`privet`} />
        <Route path='/login' element={`privet`} />
        <Route path='/' element={`privet`} />
        <Route path='/user/:userId' element={`privet`} />
      </Routes>
    </div>
  );
}

export default App;
