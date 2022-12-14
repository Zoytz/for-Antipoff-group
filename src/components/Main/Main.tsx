import UserCard from "../UserCard/UserCard";
import arrowImage from "../../images/arrow.png";

const Main = () => {
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
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </ul>
        <button className="main__button">Показать еще <img src={arrowImage} alt="" className="main__button-image" /></button>
      </main>
    </>
  )
}

export default Main;