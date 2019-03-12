/*
  Objects in JS
*/

// var o = new Object();
// var o = {}; // пустые фигурные скобки
// o.temp = "123";

// let cat = {
//   sound: 'meow', // свойство
//   talk: function(){ // метод
//     console.log( this, this.sound );
//   }
// };

// let fox = { sound: 'Hati Ho' }


// cat.talk();
// let talkFunction = cat.talk;

//   window.sound = 'brbrbrbrbr';

//   talkFunction();

// let bindFunction = talkFunction.bind(fox);
//     bindFunction();

// let meowButton = document.getElementById('meowButton');
//     meowButton.addEventListener(
//       'click',
//       bindFunction
//     );

  // function testThis(){
  //   "use strict";
  //   return this;
  // }
  // console.log( testThis() );

  // cat.walk = function(){
  //   console.log('cat walk and say ' + this.sound);
  // };
  //
  // console.log( cat );
  // console.log( cat.walk );
  // function talk(){
  //   console.log( this.sound );
  // }
  
  // let boromir = {
  //   speak: talk,
  //   sound: "Нельзя просто так взять и..."
  // };
  // boromir.speak();
  
  // let gollum = {
  //    blab: boromir.speak,
  //    sound: "Моя прелесть...."
  // };
  // gollum.blab();

  /* 3 */
  // var Human = {
  //   name: 'Ivan',
  //   sayName: function(){
  //     console.log( ' my name is ' + this.name );
  //   },
  //   personTwo: {
  //     name: 'Petro',
  //     sayName: function(){
  //       console.log( ' my name is ' + this.name );
  //     }
  //   }
  // };
  // //
  // Human.sayName();
  // Human.personTwo.sayName();

  // Функция конструктор обьекта
  // function Student( name, profession ){
  //   this.name = name;
  //   this.profession = profession;
  //   this.sayName = function(){
  //     console.log('my name:', this.name );
  //   };
  // }

  // var Dima = new Student( 'Dima', 'Frontend');
  // console.log(Dima);
  // Dima.sayName();

  /*
    call, bind, apply

    Apply:
    fun.apply(thisArg, [argsArray])

  */

  // function add(c, d) {
  //   console.log(this);
  //   console.log(this.a + this.b + c + d);
  // }
  // add(3,4); //NaN
  // var ten = {a: 1, b: 2};
  // add.call(ten, 3, 4); // 10
  // var x = [1,2,3,6];
  // add.apply(ten, x);


  // let bindedFunc = add.bind(ten);
  //     bindedFunc(1,2);
