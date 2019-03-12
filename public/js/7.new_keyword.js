/*
  Разберем немного работу с ключевым словом new
*/

function Person(name){
  this.name = name;
  this.fn = () => {}
}
Person.prototype.sayMyName = function(){
  console.log('My name is', this.name);
};
let Heisenberg = new Person('Haisenberg');
    Heisenberg.sayMyName();
console.log( Heisenberg );

/*
  Что делает ключевое слово New:
  1. Создает новый пустой обьект
  2. Смотрит что мы пытаемся создать, проверяет прототип обьекта и создает
  ссылку с пустого, только что созданого обьекта на обьект "родитель"
  3. Вызывает конструктор и применяет все поля которые в нем присутствуют через
  обращение this к новосозданному обьекту
  4. Возвращает обьект, у которого есть прототип и те свойства что мы указали

  Проверим?
  Напишем свою функцию которая в упрощенном виде будет имитировать работу new

  Назовем её newZ - протому что new зарезервированное слово в JS
*/
  //
  function newZ( constructor ){
    let obj = {}; // Пункт 1
    Object.setPrototypeOf(obj, constructor.prototype ); // Пункт 2
    // console.log( 'arg', arguments ); // Проверим аргументы
    constructor.call( obj, arguments[1] ); // Вызовем конструктор и передадим в него наши аргументы функции
    return obj; // Вернем готовый обьект
  }

  // var Jessie = newZ( Person, 'Jessie' );
  //     Jessie.sayMyName();
  //     console.log( Jessie );
  // //     console.log( Heisenberg );
