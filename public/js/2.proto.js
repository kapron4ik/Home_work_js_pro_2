/*

  Prototypes

*/
function talk(){
  console.log( this.sound );
}

let animal = {
  talk
};

let cat = {
  sound: 'meow'
};

// cat.talk();
Object.setPrototypeOf( cat, animal );


cat.talk();
console.log( cat );

let dog = {
  sound: 'woof'
};

Object.setPrototypeOf( dog, animal );
dog.talk();

/*
  Написать функцию конструктор на прототипе:

    Есть функция x, задача создать конструктор
    который будет выдавать обьекты которые имеют
    этот же метод через проотипное наследование.

    data = {
      animal: "",
      sound: ""
    }
    new Func(data) -> {
    data: '',
    __proto__ : {
      parentMethod: function(){
        console.log(' animal XX say YY');
      }
    }
  }

*/
