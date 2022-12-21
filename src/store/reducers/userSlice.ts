import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { MeType } from '../../components/RegisterForm/RegisterForm';

type InitialStateType = {
  user: MeType
  isLoggedIn: boolean
  registerError: string
  likes?: number[]
};

const initialState: InitialStateType = {
  user: {} as MeType,
  isLoggedIn: false,
  registerError: '',
  likes: [],
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
    userAddLike: (state, action: PayloadAction<number>) => {
      state.likes?.push(action.payload);
    },
    userRemoveLike: (state, action: PayloadAction<number>) => {
      state.likes = state.likes?.filter((like) => action.payload !== like);
    },
  },
})

export const { userRegisterSuccess, userRegisterFailure, userLogout, userAddLike, userRemoveLike } = userSlice.actions

export default userSlice.reducer