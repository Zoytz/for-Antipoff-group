import axios from "axios";
import { AppDispatch } from "..";
import { MeType } from "../../components/RegisterForm/RegisterForm";
import { usersLoading, usersLoaded, usersLoadingError } from "./fetchUsersSlice";
import { userRegisterSuccess, userRegisterFailure } from "./userSlice";

export type UserType = {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
  isLiked?: boolean
}

type UsersResponseType = {
  data: UserType[]
}

type RegisterResponseType = {
  id: number
  token: string
}

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  dispatch(usersLoading());
  await axios.get<UsersResponseType>('https://reqres.in/api/users?per_page=12')
  .then((res) => dispatch(usersLoaded(res.data.data)))
  .catch((error) => dispatch(usersLoadingError(error.message)))
}

export const registerUser = (user: MeType) => async (dispatch: AppDispatch) => {
  const { email, password } = user;
  await axios.post<RegisterResponseType>('https://reqres.in/api/register', {email, password})
  .then((res) => dispatch(userRegisterSuccess({...user, ...res.data})))
  .catch((error) => {console.log(error); dispatch(userRegisterFailure(error.message))});
}

