const nickname = '私の名前は佐藤です。';
const age = '年齢は25です。';
console.log(nickname + age);


languages = ['JavaScript', 'PHP', 'Ruby', 'Python']
const  tenplate = `私の好きな言語は${languages[0]}です次はPythonを勉強してみたいです。`
  console.log(tenplate);


  let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);


let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);


let age1 = (playerList[0].age + playerList[1].age + playerList[2].age);
let ave = 3;
console.log(age1 / ave);


function sayHello(){
  console.log('Hello');
}

sayHello();


const sayWorld = function(){
  console.log('World');
}

sayWorld();


user.birthday = '2000-09-27';


user.sayHello = function(){
  console.log('Hello!');
}
user.sayHello();


let calc = {};

calc.add = function(x,y){
  console.log(x + y);
}
calc.add(5,2);


calc.subtract = function(x,y){
  console.log(x - y);
}
calc.subtract(20,10);


calc.multiply = function(x,y){
  console.log(x * y);
}
calc.multiply(7,7);


calc.divide = function(x,y){
  console.log(x / y)
}
calc.divide(25,5)


function remainder(x,y){
  let re = x % y
  console.log(x + 'を' + y + 'で割った余りは' + re + 'です。')
  return re
}
remainder(5,3)


// 関数の中で変数を定義していてスコープ外からだと参照できないから



let random = Math.random();
console.log(random);


function Timeout(){
  console.log('Hello World!')
};
setTimeout(Timeout,3000)


const num = 0;
if (num > 0){
  console.log('num is greater than 0')
}else if (num < 0){
  console.log('num is less than 0')
}else if (num === 0){
  console.log('num is 0')
}


let numbers = [];

for (let i = 0; i < 100; i++){
  numbers.push =(i);
}
console.log(numbers);


let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let item of mixed) {
  if (typeof item === 'number') {
    if (item % 2 === 0) {
      console.log('even');
    } else if(item % 2 !== 0 && typeof item === 'number'){
      console.log('odd');
    }
  } else {
    console.log('not number');
  }
}