/*

  Задание - используя классы и (или) прототипы создать программу, которая будет
  распределять животных по зоопарку.

  Zoo ={
    name: '',
    AnimalCount: 152,
    zones: {
      mammals: [],
      birds: [],
      fishes: [],
      reptile: [],
      others: []
    },
    addAnimal: function(animalObj){
      // Добавляет животное в зоопарк в нужную зону.
      // зона берется из класса который наследует Animal
      // если у животного нету свойства zone - то добавлять в others
    },
    removeAnimal: function('animalName'){
      // удаляет животное из зоопарка
      // поиск по имени
    },
    getAnimal: function(type, value){
      // выводит информацию о животном
      // поиск по имени или типу где type = name/type
      // а value значение выбраного типа поиска
    },
    countAnimals: function(){
      // функция считает кол-во всех животных во всех зонах
      // и выводит в консоль результат
    }
  }

  Есть родительский класс Animal у которого есть методы и свойства:
  Animal {
    name: 'Rex', // имя животного для поиска
    phrase: 'woof!',
    foodType: 'herbivore' | 'carnivore', // Травоядное или Плотоядное животное
    eatSomething: function(){ ... }
  }

  Дальше будут классы, которые расширяют класс Animal - это классы:
  - mammals
  - birds
  - fishes
  - pertile

  каждый из них имеет свои свойства и методы:
  в данном примере уникальными будут run/speed. У птиц будут методы fly & speed и т.д
  Mammals = {
    zone: mamal, // дублирует название зоны, ставиться по умолчанию
    type: 'wolf', // что за животное
    run: function(){
      console.log( wolf Rex run with speed 15 km/h );
    },
    speed: 15
  }

  Тестирование:
    new Zoo('name');
    var Rex = new Mammal('Rex', 'woof', 'herbivore', 15 );
    your_zooName.addAnimal(Rex);
      // Добавит в your_zooName.zones.mamals новое животное.
    var Dex = new Mammal('Dex', 'woof', 'herbivore', 11 );
    your_zooName.addAnimal(Dex);
      // Добавит в your_zooName.zones.mamals еще одно новое животное.

    your_zooName.get('name', 'Rex'); -> {name:"Rex", type: 'wolf' ...}
    your_zooName.get('type', 'wolf'); -> [{RexObj},{DexObj}];

    Программу можно расширить и сделать в виде мини игры с интерфейсом и сдать
    как курсовую работу!
    Идеи:
    - Добавить ранжирование на травоядных и хищников
    - добавив какую-то функцию которая иммитирует жизнь в зоопарке. Питание, движение, сон животных и т.д
    - Условия: Если хищник и травоядный попадает в одну зону, то хищник сьедает травоядное и оно удаляется из зоопарка.
    - Графическая оболочка под программу.
*/

class Zoo {
  constructor(name) {
    this.name = name;
    this.AnimalCount = 0;
    this.zones = {
      mammals: [],
      birds: [],
      fishes: [],
      reptile: [],
      others: []
    }
  }

  addAnimal(animalObj) {
    switch (animalObj.zone) {
      case 'mammals':
        this.zones.mammals.push(animalObj);
        break;
      case 'birds':
        this.zones.birds.push(animalObj);
        break;
      case 'fishes':
        this.zones.fishes.push(animalObj);
        break;
      case 'reptile':
        this.zones.reptile.push(animalObj);
        break;
      default:
        this.zones.others.push(animalObj);
        break;
    }
    this.AnimalCount += 1;
  };
  removeAnimal(animalName) {
    for (let key in this.zones) {
      let resultIndex = this.zones[key].findIndex(item => item.name == animalName);
      if (resultIndex !== -1) {
        console.log('removeAnimal', this.zones[key][resultIndex])
        this.zones[key].splice(resultIndex, 1)
        this.AnimalCount -= 1;
      }
    }
  };
  getAnimal(type, value) {
    let filterAnimal = [];
    for (let key in this.zones) {
      let resultFilter = this.zones[key].filter(item => item[type] == value);
      if (resultFilter.length !== 0) {
        resultFilter.map(key => filterAnimal.push(key));
      }
    }
    console.log('getAnimal', filterAnimal);
  };
  countAnimals() {
    let result;
    this.zones.map(key => result += key.length);
    console.log('The result is theoretically:', this.AnimalCount);
    console.log('The result is actually:', result);
  }
};

class Animal {
  constructor(name, phrase, foodType) {
    this.name = name,
      this.phrase = phrase,
      this.foodType = foodType
  }
  eatSomething() { console.log('eat Something') }
}

class Mammals extends Animal {
  constructor(name, phrase, foodType, speed, type) {
    super(name, phrase, foodType);
    this.zone = 'mammals';
    this.type = type;
    this.speed = speed
  }
  run() {
    console.log(`${this.type} ${this.name} run with speed ${this.speed} km/h`);
  }
}

class Birds extends Animal {
  constructor(name, phrase, foodType, speed, type) {
    super(name, phrase, foodType);
    this.zone = 'birds';
    this.type = type;
    this.speed = speed
  }
  fly() {
    console.log(`${this.type} ${this.name} fly with speed ${this.speed} km/h`);
  }
}

class Fishes extends Animal {
  constructor(name, phrase, foodType, speed, type) {
    super(name, phrase, foodType);
    this.zone = 'fishes';
    this.type = type;
    this.speed = speed
  }
  swimming() {
    console.log(`${this.type} ${this.name} swimming with speed ${this.speed} km/h`);
  }
}

class Reptile extends Animal {
  constructor(name, phrase, foodType, speed, type) {
    super(name, phrase, foodType);
    this.zone = 'reptile';
    this.type = type;
    this.speed = speed
  }
  crawling() {
    console.log(`${this.type} ${this.name} crawling with speed ${this.speed} km/h`);
  }
}

let Safari = new Zoo('Safari');
console.log(Safari)
let Rex = new Mammals('Rex', 'woof', 'carnivore', 15, 'wolf');
Safari.addAnimal(Rex);
let Dex = new Mammals('Dex', 'woof', 'carnivore', 11, 'wolf');
Safari.addAnimal(Dex);

Safari.getAnimal('name', 'Rex');
Safari.getAnimal('type', 'wolf');

Safari.removeAnimal('Rex');
