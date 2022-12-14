import image from '../../images/Ellipse.png';
const UserCard = () => {
  return (
    <li className="user">
      <img src={image} alt="Фотография пользователя" className="user__image" />
      <h3 className="user__title">
        Артур Королёв
      </h3>
      <div className="user__footer">
        <button className="user__like user__like_type_active"></button>
      </div>
    </li>
  )
}

export default UserCard;