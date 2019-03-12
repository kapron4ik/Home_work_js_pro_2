/*
  Задание:

    I. Написать класс Post который будет уметь:

      1. Конструктор:
          title
          image
          description
          likes

      2. Методы
          render -> отрисовать элемент в ленте
          likePost -> увеличивает счетчик постов
          + Методы для изменения title, image, description
          + бонус. Сделать получение и изменение через set и get

    II. Написать класс Advertisment который будет экстендится от класа Post
        но помимо будет иметь другой шаблон вывода, а так же метод для покупки обьекта

        buyItem -> выведет сообщение что вы купили обьект

    III.  Сгенерировать ленту из всех постов что вы добавили в систему.
          Каждый третий пост должен быть рекламным

    <div class="post">
      <div class="post__title">Some post</div>
      <div class="post__image">
        <img src="https://cdn-images-1.medium.com/fit/t/1600/480/1*Se0gnNo-tsQG-1jeu_4TJw.png"/>
      </div>
      <div class="post__description"></div>
      <div class="post__footer">
        <button class="post__like">Like!</button>
      </div>
    </div>




*/
