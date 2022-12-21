import { FC } from 'react';
import { UserType } from '../../store/reducers/actionCreators';

type Propstype = {
  user: UserType
}

const UserCard: FC<Propstype> = ({user}) => {
  return (
    <li className="user">
      <img src={user.avatar} alt="Фотография пользователя" className="user__image" />
      <h3 className="user__title">
        {user.first_name} {user.last_name}
      </h3>
      <div className="user__footer">
        <button className={`user__like ${user.isLiked ? "user__like_type_active" : ""}`}></button>
      </div>
    </li>
  )
}

export default UserCard;