import { configureStore } from '@reduxjs/toolkit';
import fetchUsersSlice from './reducers/fetchUsersSlice';
import userSlice from './reducers/userSlice';

export const store = configureStore({
  reducer: {
    users: fetchUsersSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;