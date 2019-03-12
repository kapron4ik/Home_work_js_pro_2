/*

  Задание:

  Написать функцию конструктор, которая будет иметь приватные и публичные свойства.
  Публичные методы должны вызывать приватные.

  Рассмотрим на примере планеты:

    - На вход принимаются параметр Имя планеты.

    Создается новый обьект, который имеет публичные методы и свойства:
    - name (передается через конструктор)
    - population ( randomPopulation());
    - rotatePlanet(){
      let randomNumber = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
      if ( (randomNumber % 2) == 0) {
        growPopulation();
      } else {
        Cataclysm();
      }
    }

    Приватное свойство:
    populationMultiplyRate - случайное число от 1 до 10;

    Приватные методы
    randomPopulation -> Возвращает случайное целое число от 1.000 до 10.000
    growPopulation() {
      функция которая берет приватное свойство populationMultiplyRate
      которое равняется случайному числу от 1 до 10 и умножает его на 100.
      Дальше, число которое вышло добавляет к популяции и выводит в консоль сообщение,
      что за один цикл прибавилось столько населения на планете .
    }
    Cataclysm(){
      Рандомим число от 1 до 10 и умножаем его на 10000;
      То число которое получили, отнимаем от популяции.
      В консоль выводим сообщение - от катаклизма погибло Х человек на планете.
    }

*/


  function Planet(name){
    this.name = name;
    this.population = randomPopulation();
    this.rotatePlanet = ()=>{
      let randomNumber = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
      if ( (randomNumber % 2) == 0) {
        growPopulation();
      } else {
        Cataclysm();
      }
    };
    let self = this;
    
    // ПРИВАТНОЕ СВОЙСТВО
    // let populationMultiplyRate = (function(){return Math.floor(Math.random()*9)+1})();
    function random(){return Math.floor(Math.random()*9)+1};
    let populationMultiplyRate = random();

    // ПРИВАТНЫЕ МЕТОДЫ
    function randomPopulation () {
      return Math.floor(Math.random()*9000)+1000;
    };
    function growPopulation() {
      let cycle = Number(populationMultiplyRate*100);
      console.log(cycle);
      self.population += cycle;

      console.log(`За один цикл прибавилось ${cycle} населения на планете.`);
    };
    function Cataclysm() {
      let cataclysm = Number((Math.floor(Math.random()*9)+1)*10000);
      console.log(cataclysm);
      self.population -= cataclysm;

      console.log(`От катаклизма погибло ${cataclysm} человек на планете.`);
    };
  }

  let saturn = new Planet ('Saturn');

