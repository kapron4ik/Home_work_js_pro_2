
  /*
    Синтаксис:
    Object.defineProperty(obj, prop, descriptor)

    obj - Объект, в котором объявляется свойство.
    prop - Имя свойства, которое нужно объявить или модифицировать.
    descriptor - Дескриптор – объект, который описывает поведение свойства

  */

  let MyObj = {};
      MyObj.title = "Prop";
      MyObj._ObjHeight = 0;
      MyObj.func = function(){
        return this.name;
      };

      Object.defineProperty(
        MyObj,
        "name",
        {
          // value – значение свойства, по умолчанию undefined
          value: "Вася",
          // configurable – если true, то свойство можно удалять, а также менять его
          // в дальнейшем при помощи новых вызовов defineProperty. По умолчанию false.
          // configurable: true,
          // writable – значение свойства можно менять, если true. По умолчанию false.
          // writable: false,
          // enumerable – если true, то свойство просматривается в цикле for..in и
          // методе Object.keys(). По умолчанию false.
          // enumerable: false,
          // get – функция, которая возвращает значение свойства. По умолчанию undefined.
          // get: () => { console.log( 'getter'); },
          // // set – функция, которая записывает значение свойства. По умолчанию undefined.
          // set: () => { console.log( 'setter'); }
        });

        //writable demo ->
        // MyObj.name = 10;
        // MyObj.name

        // configurable demo ->
        // delete MyObj.name;

        // console.log('name demo:', MyObj);


        // enumerable demo ->
        // Object.defineProperty(
        //   MyObj,
        //   "func",
        //   { enumerable: false }
        // ); // Можно добавить уже после обьявления

        // for(var key in MyObj) console.log(key);
        // console.log( Object.keys(MyObj) );
        // - - - - - - - - - - - - - -
        // Object.defineProperty(MyObj, "fullName", {
        //   get: function() {
        //     return `${this.title} ${this.name}`;
        //   }
        // });

        // console.log('FullName getter:', MyObj.fullName );
        // console.log( MyObj );
        //
        Object.defineProperty(MyObj, "height", {
          get: function() {
            return `${this._ObjHeight} cm`;
          },
          set: function( value ){
            this._ObjHeight = value;
            console.log( 'ObjHeight setter:', this._ObjHeight );
          }
        });
        MyObj.height = 20;
        console.log( MyObj.height );
        console.log( MyObj, MyObj.ObjHeight );
