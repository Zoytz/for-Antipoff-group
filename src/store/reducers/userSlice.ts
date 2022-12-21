import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { MeType } from '../../components/RegisterForm/RegisterForm';

type InitialStateType = {
  user: MeType
  isLoggedIn: boolean
  registerError: string
};

const initialState: InitialStateType = {
  user: {} as MeType,
  isLoggedIn: false,
  registerError: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userRegisterSuccess: (state, action: PayloadAction<MeType>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.registerError = "";
    },
    userRegisterFailure: (state, action: PayloadAction<string>) => {
      state.isLoggedIn = false;
      state.registerError = action.payload;
    },
    userLogout: (state) => {
      state.isLoggedIn = false;
      state.registerError = "";
      state.user = {} as MeType;
    },
  },
})

export const { userRegisterSuccess, userRegisterFailure, userLogout } = userSlice.actions

export default userSlice.reducer