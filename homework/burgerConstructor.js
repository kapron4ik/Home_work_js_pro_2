

  /*

    Задание:

      1. Создать конструктор бургеров на прототипах, которая добавляет наш бургер в массив меню

      Дожно выглядеть так:
      new burger('Hamburger',[ ...Массив с ингредиентами ] , 20);

      Моделька для бургера:
      {
        cookingTime: 0,     // Время на готовку
        showComposition: function(){
          let {composition, name} = this;
          let compositionLength = composition.length;
          console.log(compositionLength);
          if( compositionLength !== 0){
            composition.map( function( item ){
                console.log( 'Состав бургера', name, item );
            })
          }
        }
      }

      Результатом конструктора нужно вывести массив меню c добавленными элементами.
      // menu: [ {name: "", composition: [], cookingTime:""},  {name: "", composition: [], cookingTime:""}]

        2. Создать конструктор заказов

        Моделька:
        {
          id: "",
          orderNumber: "",
          orderBurder: "",
          orderException: "",
          orderAvailability: ""
        }

          Заказ может быть 3х типов:
            1. В котором указано название бургера
              new Order('Hamburger'); -> Order 1. Бургер Hamburger, будет готов через 10 минут.
            2. В котором указано что должно быть в бургере, ищете в массиве Menu подходящий вариант
              new Order('', 'has', 'Название ингредиента') -> Order 2. Бургер Чизбургер, с сыром, будет готов через 5 минут.
            3. В котором указано чего не должно быть
              new Order('', 'except', 'Название ингредиента') ->


            Каждый их которых должен вернуть статус:
            "Заказ 1: Бургер ${Название}, будет готов через ${Время}

            Если бургера по условиям заказа не найдено предлагать случайный бургер из меню:
              new Order('', 'except', 'Булка') -> К сожалению, такого бургера у нас нет, можете попробовать "Чизбургер"
              Можно например спрашивать через Confirm подходит ли такой вариант, если да - оформлять заказ
              Если нет, предложить еще вариант из меню.

        3. Протестировать программу.
          1. Вначале добавляем наши бургеры в меню (3-4 шт);
          2. Проверяем работу прототипного наследования вызывая метод showComposition на обьект бургера с меню
          3. Формируем 3 заказа

        Бонусные задания:
        4. Добавлять в исключения\пожелания можно несколько ингредиентов
        5. MEGABONUS
          Сделать графическую оболочку для программы.

  */

  const Ingredients = [
    'Булка',
    'Огурчик',
    'Котлетка',
    'Бекон',
    'Рыбная котлета',
    'Соус карри',
    'Кисло-сладкий соус',
    'Помидорка',
    'Маслины',
    'Острый перец',
    'Капуста',
    'Кунжут',
    'Сыр Чеддер',
    'Сыр Виолла',
    'Сыр Гауда',
    'Майонез'
  ];

  var OurMenu = [];
  var OurOrders = [];

  OurMenu.__proto__.showMenu = function(){
    console.log('OurMenu', this)
  }

  function Burger( name, ingredients, cookingTime){
    this.name = name,
    this.cookingTime = cookingTime,
    this.composition = ingredients
  }

  Burger.prototype.showComposition = function(){
    let {composition, name} = this;
    let compositionLength = composition.length;
    console.log(compositionLength);
    if( compositionLength !== 0){
      composition.map( function( item ){
          console.log( 'Состав бургера', name, item );
      })
    }
  }

  Burger.prototype.addMenu = function(){
    OurMenu.push(this);
  }

  
let Hamburger = new Burger('Hamburger',['Булка','Котлетка','Огурчик','Соус карри' ] , 20);
let Cheeseburger = new Burger('Cheeseburger',['Булка','Котлетка','Сыр Чеддер','Огурчик','Кисло-сладкий соус' ] , 17);
let BigMak = new Burger('BigMak',['Булка','Котлетка','Сыр Чеддер','Огурчик','Капуста','Соус карри'] , 25);
let BigTasty = new Burger('BigTasty',['Булка','Котлетка','Сыр Виолла','Помидорка','Капуста','Кисло-сладкий соус'] , 15);

Hamburger.addMenu();
Cheeseburger.addMenu();
BigMak.addMenu();
BigTasty.addMenu();

OurMenu.showMenu();


function Order(name, condition, value){
  this.orderBurger = name,
  this.orderAvailability = function (){
    if (condition == 'has'){
      return value;
    } else {
      return '';
    }
  }();
  this.orderException = function (){
    if (condition == 'except'){
      return value;
    } else {
      return '';
    }
  }();
  let self = this;
  (function addOrders(){
    OurOrders.push(self);
    self.id = OurOrders.length-1;
    self.orderNumber = OurOrders.length;
  })();
}

Order.prototype.status = function(){
  let filterMenu;
  if (this.orderBurger){
    // console.log (this.orderBurger);
    filterMenu = OurMenu.filter (item => item.name == this.orderBurger);
    // console.log ('filterMenuName', filterMenu);
  } else if (this.orderAvailability){
    // console.log (this.orderAvailability);
    filterMenu = OurMenu.filter(item => 
      item.composition.some(key => key == this.orderAvailability)
    )
    if (filterMenu.length == 0){
      let conf;
      let count = 0;
      do{
        conf = confirm (`К сожалению, такого бургера у нас нет, можете попробовать ${OurMenu[count].name}`)
        if (conf) {
          filterMenu = OurMenu.slice(count,count+1);
        }
        count ++;
      } while(!conf);
      this.orderBurger = OurMenu[count-1].name;
      this.orderAvailability = '';
      this.orderException = '';
    }
  } else if (this.orderException){

    filterMenu = OurMenu.slice();
    let exeptIndex;
    do{
      exeptIndex = filterMenu.findIndex(item => 
        item.composition.some(key => key == this.orderException)
      )
      if (exeptIndex !== -1){
        filterMenu.splice(exeptIndex,1)
      }
    }while(exeptIndex !== -1)
    
  } else {
      console.log ('Возникла ошибка, Вы не правильно формируете заказ.')
    }

  console.log(`Заказ ${this.orderNumber}: Бургер ${filterMenu[0].name}, будет готов через ${filterMenu[0].cookingTime} минут`);
};

let first = new Order('Hamburger');
let second = new Order('', 'has', 'Кисло-сладкий соус');
let third = new Order('', 'except', 'Сыр Чеддер');
let fourth = new Order('', 'has', 'Маслины');

first.status();
second.status();
third.status();
fourth.status();

console.log ('OurOrders',OurOrders);
