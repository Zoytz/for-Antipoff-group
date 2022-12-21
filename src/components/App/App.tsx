import './App.css';
import Main from '../Main/Main';
import UserPage from '../UserPage/UserPage';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import RegisterForm from '../RegisterForm/RegisterForm';
import { useEffect } from 'react';
import type { RootState } from '../../store';
import { fetchUsers } from '../../store/reducers/actionCreators';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

function App() {

  const state = useAppSelector((state: RootState) => state);
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAppSelector((state: RootState) => state.user);

  console.log(state)

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="page">
      <Routes>
        <Route path='/register' element={
          <RegisterForm />
        } />
        <Route path='/' element=
          {
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Main />
            </ProtectedRoute>
          } />
        <Route path='/user/:userId' element=
          {
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <UserPage />
            </ProtectedRoute>
          } />
      </Routes>
    </div>
  );
}

export default App;
