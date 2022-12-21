import { configureStore } from '@reduxjs/toolkit';
import fetchUsersReducer from './reducers/fetchUsersSlice';

export const store = configureStore({
  reducer: {
    users: fetchUsersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;