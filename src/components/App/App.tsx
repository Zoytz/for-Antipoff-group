import './App.css';
import Main from '../Main/Main';
import UserPage from '../UserPage/UserPage';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import RegisterForm from '../RegisterForm/RegisterForm';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/' element=
          {
            <ProtectedRoute isLoggedIn={false}>
              <Main />
            </ProtectedRoute>
          } />
        <Route path='/user/:userId' element=
          {
            <ProtectedRoute isLoggedIn={false}>
              <UserPage />
            </ProtectedRoute>
          } />
      </Routes>
    </div>
  );
}

export default App;
