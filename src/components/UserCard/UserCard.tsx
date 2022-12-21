import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { RootState } from '../../store';
import { UserType } from '../../store/reducers/actionCreators';
import { userAddLike, userRemoveLike } from '../../store/reducers/userSlice';

type Propstype = {
  user: UserType
}

const UserCard: FC<Propstype> = ({ user }) => {

  const { likes } = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  let isLiked: boolean;

  if (likes) {
    isLiked = likes.includes(user.id);
  } else {
    isLiked = false;
  }

  const handleLikeUser = () => {
    if (isLiked) {
      dispatch(userRemoveLike(user.id));
    } else {
      dispatch(userAddLike(user.id))
    }
  }

  return (
    <li className="user">
      <Link className="user__link" to={`/user/${user.id}`}>
        <img src={user.avatar} alt="Фотография пользователя" className="user__image" />
        <h3 className="user__title">
          {user.first_name} {user.last_name}
        </h3>
      </Link>
      <div className="user__footer">
        <button onClick={handleLikeUser} className={`user__like ${isLiked ? "user__like_type_active" : ""}`}></button>
      </div>
    </li>
  )
}

export default UserCard;