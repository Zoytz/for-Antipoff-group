import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UserType } from './actionCreators';

type InitialStateType = {
  users: UserType[]
  isLoading: boolean
  error: string
  displayedUsersCount: number
};

const initialState: InitialStateType = {
  users: [] as UserType[],
  isLoading: false,
  error: '',
  displayedUsersCount: 6,
}

export const fetchUsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    usersLoading: (state) => {
      state.isLoading = true;
    },
    usersLoaded: (state, action: PayloadAction<UserType[]>) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    usersLoadingError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    usersDisplayedCount: (state) => {
      state.displayedUsersCount += 6;
    }
  },
})

export const { usersLoading, usersLoaded, usersLoadingError, usersDisplayedCount } = fetchUsersSlice.actions

export default fetchUsersSlice.reducer