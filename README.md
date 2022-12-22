# Тестовое задание на позицию «Frontend-разработчик стажер на React»

[Ссылка на GH-pages](https://zoytz.github.io/for-Antipoff-group)

Создайте сайт на React + Redux, в котором на главной странице отображается список карточек пользователей и по клику на каждую карточку открывается страница с детальной информацией о пользователе. Список пользователей доступен только для зарегистрированных пользователей. Сайт должен быть адаптивным. Макет вы найдете здесь:
[cсылка на макет в Figma](https://www.figma.com/file/Nw9TJYCeh8Tmi9cX3KxyqO/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5.-%D0%A4%D1%80%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D0%B4?node-id=0%3A1)

1. Регистрация и авторизация должны осуществляться через email/password. Проверять на валидность все входные данные и выводить ошибку при невалидных данных
Токен необходимо сохранять в памяти браузера и удалять после нажатия на кнопку “выход”
2. Страница всех пользователей. На этой странице отображаются все пользователи. 
3. Страница пользователя отображает данные конкретного пользователя
Для запросов можно использовать https://reqres.in/ или любой другой сервис предоставляющий такие данные. Использование библиотечных компонентов вроде mui-material не желательно и будет оцениваться ниже.

## В проекте использовались:
* Redux Toolkit
* axios
* react-redux
* typescript