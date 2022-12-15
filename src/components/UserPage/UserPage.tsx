import image from '../../images/Ellipse.png';
import tel from '../../images/tel.png';
import mail from '../../images/mail.png';

const UserPage = () => {
  return (
    <>
      <div className="user-page__mobile-buttons">
        <button className="user-page__mobile-button user-page__mobile-button_type_back"></button>
        <button className="user-page__mobile-button user-page__mobile-button_type_logout "></button>
      </div>
      <div className="user-page__header">
        <button className="user-page__button">
          Назад
        </button>

        <div className="user-page__user">
          <img src={image} alt="" className="user-page__image" />
          <div className="user-page__info">
            <h1 className="user-page__title">
              Артур Королёв
            </h1>
            <h2 className="user-page__subtitle">
              Партнер
            </h2>
          </div>
        </div>
        <button className="user-page__button">
          Выход
        </button>
      </div>
      <div className="user-page__main">
        <p className="user-page__description">
          Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать продажи, используя самые современные аналитические инструменты.

          В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями. Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это осознание того, что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно".

          Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других бизнес-проектов.
        </p>
        <div className="user-page__contacts">
          <a href="tel: 89543334455" className="user-page__contact">
            <img src={tel} alt="" className="user-page__icon" />
            <span className="user-page__span">
              +7 (954) 333-44-55
            </span>
          </a>
          <a href="mailto: sykfafkar@gmail.com" className="user-page__contact">
            <img src={mail} alt="" className="user-page__icon" />
            <span className="user-page__span">
              sykfafkar@gmail.com
            </span>
          </a>
        </div>
      </div>
    </>
  )
}

export default UserPage;