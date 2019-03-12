/*
  Углубляемся в прототипы
*/
  
  let cat = {
    breed: 'Balinese',
    eats: true
  };
  let myCat = {
    name: 'Luna'
  };
  // Object.setPrototypeOf(myCat, cat);
  // console.log( myCat.name );  // Luna
  // console.log( myCat.breed ); // Balinese
  // console.log( myCat.eats );  // true
  // console.log( myCat, cat );       // { name: Luna, __proto__: Object }

  /*
    JS - Прототипный, обьекто-ориентированный язык.
    Прототип является просто ссылкой которая указывает на обьект "Родителя"
    И может предствлять собой бесконечную вложеность их друг в друга
    Пишется в свойство __proto__ любого обьекта

    Что же собой являет сам прототип
  */

  // console.log( Object.prototype );

  /*
    Каждый наш прототип, который мы создаем наследует все свои методы с
    "Родительского" обьекта. Проверим это:
  */

  // console.log('cat proto equal to obj.prototype', cat.__proto__ === Object.prototype ); // true

  /*
    Убедимся в этом - модифицируем наш Object.prototype;
  */
  // let arrayT = [];
  //  Object.prototype.learning = true;
  //  console.log( 'cat.__proto__.learning', cat.__proto__.learning ); // true
  //  console.log( cat.learning, arrayT.learning );


  /*
    Разница между __proto__ и prototype в том, что:
    Первый является свойством, которое указывает на обьект который является прототипом для текущего обьекта.
    А второй, это свойство ФУНКЦИИ,которое применяется только к функциям конструкторам
    и будет использовано для создания нового обьекта с приставкой new Fn/
  */
  //
  // let Hamster = function(){};
  // Hamster.prototype.animal = 'mammal';
  //
  // let myNewHamster = new Hamster();
      // console.log( 'myNewHamster.animal:', myNewHamster );

  /*
    В JS любая сущность является обьектом. Хорошим примером тут будут например Массивы
    Проверьте значение window.Array для лучшего понимания.

    Другими словами, они наследуют свойство constructor из своего прототипа:

  */

  // var x = {};
  // console.log( x )// true
  //
  // let mySuperArray = [];
  // console.log( mySuperArray, 'myArray to global array Obj', mySuperArray.__proto__ === window.Array.prototype );

    /*
      Метод Object.create() создаёт новый объект с указанными объектом прототипа и свойствами.
    */

    let Human = {
      eat: function(){
        console.log('Human eat food:', this.food);
      }
    };

    let Jessie = Object.create(Human);
    console.log( Jessie ); 


    Jessie.food = 'Tako';
    //
    // console.log( Jessie );
    Jessie.eat()
    console.log(Jessie);
    // Human.eat = false;
    // Jessie.eat = function(){
    //   console.log('123');
    // };
    // Jessie.eat();


    /*
      Как работает Object.create и в чем разница с функцией setPrototypeOf()
      Разберем по аналогии с this
    */

      // function objectCreate( proto ){
      //   console.time('objectCreate');
      //   let obj = {};
      //   Object.setPrototypeOf(obj, proto);
      //   return obj;
      // }
      // // //
      // let Jessie2 = objectCreate(Human);
      //     console.timeEnd('objectCreate');
      //     Jessie2.food = 'Tako';
      //     Jessie2.eat();
      //
      //     console.log( Jessie2 );
