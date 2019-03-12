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

document.addEventListener('DOMContentLoaded', () => {
  const Feed = [];
  class Post {
    constructor(title, image, description){
      this.id = Math.random()*10000;
      this.title = title;
      this.image = image;
      this.description = description;
      this.likes = 0;
      Feed.push( this );
    }
    render(){
      const nodeInDom = document.querySelector(`.node[data-id="${this.id}`);
      const target = document.getElementById('posts_feed');
      let node;

      if( nodeInDom !== null ){
          node = nodeInDom;
      } else {
          node = document.createElement('div');
      }

      node.innerHTML = `
        <div class="post">
          <div class="post__title">${this.title}</div>
          <div class="post__image">
            <img src="${this.image}"/>
          </div>
          <div class="post__description">${this.description}</div>
          <div class="post__footer">
            <button class="post__like">Like!${this.likes}</button>
          </div>
        </div>
      `;

      let like_btn = node.querySelector('.post__like');
      like_btn.onclick = this.addLike;

      if( nodeInDom === null ){
        target.appendChild( node );
      }
    }
    addLike() {
      this.likes++;
      this.render();
    }
  }

  let image = 'https://cdn-images-1.medium.com/fit/t/1600/480/1*Se0gnNo-tsQG-1jeu_4TJw.png';
  let x = new Post('Hello', image, 'Hello world');
  console.log( x );
});




