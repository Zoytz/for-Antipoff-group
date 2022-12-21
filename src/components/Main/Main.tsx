import UserCard from "../UserCard/UserCard";
import arrowImage from "../../images/arrow.png";
import { useAppSelector } from "../../hooks/redux";
import { RootState } from "../../store";
import { useAppDispatch } from '../../hooks/redux';
import { usersDisplayedCount } from '../../store/reducers/fetchUsersSlice';
import Preloader from "../Preloader/Preloader";

const Main = () => {
  const { users, displayedUsersCount, isLoading } = useAppSelector((state: RootState) => state.users);
  const dispatch = useAppDispatch();

  return (
    <>
      <header className="header">
        <button className="header__button">Выход</button>
        <button className="header__mobile-button"></button>
      </header>
      <main className="main">
        <div className="main__header">
          <h1 className="main__title">
            Наша команда
          </h1>
          <h2 className="main__subtitle">
            Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.
          </h2>
        </div>
        <ul className="users page__list">
          {
            isLoading ? 
            <Preloader />
            :
            [...users].slice(0, displayedUsersCount).map((user) => {
              return (
                <UserCard key={user.id} user={user} />
              )
            })
          }
        </ul>
        <button onClick={() => dispatch(usersDisplayedCount())} className={`main__button ${users.length <= displayedUsersCount ? "main__button_type_invisible" : ""}`}>Показать еще <img src={arrowImage} alt="" className="main__button-image" /></button>
      </main>
    </>
  )
}

export default Main;